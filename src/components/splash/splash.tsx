import { Tag } from "react-renderable";

import type { ElementType } from "react";
import type { SplashProps, SplashServeProps } from "./type.js";

import { cn } from "../../utils/cn/cn.js";
import { splashBaseClassName, splashOverrideClassName } from "./style.js";

import "./splash.css";

export const Splash = <T extends ElementType = "div">({ initial = true, className, ...rest }: SplashProps<T>) => (
  <Tag
    {...Tag.forward<T>(rest)}
    inert
    aria-hidden={true}
    role="presentation"
    data-margo-splash=""
    data-margo-splash-initial={initial}
    className={cn(splashBaseClassName, className && splashOverrideClassName, className)}
  />
);

Splash.Serve = ({ instant = false }: SplashServeProps) => (
  <span hidden data-margo-splash-serve="" data-margo-splash-instant={instant || undefined} />
);
