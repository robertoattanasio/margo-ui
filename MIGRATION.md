# Migration notes

Standalone write-ups of fixes that need to be ported by hand into other projects
vendoring or forking margo-ui's theme/variables/cn setup. Each entry is self-contained
— no need to read the commit history or changeset that shipped it.

---

# line-height architecture fix + radius scale rename

Two related fixes to margo-ui's Tailwind v4 theme (`src/css/`) and its `cn()` helper
(`src/utils/cn/cn.ts`). Each fix is independent — apply either one alone.

Both ship as `minor` changesets in this package's convention: renaming or removing a
Tailwind class name / CSS custom property name in margo-ui is treated as `minor`, not
`major`, because consumers of this package do not auto-update on minor bumps (only
patch pulls in automatically). Don't second-guess this into `major` unless told to.

---

## Fix 1 — line-height: remove Tailwind's built-in pairing, expose one baseline variable

### The bug

Tailwind v4 ships every default `text-*` size with a **paired** `line-height` baked
into the same theme key, e.g. (from `tailwindcss/theme.css`):

```css
--text-base: 1rem;
--text-base--line-height: calc(1.5 / 1);
--text-5xl: 3rem;
--text-5xl--line-height: 1;
```

If your own `@theme` block only overrides `--text-5xl` (the font-size) to repoint it
at a custom variable, **Tailwind's own `--text-5xl--line-height` default survives** —
`@theme` blocks merge key-by-key, they don't replace each other wholesale. So every
`text-*` utility keeps emitting a bundled `line-height` even after you think you've
"removed" it from your own theme file. The practical symptom: applying `leading-*` on
top of a `text-*` class doesn't override the line-height unless you add `!important`
(`leading-tight!`), because both rules land in the same CSS layer/specificity and the
`text-*` rule's bundled line-height happens to come out later in the generated
stylesheet.

**Fix:** explicitly reset every default Tailwind size key you use to `initial`:

```css
@theme {
  --text-xs--line-height: initial;
  --text-sm--line-height: initial;
  --text-base--line-height: initial;
  --text-lg--line-height: initial;
  --text-xl--line-height: initial;
  --text-2xl--line-height: initial;
  --text-3xl--line-height: initial;
  --text-4xl--line-height: initial;
  --text-5xl--line-height: initial;
  --text-6xl--line-height: initial;
  --text-7xl--line-height: initial;
  --text-8xl--line-height: initial;
  --text-9xl--line-height: initial;
}
```

Only needed for keys that collide with Tailwind's *default* scale names (`xs`, `sm`,
`base`, `lg`, `xl`, `2xl`...`9xl`). Fully custom key names (anything not in Tailwind's
default scale) never had a built-in pairing and don't need this.

### A second, unrelated bug hiding behind the same symptom

If the project uses `tailwind-merge` (directly, or via a `cn()` wrapper), check its
default config: **`font-size` and `leading` are configured as conflicting class
groups** (`conflictingClassGroups: { 'font-size': ['leading'] }`, see
`node_modules/tailwind-merge/dist/bundle-cjs.js`). This means:

- `twMerge('leading-tight text-5xl')` → `'text-5xl'` — **the `leading-tight` class is
  silently deleted**, it never reaches the DOM. This has nothing to do with CSS
  cascade or specificity; the class string itself gets mutilated before render.
- `twMerge('text-5xl leading-tight')` → `'text-5xl leading-tight'` — fine, because the
  conflict only evicts a *leading* group class that appears **before** a later
  `font-size` class, not the other way around.

