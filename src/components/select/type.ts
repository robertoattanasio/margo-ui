import type { ComponentPropsWithRef } from "react";

export type SelectOwnProps<T> = {
  options?: readonly T[];
  itemExtractor?: ((args: { row: T; index: number }) => string) | null;
  valueExtractor?: ((args: { row: T; index: number }) => string | number) | null;
  placeholder?: string;
  canBeEmpty?: boolean;
  active?: boolean;
  clickable?: boolean;
};

export type SelectProps<T> = Omit<ComponentPropsWithRef<"select">, "children"> & SelectOwnProps<T>;
