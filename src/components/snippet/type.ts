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

export type SnippetProps = {
  snippet: string;
  title?: string;
  className?: string | null;
};
