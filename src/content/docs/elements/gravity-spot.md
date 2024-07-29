---
title: gravity-spot CSS class
---
### CSS Class: `.gravity-spot`

The `.gravity-spot` CSS class serves as a container for organizing Orbit elements within a radial layout. It is fundamental in every Orbit project, acting as the parent container for all other Orbit elements.

### Nested structure

`.gravity-spot` can be nested within `.satellite` elements or even within another `.gravity-spot`, allowing for the creation of intricate radial layouts.

### Customization

- **Extension length:** By default, `.gravity-spot` extends 500px, influencing its child elements' dimensions. For instance, `.orbit-12` will have a 500px diameter. To adjust this, directly modify the `--o-force` CSS custom variable either inline or through custom CSS classes. It's important to note that each usage of `.gravity-spot` resets to default values, so modify the `--o-force` property within the `.gravity-spot` class for persistent changes.

  **Note:** For responsive designs, consider using the optional `Orbit.resize()` JavaScript function, which adjusts `--o-force` dynamically when the parent element of `.gravity-spot` is resized.

- **Adjust radial layout:** 
  - **`.from-*x`:** Set initial orbit size from 1x to 12x. 

- **Alignment utilities:** By default, child `.gravity-spot` elements align at the center. This behavior can be altered using alignment utility classes such as `.at-center-left`, `.at-center-right`, `.at-top-left`, `.at-top-center`, `.at-top-right`, `.at-bottom-left`, `.at-bottom-center`, and `.at-bottom-right`.

### Example usage

```html
<div class="gravity-spot">
  <div class="orbit"></div>
  <div class="orbit">
    <div class="satellite">
      <div class="gravity-spot"> <!-- Nested example -->
        <div class="orbit"></div>
      </div>
    </div>
  </div>
</div>
```

This structure illustrates how `.gravity-spot` can be utilized and nested to create complex radial layouts in an Orbit project.