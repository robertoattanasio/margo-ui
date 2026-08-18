---
"margo-ui": major
---

Replace the ad-hoc radius and border values with proportional token scales, and stop overriding
Tailwind's `border-2`.

Radii were never tokenised: components reached for `rounded-lg`, `rounded-md` and `rounded-sm`
straight from Tailwind's default scale, so the kit's corner rhythm belonged to Tailwind rather than
to margo, and a consumer had no single place to retune it. The kit now defines `--margo-radius` as
the largest radius and derives the rest from it by division, exposed as `rounded-margo-1` (the
whole), `rounded-margo-3/4` and `rounded-margo-1/2`. The name states the proportion, so the scale
can gain a step later without renaming the existing ones. The three steps reproduce the previous
values exactly, so nothing shifts visually. Set `--margo-radius` and every corner in
the kit moves together, keeping its ratios.

Borders follow the same shape: `--margo-border` replaces `--margo-border-width-2`, and the
`border-margo` utility replaces `border-2` throughout the components. `rounded-full` stays outside
both scales, since Toggle and Ripple need a circle rather than a step on a ramp.

**Breaking:** the `--border-width-2` theme entry is gone, so `border-2` in your own code goes back
to Tailwind's 2px instead of silently rendering the kit's 1.5px. Use `border-margo` where you meant
the kit's border. `--margo-border-width-2` is gone with it; rename any override to `--margo-border`.
Tailwind's own `rounded-*` utilities are untouched and still available.

`cn` learns both scales. Custom utility names are invisible to tailwind-merge, and the failure is
not a no-op: `border-margo` parses as a border *colour*, so `cn("border-margo", "border-border")`
used to drop the width entirely and render a borderless surface. The radius steps were merely
unknown, which is quieter but worse to debug — two radii survived the merge and the cascade picked
the winner. `border-margo` is now registered in every `border-w-*` group and `rounded-margo-*` in
every `rounded-*` group, so the scales deduplicate against each other and against Tailwind's own
`rounded-*` and `border-*` utilities.
