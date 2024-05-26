---
title: o-sector
---

`<o-sector>` is a standard web-component for rendering a radial slices or pies. By default there are 24 sector per orbit. The number can be modify with `$max-orbiters` var at `_variables.scss`.

### Custmization

  - Attribute `sector-color`: To set a color for sector. Default `orange`
  - Attribute `shape`: To set a different endings looks. Currently, you can choose between `circle`, `arrow`, `slash`, `backslash` and `zigzag` shapes. Default `none`

  - Utility class `.gap-*` applied on `.orbit` or `.orbit-*` or in `<o-sector>`: to set gap space between o-sectors. Default '0'
  - Utility class `.range-*`: Default '360deg'
  - Utility class `.from-*`: Default '0deg'
  - Utility class `.grow-*x`: To increase `o-sector` height by multiplying orbit radius. Default '1x'
  - Utility class `.reduce-*`: To reduce `o-sector` height by reducing current orbit percentage. Default '100'
  - Utility class `.inner-orbit`: To place `o-sector` just below its orbit
  - Utility class `.outer-orbit`: To place `o-sector` just above its orbit
  - Utility class `.quarter-inner-orbit`: To place `o-sector` a 25% into its orbit.
  - Utility class `.quarter-outer-orbit`: To place `o-sector` a 25% outer its orbit.


  - CSS styles. User can customize `o-sector` by adding CSS properties to `o-sector path`
  
**Important:** 

  - `<o-sector>` can only be used into `.orbit` or `.orbit-*`.
  - `<o-sector>` doesn't support ellipse shape. See `.orbit` section for more information.

### Usage

```html
<div class="orbit range-180"> 
  <o-sector />
  <o-sector class="gap-5" />
  <o-sector class="gap-10" />
  <o-sector class="gap-5" />
</div>
```


**Source:** [orbit-sector.js](https://github.com/zumerlab/orbit/blob/main/src/web-components/orbit-sector.js)
