import { cn } from "../../utils/cn/cn.js";
import { iconRBaseClassName } from "./style.js";

import type { IconRProps } from "./type.js";

export const IconR = ({ className, title = "Roberto Attanasio", ...rest }: IconRProps) => (
  <svg
    viewBox="278 272 479 479"
    role="img"
    aria-label={title}
    fill="currentColor"
    {...rest}
    className={cn(iconRBaseClassName, className)}
  >
    <path
      transform="translate(0 1024) scale(.1 -.1)"
      d="M3200 7120 l0 -400 1263 -2 1262 -3 70 -24 c226 -76 383 -209 481 -406 201 -408 -14 -891 -466 -1047 l-95 -32 -252 -4 c-139 -2 -253 -6 -253 -8 0 -2 24 -30 54 -61 182 -194 296 -409 364 -683 25 -103 25 -113 29 -549 l4 -443 219 -342 c120 -187 226 -351 235 -363 l16 -23 457 0 c251 0 463 4 469 8 9 6 -11 45 -71 137 -46 72 -276 429 -511 795 -235 366 -440 685 -456 709 -16 25 -28 49 -26 55 2 5 39 22 84 37 655 220 1113 889 1069 1564 -27 409 -172 732 -455 1015 -262 261 -546 404 -904 455 -85 12 -312 15 -1344 15 l-1243 0 0 -400z M3200 4801 l0 -400 508 -3 c456 -3 511 -5 545 -20 66 -30 115 -76 144 -136 l28 -57 5 -725 5 -725 390 0 390 0 0 745 c0 682 -2 752 -18 830 -89 414 -404 747 -812 857 l-100 27 -542 4 -543 3 0 -400z"
    />
  </svg>
);
