---
title: o-text web-component
---

`<o-text>` is a standard web-component for rendering curved text. By default there are 60 slice per orbit. 

### Customization
  
- **o-text size:** Each `.o-text` can be adjusted using the CSS class utility `.reduce-10` to `.reduce-90`, allowing the o-text to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing the o-text to expand by a mutiple of `.orbit` size. Note that `reduce-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** o-text has some special attributes: `text-anchor` (start, middle, end) to align text, and `fit-range` to expand text to path length. To change o-text path color use CSS custom var `--color` and `--hover-color` in a `o-text` style. To modify font size you can set `font-size` in a `o-text` style tag or use CSS custom var `--font-size`. Nota that font-weight, font-family, etc can be set on `o-text` style tag as well.

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary o-text angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.gap-*`:** Set a gap space, ranging from 0 to 30, between `o-texts`.
  - **`.inner-orbit`:** To place an`.o-text` just below its orbit.
  - **`.outer-orbit`:** To place `.o-text` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.o-text` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.o-text` a 25% outer its orbit.
  
**Important:** 
  - `<o-text>` can only be used into `.orbit` or `.orbit-*`.
  - `<o-text>` doesn't support ellipse shape. See `.orbit` section for more information.

### Usage

```html
<div class="orbit"> 
  <o-text>Hello World!</o-text>
</div>
```