**Fix:** in every `cn(...)`/`clsx(...)` call, always put `leading-*` **after**
`text-*`/`font-*` size classes in the string. This is a project-wide authoring rule,
not a one-off patch — audit every existing usage of `leading-*` combined with a
`text-*` class and reorder if needed. (`!leading-*` also happens to "work" here, but
only as a side effect of how tailwind-merge handles the important-modifier case
differently — don't rely on it, fix the ordering instead.)

### Expose one overridable baseline + a small named scale

Pattern already used by this kit for every other design token
(`--margo-font-size-*`, `--margo-font-weight-*`, `--margo-radius`): a raw,
overridable value lives in `variables.css` under `:root`; `theme.css` remaps it into
Tailwind's native namespace.

`src/css/variables.css` — add near the other typography tokens:

```css
--margo-line-height: 1.5;
```

`src/css/theme.css` — add a new section inside `@theme` (after the font sizes,
alongside where you added the `initial` resets above):

```css
/* Line heights */
--leading-mc: calc(var(--margo-line-height) / 6);
--leading-xs: calc(var(--margo-line-height) / 3);
--leading-sm: calc(var(--margo-line-height) / 2);
--leading-md: calc(var(--margo-line-height) * 2 / 3);
--leading-lg: calc(var(--margo-line-height) * 5 / 6);
--leading-base: var(--margo-line-height);
--leading-xl: calc(var(--margo-line-height) * 7 / 6);
--leading-2xl: calc(var(--margo-line-height) * 4 / 3);
```

Naming mirrors the font-size scale's vocabulary (`mc, xs, sm, md, lg, base, xl, 2xl`).
Values are clean sixths of the base (1/6 .. 8/6), so with the default base of `1.5`
the computed scale is `0.25, 0.5, 0.75, 1.0, 1.25, 1.5(base), 1.75, 2.0` — evenly
spaced, and rescales proportionally if you change `--margo-line-height`. This all
lands under Tailwind's own `--leading-*` namespace (not a custom `--margo-*` one), so
Tailwind auto-generates `leading-mc`, `leading-xl`, etc. as real utility classes, and
`tailwind-merge`'s built-in `leading` group (it reads valid values from
`--leading-*` theme vars) recognizes them automatically — no `cn.ts` changes needed
for this part.

Set the actual global default (in the app's global stylesheet, e.g. `main.css`,
**not** in the margo-ui package itself):

```css
html,
body {
  line-height: var(--margo-line-height);
  /* ...existing rules... */
}
```

Rationale for defaulting to the base value globally rather than `1`: `line-height` is
inherited, so a global default of `1` cascades into every multi-line text element
(paragraphs, leads) that doesn't set its own `leading-*`, and most fonts' actual glyph
height exceeds `1em`, so lines start touching/overlapping. `1.5` (or whatever your
`--margo-line-height` is) is a safe, readable default for prose; single-line UI
components (buttons, chips, inputs) that need a tighter box should set their own
`leading-none`/`leading-mc` explicitly rather than relying on the global default.

### Also update

- Docs: add a row to whatever "exposed tokens" reference table the project has (in
  this repo: `../../src/app/margo-ui/typography/-constants/typography.ts`,
  `TYPOGRAPHY_TOKENS` array) — `{ name: "--margo-line-height", description: "the
  baseline leading; leading-mc/xs/sm/md/lg/base/xl/2xl scale as multiples of it" }`.
- Changeset (this repo uses `@changesets/cli`): `minor`, wording along the lines of
  "Remove the built-in Tailwind line-height pairing from every `text-*` size and
  expose `--margo-line-height` as the single overridable baseline. Add a
  `leading-mc/xs/sm/md/lg/base/xl/2xl` scale defined as multiples of that baseline."

---

## Fix 2 — radius scale: rename fractions to named steps

### The problem

The radius scale used raw fraction-style names: `rounded-margo-1` (= full
`--margo-radius`), `rounded-margo-3/4`, `rounded-margo-1/2`. Unreadable/easy to
mistype, and doesn't read like the rest of the kit's scales (which use `mc, xs, sm,
base, md, lg...`).

### The fix

`src/css/theme.css`, replace:

```css
/* before */
--radius-margo-1: var(--margo-radius);
--radius-margo-3\/4: calc(var(--margo-radius) * 3 / 4);
--radius-margo-1\/2: calc(var(--margo-radius) / 2);
```

with:

```css
/* after */
--radius-margo-mc: calc(var(--margo-radius) / 4);
--radius-margo-xs: calc(var(--margo-radius) / 2);
--radius-margo-sm: calc(var(--margo-radius) * 3 / 4);
--radius-margo-base: var(--margo-radius);
```

