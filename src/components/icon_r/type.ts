import type { SVGProps } from "react";

export type IconROwnProps = {
  title?: string;
};

export type IconRProps = Omit<SVGProps<SVGSVGElement>, keyof IconROwnProps> & IconROwnProps;
