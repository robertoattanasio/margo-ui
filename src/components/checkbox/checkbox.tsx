import { useEffect, useRef } from "react";

import { cn } from "../../utils/cn/cn.js";
import { checkboxBaseClassName } from "./style.js";

import type { CheckboxProps } from "./type.js";

import "./checkbox.css";

export const Checkbox = ({ indeterminate = false, className, ref, ...rest }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) checkboxRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <input
      {...rest}
      ref={(node) => {
        checkboxRef.current = node;

        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      type="checkbox"
      className={cn(checkboxBaseClassName, className)}
    />
  );
};
