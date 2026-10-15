import { MdKeyboardArrowDown } from "react-icons/md";

import { List } from "react-renderable";

import { join } from "../../utils/join/join.js";

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
    <div data-margo-active={active} inert={!clickable || undefined} className={join("margo-select", className)}>
      <select {...rest} className="margo-select-control">
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

      <span className="margo-select-icon">
        <MdKeyboardArrowDown className="margo-select-arrow" />
      </span>
    </div>
  );
};
