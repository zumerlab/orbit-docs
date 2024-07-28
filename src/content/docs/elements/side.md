---
title: side CSS class
---
### CSS Class: `.side`

This class renders a side that if used with other sides generates a regular polygon figure.  By default, up to 60 sides can be placed in an orbit. 

### Content

Use `.capsule` element inside a `.side` to add content See `capsule` reference on documentation.

### Customization

- **Look and feel:** sides can be customized by adding border and background properties. 

- **Adjust radial layout:**
  - **`.inner-orbit`:** To place an`.side` just below its orbit.
  - **`.outer-orbit`:** To place `.side` just above its orbit.
  - **`.quarter-inner-orbit`:** To place `.side` a 25% into its orbit.
  - **`.quarter-outer-orbit`:** To place `.side` a 25% outer its orbit.

### Usage 

This render a regular pentagon
```html
<div class="orbit">
  <div class="side"><div>
  <div class="side"><div>
  <div class="side"><div>
  <div class="side"><div>
  <div class="side"><div>
</div>
```

**Important:** `.side` can only be placed into a parent `.orbit` or `.orbit-*`
