export const sliderPercent = (value: number, min: number, max: number) =>
  max > min ? `${((Math.min(max, Math.max(min, value)) - min) / (max - min)) * 100}%` : "0%";
