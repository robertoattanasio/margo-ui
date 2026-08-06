import type { TagProps } from "react-renderable";
import type { ElementType } from "react";

export type SnippetTokenType =
  | "plain"
  | "comment"
  | "string"
  | "keyword"
  | "number"
  | "tag"
  | "attr"
  | "fn"
  | "type"
  | "punct";

export type SnippetToken = {
  type: SnippetTokenType;
  value: string;
};

export type SnippetOwnProps = {
  snippet: string;
  title?: string;
};

export type SnippetProps<T extends ElementType = "div"> = TagProps<T, SnippetOwnProps>;
