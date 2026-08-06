import { useState } from "react";

import { MdCheck, MdContentCopy } from "react-icons/md";

import { Guard, List, Swap, Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { Button } from "../button/button.js";
import { snippetHighlight } from "./highlight.js";
import {
  snippetBarClassName,
  snippetBaseClassName,
  snippetCodeClassName,
  snippetCopyClassName,
  snippetTitleClassName,
  snippetTokenClassName,
} from "./style.js";

import type { ElementType } from "react";
import type { SnippetProps } from "./type.js";

export const Snippet = <T extends ElementType = "div">({ snippet, title, className, ...rest }: SnippetProps<T>) => {
  const [isCopied, setIsCopied] = useState(false);
  const source = snippet.trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(source);
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <Tag {...Tag.forward<T>(rest)} className={cn(snippetBaseClassName, className)}>
      <div className={snippetBarClassName}>
        <Guard guardIf={!title} shouldHide>
          <span className={snippetTitleClassName}>{title}</span>
        </Guard>
        <Button onClickBlur={handleCopy} aria-label="copy" aria-pressed={isCopied} className={snippetCopyClassName}>
          <Button.Icon
            icon={
              <Swap.Boolean
                swapOn={isCopied}
                components={[<MdContentCopy className="text-sm" />, <MdCheck className="text-sm" />]}
              />
            }
          />
        </Button>
      </div>
      <pre className={snippetCodeClassName}>
        <code>
          <List
            array={snippetHighlight(source)}
            itemExtractor={({ row, index }) => (
              <span key={index} className={snippetTokenClassName[row.type]}>
                {row.value}
              </span>
            )}
          />
        </code>
      </pre>
    </Tag>
  );
};
