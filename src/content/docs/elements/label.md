---
title: o-label web-component
---

`<o-label>` is a standard web-component for rendering curved text. By default there are 60 sector per orbit. 

### Customization
  
- **o-label size:** Each `.o-label` can be adjusted using the CSS class utility `.reduce-10` to `.reduce-90`, allowing the o-label to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing the o-label to expand by a mutiple of `.orbit` size. Note that `reduce-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** o-label has some special attributes: `text-anchor` (start, middle, end) to align text, and `fit-range` to expand text to path length. To change o-label path color use CSS custom var `--color` and `--hover-color` in a `o-label` style. To modify font size you can set `font-size` in a `o-label` style tag or use CSS custom var `--font-size`. Nota that font-weight, font-family, etc can be set on `o-label` style tag as well.

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary o-label angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.inner-orbit`:** To place an`.o-label` just below its orbit.
  - **`.outer-orbit`:** To place `.o-label` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.o-label` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.o-label` a 25% outer its orbit.
  
**Important:** 
  - `<o-label>` can only be used into `.orbit` or `.orbit-*`.
  - `<o-label>` doesn't support ellipse shape. See `.orbit` section for more information.

### Usage

```html
<div class="orbit"> 
  <o-label>Hello World!</o-label>
</div>
```