**Important invariant, do not violate it:** `--margo-radius` is documented (see the
kit's own "Foundation" docs page) as *the largest radius in the kit; the scale
divides it*. Every named step must stay **≤ 1× the base** (`mc` = 1/4, `xs` = 1/2,
`sm` = 3/4, `base` = 1). Do not add steps above the base (no `lg`/`xl`/`2xl` here) —
that would silently break a stated design contract elsewhere in the docs. (This is a
mistake I made and caught before shipping — worth flagging explicitly so it isn't
repeated.)

Mapping for the rename (values are unchanged, only names change, except `mc` which is
new):

| old               | new                  | value (base = 0.5rem) |
|-------------------|----------------------|------------------------|
| `rounded-margo-1` | `rounded-margo-base` | 8px                    |
| `rounded-margo-3/4` | `rounded-margo-sm` | 6px                    |
| `rounded-margo-1/2` | `rounded-margo-xs` | 4px                    |
| *(new)*           | `rounded-margo-mc`   | 2px                    |

### cn.ts / tailwind-merge validator — must be updated too

`src/utils/cn/cn.ts` has a custom `tailwind-merge` classGroup extension so
`rounded-margo-*` dedupes correctly against Tailwind's own `rounded-*` utilities
(they're registered as the *same* classGroup, not a conflicting one — unlike the
leading/font-size case above, this part was already architected correctly). The
validator regex is tied to the exact naming scheme:

```ts
// before
const isMargoStep = (value: string) => /^margo-\d+(\/\d+)?$/.test(value);

// after
const isMargoRadiusStep = (value: string) => /^margo-(mc|xs|sm|base)$/.test(value);
```

(renamed the function too, since it's now specific to the radius scale rather than a
generic numeric-step matcher) and update its one usage site:

```ts
const radiusGroups = Object.fromEntries(
  RADIUS_CORNERS.map((corner) => [
    corner ? `rounded-${corner}` : "rounded",
    [{ [corner ? `rounded-${corner}` : "rounded"]: [isMargoRadiusStep] }],
  ]),
);
```

If you skip this step, `tailwind-merge` will stop recognizing `rounded-margo-*` as
part of the `rounded` group, so it won't dedupe against other `rounded-*` classes —
not a crash, but a silent correctness regression (stale classes pile up in the merged
string instead of the last one winning).

### Rename all usages

Find every occurrence of the three old class names across the whole project (both the
component library itself and any app/docs code consuming it), for example:

```bash
grep -rln "rounded-margo" --include="*.ts" --include="*.tsx" <lib-path> <app-path>
```

Rename in this exact order (longer/more specific patterns first, so `rounded-margo-1`
doesn't get corrupted while it's still a substring of `rounded-margo-1/2`):

```bash
sed -i '' 's#rounded-margo-3/4#rounded-margo-sm#g' <file>
sed -i '' 's#rounded-margo-1/2#rounded-margo-xs#g' <file>
sed -i '' 's#rounded-margo-1\([^0-9/]\)#rounded-margo-base\1#g' <file>
```

The last pattern requires a trailing non-digit/non-slash character to avoid
false-matching `rounded-margo-1` as a prefix of something else — but it will **miss**
occurrences where `rounded-margo-1` is the very last thing on its line (e.g. inside a
multi-line template literal, right before a newline). Grep afterwards for
`rounded-margo-1\b` with no following character captured, and fix those by hand — in
this repo that happened in a `select` component's template literal (`rounded-margo-1`
followed directly by a newline, twice).

Verify with:

```bash
grep -rn "rounded-margo-1\b\|rounded-margo-1/\|rounded-margo-3/4\|rounded-margo-1/2" --include="*.ts" --include="*.tsx" <lib-path> <app-path>
# must be empty
```

### Also update

- Any prose documentation describing the old fraction-based naming (in this repo:
  `../../src/app/margo-ui/foundation/-components/screen.tsx` had a paragraph
  literally explaining "the fractions are the names, not an ordering" — rewrite it
  to describe the named scale instead).
- Changeset: `minor`, e.g. "Rename the radius scale from fractions to named steps:
  `rounded-margo-1` → `rounded-margo-base`, `rounded-margo-3/4` → `rounded-margo-sm`,
  `rounded-margo-1/2` → `rounded-margo-xs`. Add `rounded-margo-mc` (a quarter of
  `--margo-radius`) as a new, smaller step. `--margo-radius` remains the ceiling the
  scale divides."

---

## Verification checklist

- [ ] `grep` for `--text-*--line-height` in your own `@theme`: every default-scale key
      you use (`xs`...`9xl`) has an explicit `initial` reset.
- [ ] `grep` for `leading-` combined with `text-`/`font-` inside any `cn(...)` call:
      `leading-*` always comes after the size class in the string.
- [ ] `--margo-line-height` (or your project's equivalent name) exists in
      `variables.css`, and the global `html, body` rule references it via `var()`
      rather than a hardcoded number.
- [ ] No leftover `rounded-margo-1`, `rounded-margo-3/4`, `rounded-margo-1/2` anywhere
      (`grep` returns nothing).
- [ ] `isMargoRadiusStep`'s regex matches the exact set of names you shipped, and its
      one call site is updated.
- [ ] Both changesets are `minor` (not `major`) per this package's versioning
      convention.
