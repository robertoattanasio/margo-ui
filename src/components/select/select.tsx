import { MdKeyboardArrowDown } from "react-icons/md";

import { List } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { selectActiveClassName, selectBaseClassName, selectControlClassName, selectIconClassName } from "./style.js";

import type { SelectProps } from "./type.js";

export const Select = <T,>({
  options = [],
  itemExtractor = null,
  valueExtractor = null,
  placeholder = "",
  canBeEmpty = false,
  active = false,
  clickable = true,
  className,
  ...rest
}: SelectProps<T>) => {
  return (
    <div
      data-margo-active={active}
      inert={!clickable || undefined}
      className={cn(selectBaseClassName, active && selectActiveClassName, className)}
    >
      <select {...rest} className={selectControlClassName}>
        {placeholder ? (
          <option value="" disabled={!canBeEmpty} hidden={!canBeEmpty}>
            {placeholder}
          </option>
        ) : null}

        <List
          array={options}
          itemExtractor={({ row, index }) => (
            <option key={valueExtractor?.({ row, index }) ?? index} value={valueExtractor?.({ row, index })}>
              {itemExtractor?.({ row, index })}
            </option>
          )}
        />
      </select>

      <span className={selectIconClassName}>
        <MdKeyboardArrowDown className="text-md translate-x-0.5" />
      </span>
    </div>
  );
};
