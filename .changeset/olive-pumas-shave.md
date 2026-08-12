---
"margo-ui": major
---

Input component added: a field shaped like an Item, with Input.Icon and Input.Text, whose focus and disabled states are read off the native input with focus-within and has rather than passed as props.

Breakpoint 1440 added between 1280 and 1920, for a laptop docked to an external display.

Colour token --margo-color-secondary renamed to --margo-color-low, exposed as --color-low instead of --color-secondary: the value is the lowest contrast step above the surface, not a secondary accent. Rename the custom property in every theme override, and swap bg-secondary, text-secondary and border-secondary for their low counterparts. Both --margo-color-low and the new --margo-color-low-alpha are now derived from --margo-color-main and --margo-color-on-main with color-mix, so retheming those two carries them along; the translucent one is for fills that sit over anything but the page surface. color-mix raises the browser floor to Safari 16.2 and Chrome 111.

Label component added: the caption above a field, polymorphic with label as its default element, so the same treatment covers a section heading or the title of a group of controls through as. It accepts disabled, which dims it to follow the field it points at.

Button and Item drop their tab stop and pointer handling in favour of the inert attribute, for clickable and disabled alike. The exported class names itemNotClickableClassName and buttonNotClickableClassName are gone, and the disabled ones no longer carry pointer-events-none. Being inert, a disabled Button or Item is now hidden from assistive technology rather than announced as disabled.
