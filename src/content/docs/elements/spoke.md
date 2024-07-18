---
title: spoke CSS class
---
### CSS Class: `.spoke`

`Spokes` are perpendicular lines rendered across `orbits`. They resemble minute marks in an analog watch, but can be adapted to create connector lines, for instance. Elements with `.spoke` are placed along an `.orbit` or `.orbit-*` path.  By default, up to 60 spokes can be placed in an orbit. 

### Customization

- **Granular Spokes size:** Each `.spke` can be adjusted using the CSS class utility `.reduce-10` to `.reduce-90`, allowing the spoke to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing spoke to expand by a mutiple of `.orbit` size. Note that `reduce-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** Css background color property can be used.

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary spoke angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.inner-orbit`:** To place an`.spoke` just below its orbit.
  - **`.outer-orbit`:** To place `.spoke` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.spoke` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.satellite` a 25% outer its orbit.

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

