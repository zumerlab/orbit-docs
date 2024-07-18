---
title: segment CSS class
---
### CSS Class: `.segment`

This class renders a segment that if used with other segments generates a regular polygon figure.  By default, up to 60 segments can be placed in an orbit. 

### Content

Use `.capsule` element inside a `.segment` to add content See `capsule` reference on documentation.

### Customization

- **Look and feel:** Segments can be customized by adding border and background properties. 

- **Adjust radial layout:**
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
