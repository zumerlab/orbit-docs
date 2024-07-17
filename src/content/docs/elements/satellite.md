---
title: satellite CSS class
---
### CSS Class: `.satellite`

Elements with `.satellite` are placed along an `.orbit` or `.orbit-*` path serving as content place and/or to nest `.orbits` using `.orbit-zone`.  By default, up to 24 satellites can be placed in an orbit. 

### Content

Satellites are suitable to render different content. If other contant than characters is used, it is desirable to use `.capsule` element inside a `.satellite`. See `capsule` reference on documentation.

### Customization

- **Granular Satellite size:** Each `.satellite` can be finely adjusted using the CSS class utility `.reduce-10` to `.reduce-90`, allowing the satellite to shrink by a specified percentage. On opposite way, the CSS class utility `.grow-1x` to `.grow-12x`, allowing the satellite to expand by a mutiple of `.orbit` size. Note that `reduce-*` and `.grow-*x` can't be used at same time.
  
- **Look and feel:** Satellites are initially invisible but can be customized by adding border and background properties. In addition, a few set of CSS shapes utilities are provided (`.circle`, `.box`, `.rounded-box`). Nevertheless, users can set any shapes using svg, images, etc.

- **Adjust radial layout:**
  - **`.angle-*`:** Set arbitrary satellite angle from 0 to 360 degrees, overrriding automatic radial arragement.
  - **`.inner-orbit`:** To place an`.satellite` just below its orbit.
  - **`.outer-orbit`:** To place `.satellite` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.satellite` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.satellite` a 25% outer its orbit.

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

- This renders two satellites. One of which nests `.orbit-zone` with some orbits
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

