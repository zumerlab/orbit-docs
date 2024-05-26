---
title: spoke
---

This class renders a perpendicular dash line along an orbit. By default there are 24 spokes per orbit. The number can be modify with `$max-orbiters` var at `_variables.scss`.
  
### Customization

It has some special classes and css variables to customize it:

  - Utility class `.range-*`: Default '360deg'
  - Utility class `.from-*`: Default '0deg'
  - Utility class `.grow-*x`: To increase size according number of orbits. Default 1.
  - Utility class `.reduce-*`: To decrease size according an orbit fracction percentage. Default 1.
  - Utility class `.inner-orbit`: To place `.spoke` just below its orbit
  - Utility class `.outer-orbit`: To place `.spoke` just above its orbit
  - Utility class `.quarter-inner-orbit`: To place `.spoke` a 25% into its orbit.
  - Utility class `.quarter-outer-orbit`: To place `.spoke` a 25% outer its orbit.

  - CSS styles. User can customize `.spoke` by adding CSS properties to it. 

### Usage 

```html
<div class="orbit">
  <div class="spoke"><div>
  <div class="spoke grow-5x"><div> 
  <div class="spoke reduce-10"><div> 
  <div class="spoke"><div>
</div>
```

**Important:** `.spoke` can only be placed into a parent `.orbit` or `.orbit-*`



**Source:** [_spoke.scss](https://github.com/zumerlab/orbit/blob/main/src/scss/_spoke.scss)
