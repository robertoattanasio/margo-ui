import type { SVGProps } from "react";

export type IconMargoOwnProps = {
  title?: string;
};

export type IconMargoProps = Omit<SVGProps<SVGSVGElement>, keyof IconMargoOwnProps> & IconMargoOwnProps;
