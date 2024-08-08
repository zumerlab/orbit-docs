---
title: vector CSS class
---
### CSS Class: `.vector`

`vectors` are perpendicular lines rendered across `orbits`. They resemble minute marks in an analog watch, but can be adapted to create connector lines, for instance. Elements with `.vector` are placed along an `.orbit` or `.orbit-*` path.  By default, up to 60 vectors can be placed in an orbit. 

### Customization

- **Granular vectors size:** Each `.vector` can be adjusted using the CSS class utility `.shrink-10` to `.shrink-90`, allowing the vector to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing vector to expand by a mutiple of `.orbit` size. Note that `shrink-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** Css background color property can be used.

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary vector angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.inner-orbit`:** To place an`.vector` just below its orbit.
  - **`.outer-orbit`:** To place `.vector` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.vector` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.satellite` a 25% outer its orbit.

### Usage 

```html
<div class="orbit">
  <div class="vector"><div>
  <div class="vector grow-5x"><div> 
  <div class="vector shrink-10"><div> 
  <div class="vector"><div>
</div>
```

**Important:** `.vector` can only be placed into a parent `.orbit` or `.orbit-*`

