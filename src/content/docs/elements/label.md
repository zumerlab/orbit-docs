---
title: o-label
---

`<o-label>` is a standard web-component for rendering curved text. There are up to 24 sector per orbit. 
The number can be modify with `$max-orbiters` var at `_variables.scss`.

### Customization
  - Attribute `label-color`: To set a text color for label. Default `black`
  - Attribute `bg-color`: To set a background color for label. Default `none`

  - Class `.gap-*` applied on `.orbit` or `.orbit-*` or in `<o-label>`: to set gap space. Default '0'
  - utility class `.range-*` applied on `.orbit` or `.orbit-*`: Default '360deg'
  - utility class `.from-*` applied on `.orbit` or `.orbit-*`: Default '0deg'
  - utility class `.inner-orbit`: To place `o-label` just below its orbit
  - utility class `.outer-orbit-orbit`: To place `o-label` just above its orbit
  - Utility class `.quarter-inner-orbit`: To place `o-sector` a 25% into its orbit.
  - Utility class `.quarter-outer-orbit`: To place `o-sector` a 25% outer its orbit.

  - CSS styles. User can customize `o-label` by adding CSS properties to `o-label path`
  
**Important:** 

  - `<o-label>` can only be used into `.orbit` or `.orbit-*`.
  - `<o-label>` doesn't support ellipse shape. See `.orbit` section for more information.

### Usage

```html
<div class="orbit"> 
  <o-label>Hello World!</o-label>
</div>
```


**Source:** [orbit-label.js](https://github.com/zumerlab/orbit/blob/main/src/web-components/orbit-label.js)
