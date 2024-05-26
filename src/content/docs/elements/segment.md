---
title: segment
---

This class renders a segment that if it used with other segment renders a regular polygon figure. By default there are 24 segments per orbit. The number can be modify with `$max-orbiters` var at `_variables.scss`.
  
### Customization

It has some special classes and css variables to customize it:

  - Class utility `.range-*`: Default '360deg'
  - Class utility `.from-*`: Default '0deg'
  - Class utility `.grow-*x`: To increase size according number of orbits. Default 1.
  - Class utility `.reduce-*`: To decrease size according an orbit fracction percentage. Default 1.
  - Class utility `.inner-orbit`: To place `.segment` just below its orbit
  - Class utility `.outer-orbit`: To place `.segment` just above its orbit

  - CSS styles. User can customize `.segment` by adding CSS properties to it. 

### Usage 

This render a regular pentagon
```html
<div class="orbit">
  <div class="segment"><div>
  <div class="segment"><div>
  <div class="segment"><div>
  <div class="segment"><div>
  <div class="segment"><div>
</div>
```

**Important:** `.segment` can only be placed into a parent `.orbit` or `.orbit-*`

### TO-DO

- Check is all utilities go with segment. If not create visual aids



**Source:** [_segment.scss](https://github.com/zumerlab/orbit/blob/main/src/scss/_segment.scss)
