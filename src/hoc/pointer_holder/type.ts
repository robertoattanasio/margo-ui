import type { FocusEventHandler, PointerEventHandler, ReactElement } from "react";

export type PointerHolderApi = {
  keys: string[];
};

export type PointerHolderChildProps = {
  onBlur?: FocusEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
  onPointerLeave?: PointerEventHandler<HTMLElement>;
  onPointerOver?: PointerEventHandler<HTMLElement>;
};

export type PointerHolderProps = {
  children: (api: PointerHolderApi) => ReactElement<PointerHolderChildProps>;
  attribute?: string;
  disabled?: boolean;
};
