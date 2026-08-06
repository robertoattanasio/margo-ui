import { useEffect, useRef, useState } from "react";

import { Tag } from "react-renderable";

import { cn } from "../../utils/cn/cn.js";
import { navigationBarDefaultFill, navigationBarBaseClassName, navigationBarTrackClassName } from "./style.js";

import type { CSSProperties, ElementType } from "react";
import type { NavigationBarProps } from "./type.js";

import "./navigation_bar.css";

const TRICKLE_MS = 200;
const TRICKLE_CEILING = 90;
const TRICKLE_RATIO = 0.12;
const START_PROGRESS = 8;
const FADE_MS = 250;

export const NavigationBar = <T extends ElementType = "div">({
  loading = false,
  fill = navigationBarDefaultFill,
  className,
  ...rest
}: NavigationBarProps<T>) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (loading) {
      window.clearTimeout(timeoutRef.current);
      setIsVisible(true);
      setProgress(START_PROGRESS);

      const interval = window.setInterval(
        () => setProgress((current) => current + (TRICKLE_CEILING - current) * TRICKLE_RATIO),
        TRICKLE_MS,
      );

      return () => window.clearInterval(interval);
    }

    setProgress((current) => (current > 0 ? 100 : 0));
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, FADE_MS);

    return () => window.clearTimeout(timeoutRef.current);
  }, [loading]);

  return (
    <Tag
      {...Tag.forward<T>(rest)}
      role="progressbar"
      aria-hidden={!isVisible}
      style={{ "--margo-navigation-bar-fill": fill, "--margo-navigation-bar-progress": `${progress}%` } as CSSProperties}
      className={cn(navigationBarBaseClassName, isVisible ? "opacity-100" : "opacity-0", className)}
    >
      <div className={navigationBarTrackClassName} />
    </Tag>
  );
};
