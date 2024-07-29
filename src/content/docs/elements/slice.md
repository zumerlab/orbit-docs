---
title: o-slice web-component
---

`<o-slice>` is a standard web-component for rendering a radial slices or pies. By default there are 60 slice per orbit. 

### Customization
  
- **o-slice size:** Each `.o-slice` can be adjusted using the CSS class utility `.shrink-10` to `.shrink-90`, allowing the o-slice to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing the o-slice to expand by a mutiple of `.orbit` size. Note that `shrink-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** o-slice has one special attribute: `shape` to define different endings. Currently, you can choose between `circle`, `arrow`, `slash`, `backslash` and `zigzag` shapes. Default `none`. To change o-slice color use CSS custom var `--color` and `--hover-color` in a `o-slice` style.

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary o-slice angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.gap-*`:** Set a gap space, ranging from 0 to 30, between `o-slices`.
  - **`.inner-orbit`:** To place an`.o-slice` just below its orbit.
  - **`.outer-orbit`:** To place `.o-slice` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.o-slice` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.o-slice` a 25% outer its orbit.
  
**Important:** 
  - `<o-slice>` can only be used into `.orbit` or `.orbit-*`.
  - `<o-slice>` doesn't support ellipse shape. See `.orbit` section for more information.

### Usage

```html
<div class="orbit range-180"> 
  <o-slice />
  <o-slice shape="zigzag" class="gap-5" />
  <o-slice slice-color="green" class="gap-10" />
  <o-slice class="gap-5" />
</div>
```
