import { cn } from "../../utils/cn/cn.js";
import { sliderBaseClassName } from "./style.js";

import type { ChangeEvent, CSSProperties } from "react";
import type { SliderProps } from "./type.js";

import "./slider.css";

const sliderPercent = (value: number, min: number, max: number) =>
  max > min ? `${((Math.min(max, Math.max(min, value)) - min) / (max - min)) * 100}%` : "0%";

export const Slider = ({
  min = 0,
  max = 100,
  value,
  defaultValue,
  style,
  className,
  onChange,
  ...rest
}: SliderProps) => {
  const current = Number(value ?? defaultValue ?? (Number(min) + Number(max)) / 2);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;

    input.style.setProperty("--margo-slider-value", sliderPercent(input.valueAsNumber, Number(min), Number(max)));
    onChange?.(event);
  };

  return (
    <input
      {...rest}
      type="range"
      min={min}
      max={max}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      style={{ ...style, "--margo-slider-value": sliderPercent(current, Number(min), Number(max)) } as CSSProperties}
      className={cn(sliderBaseClassName, className)}
    />
  );
};
