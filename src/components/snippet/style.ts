import type { SnippetTokenType } from "./type.js";

export const snippetBaseClassName = "rounded-lg border-2 border-border bg-(--margo-code-surface)";

export const snippetBarClassName = `flex items-center justify-between gap-4 border-b-2 border-border
rounded-t-[calc(var(--radius-lg)-var(--margo-border-width-2))] bg-(--margo-code-bar) px-3 py-2`;

export const snippetTitleClassName = "text-mc uppercase tracking-widest text-medium";

export const snippetCopyClassName = "ml-auto bg-neutral/60";

export const snippetPreviewClassName =
  "flex flex-wrap items-center justify-center gap-6 rounded-b-lg border-t-2 border-border p-8";

export const snippetCodeClassName = "overflow-x-auto p-4 text-xs leading-relaxed";

export const snippetTokenClassName: Record<SnippetTokenType, string> = {
  plain: "text-(--margo-code-plain)",
  comment: "text-(--margo-code-comment) italic",
  string: "text-(--margo-code-string)",
  keyword: "text-(--margo-code-keyword)",
  number: "text-(--margo-code-number)",
  tag: "text-(--margo-code-tag)",
  attr: "text-(--margo-code-attr)",
  fn: "text-(--margo-code-fn)",
  type: "text-(--margo-code-type)",
  punct: "text-(--margo-code-punct)",
};
