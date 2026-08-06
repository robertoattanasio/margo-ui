import { useState } from "react";

import { MdCheck, MdContentCopy } from "react-icons/md";

import { Guard, List, Swap } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { Button } from "../button/button.js";
import { snippetHighlight } from "./highlight.js";
import {
  snippetBarClassName,
  snippetBaseClassName,
  snippetCodeClassName,
  snippetTitleClassName,
  snippetTokenClassName,
} from "./style.js";

import type { SnippetProps } from "./type.js";

export const Snippet = ({ snippet, title, className = null }: SnippetProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const source = snippet.trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(source);
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className={cn(snippetBaseClassName, className)}>
      <div className={snippetBarClassName}>
        <Guard guardIf={!title} shouldHide>
          <span className={snippetTitleClassName}>{title}</span>
        </Guard>
        <Button onClickBlur={handleCopy} aria-label="copy" aria-pressed={isCopied} className="ml-auto bg-neutral/60">
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
    </div>
  );
};
