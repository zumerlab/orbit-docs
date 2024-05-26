---
title: o-progress
---

`<o-progress>` is a standard web-component for rendering a radial progress bar. Just one o-progress can be used per orbit.
It has two elements: a progress bar and a background bar that show the max range progress bar can achieve.

### Customization

  - Attribute `value`: To set a number that represents the progress bar value.
  - Attribute `max`: To set the max allowed `value`.
  - Attribute `bar-color`: To set a color for progress bar. Default `orange`
  - Attribute `bg-color`: To set a color for background bar. Default `transparent`
  - Attribute `shape`: To set a different endings looks. Currently, you can choose between `circle`, `arrow`, `slash`, `backslash` and `zigzag` shapes. Default `none`


  - Utility class `.range-*`: Default '360deg'
  - Utility class `.from-*`: Default '0deg'
  - Utility class `.grow-*x`: To increase `o-progress` height by multiplying orbit radius. Default '1x'
  - Utility class `.reduce-*`: To reduce `o-progress` height by reducing current orbit percentage. Default '100'
  - Utility class `.inner-orbit`: To place `o-progress` just below its orbit
  - Utility class `.outer-orbit`: To place `o-progress` just above its orbit
  - Utility class `.quarter-inner-orbit`: To place `o-progress` a 25% into its orbit.
  - Utility class `.quarter-outer-orbit`: To place `o-progress` a 25% outer its orbit.


  - CSS styles. You can customize `o-progress` by adding CSS properties to `o-progress path` 
  
**Important:** `<o-progress>` can only be used into `.orbit` or `.orbit-*`

### Usage

```html
<div class="orbit"> 
  <o-progress value="75" max="100" shape="circle" />
</div>
```


**Source:** [orbit-progress.js](https://github.com/zumerlab/orbit/blob/main/src/web-components/orbit-progress.js)
