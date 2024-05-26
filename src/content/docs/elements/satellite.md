---
title: satellite
---

Elements with `.satellite` are placed along an `.orbit` or `.orbit-*` serving as content place and/or to nest `.orbits` using `.orbit-zone`. 
By default up to 24 satellites can be placed in an orbit. The number can be modify with `$max-orbiters` var at `_variables.scss`.

### Content
Satellites are suitable to render different content. It is desirable to use `.capsule` inside a `.satellite` to put content.

### Shapes

Satellite provides an unstyled circle shape, but it can be easily changed according project needs.

A few set of shapes utilities are provided (`.circle`, `.box`, `.rounded-box`). Nevertheless, users can set any shapes using svg, images, etc. At this instance, Orbit is focused on setting a radial layout, not in UI styles.

### Customization

  - Utility class `.range-*`: Default '360deg'
  - Utility class `.from-*`: Default '0deg'
  - Utility class `.grow-*x`: To increase size according number of orbits. Default 1.
  - Utility class `.reduce-*`: To decrease size according an orbit fracction percentage. Default 1.
  - Utility class `.inner-orbit`: To place `.satellite` just below its orbit
  - Utility class `.outer-orbit`: To place `.satellite` just above its orbit
  - Utility class `.quarter-inner-orbit`: To place `.satellite` a 25% into its orbit.
  - Utility class `.quarter-outer-orbit`: To place `.satellite` a 25% outer its orbit.

  - CSS styles. User can customize `.satellite` by adding CSS properties to it. 

### Usage

- This renders six satellites with different properties
```html
<div class="orbit">
  <div class="satellite">
    <div class="capsule">
      Change volume
    </div>
  </div>
  <div class="satellite inner-orbit"></div>
  <div class="satellite outer-orbit"></div>
  <div class="satellite rounded-box"></div>
  <div class="satellite grow-2x"></div>
  <div class="satellite reduce-40"></div>
</div>
```

- This renders two satellites. One of which nests `.orbital-zone` with some orbits
```html
<div class="orbit">
  <div class="satellite"></div>
  <div class="satellite">
    <div class="orbit-zone">
      <div class="orbit"></div>
      <div class="orbit"></div>
      <div class="orbit"></div>
    </div>
  </div>
</div>
```

**Important:**

- `.satellite` can only be placed into a parent `.orbit` or `.orbit-*`
- There is no limit for nesting orbit-zone in satellites.




**Source:** [_satellite.scss](https://github.com/zumerlab/orbit/blob/main/src/scss/_satellite.scss)
