---
title: o-sector web-component
---

`<o-sector>` is a standard web-component for rendering a radial slices or pies. By default there are 24 sector per orbit. 

### Customization
  
- **o-sector size:** Each `.o-sector` can be adjusted using the CSS class utility `.reduce-10` to `.reduce-90`, allowing the o-sector to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing the o-sector to expand by a mutiple of `.orbit` size. Note that `reduce-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** o-sector has two special attributes: `sector-color` to set its background color, and `shape` to define different endings. Currently, you can choose between `circle`, `arrow`, `slash`, `backslash` and `zigzag` shapes. Default `none`

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary o-sector angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.inner-orbit`:** To place an`.o-sector` just below its orbit.
  - **`.outer-orbit`:** To place `.o-sector` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.o-sector` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.o-sector` a 25% outer its orbit.
  - **CSS styles:** User can customize `o-sector` by adding CSS properties to `o-sector path` selector.
  
**Important:** 
  - `<o-sector>` can only be used into `.orbit` or `.orbit-*`.
  - `<o-sector>` doesn't support ellipse shape. See `.orbit` section for more information.

### Usage

```html
<div class="orbit range-180"> 
  <o-sector />
  <o-sector shape="zigzag" class="gap-5" />
  <o-sector sector-color="green" class="gap-10" />
  <o-sector class="gap-5" />
</div>
```
