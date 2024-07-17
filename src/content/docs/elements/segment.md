---
title: segment CSS class
---
### CSS Class: `.segment`

This class renders a segment that if it used with other segment renders a regular polygon figure. Elements with `.segment` are placed along an `.orbit` or `.orbit-*` path serving as content place and/or to nest `.orbits` using `.orbit-zone`.  By default, up to 24 satellites can be placed in an orbit. 

### Content

Segment are suitable to render different content. For this, use `.capsule` element inside a `.segment`. See `capsule` reference on documentation.

### Customization

- **Granular Satellite size:** Each `.segment` can be finely adjusted using the CSS class utility `.reduce-10` to `.reduce-90`, allowing the segment to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing the segment to expand by a mutiple of `.orbit` size. Note that `reduce-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** Satellites are initially invisible but can be customized by adding border and background properties. In addition, a few set of CSS shapes utilities are provided (`.circle`, `.box`, `.rounded-box`). Nevertheless, users can set any shapes using svg, images, etc.

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary segment angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.inner-orbit`:** To place an`.segment` just below its orbit.
  - **`.outer-orbit`:** To place `.segment` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.segment` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.segment` a 25% outer its orbit.

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
