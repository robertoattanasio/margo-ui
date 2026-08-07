import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type LayerProps = Omit<ComponentPropsWithoutRef<"dialog">, "onClose" | "open"> & {
  open?: boolean;
  onClose?: () => void;
  dismissible?: boolean;
  children?: ReactNode;
};
