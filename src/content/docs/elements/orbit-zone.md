---
title: orbit-zone CSS class
---
### CSS Class: `.orbit-zone`

The `.orbit-zone` CSS class serves as a container for organizing Orbit elements within a radial layout. It is fundamental in every Orbit project, acting as the parent container for all other Orbit elements.

### Nested Structure

`.orbit-zone` can be nested within `.satellite` elements or even within another `.orbit-zone`, allowing for the creation of intricate radial layouts.

### Customization

- **Extension length:** By default, `.orbit-zone` extends 500px, influencing its child elements' dimensions. For instance, `.orbit-12` will have a 500px diameter. To adjust this, utilize utility classes like `.diameter-50` to `.diameter-2000`, or directly modify the `--o-size` CSS custom variable either inline or through custom CSS classes. It's important to note that each usage of `.orbit-zone` resets to default values, so modify the `--o-size` property within the `.orbit-zone` class for persistent changes.

  **Note:** For responsive designs, consider using the optional `Orbit.resize()` JavaScript function, which adjusts `--o-length` dynamically when the parent element of `.orbit-zone` is resized.

- **Alignment utilities:** By default, child `.orbit-zone` elements align at the center. This behavior can be altered using alignment utility classes such as `.at-center-left`, `.at-center-right`, `.at-top-left`, `.at-top-center`, `.at-top-right`, `.at-bottom-left`, `.at-bottom-center`, and `.at-bottom-right`.

### Example Usage

```html
<div class="orbit-zone diameter-400">
  <div class="orbit"></div>
  <div class="orbit">
    <div class="satellite">
      <div class="orbit-zone diameter-400"> <!-- Nested example -->
        <div class="orbit"></div>
      </div>
    </div>
  </div>
</div>
```

This structure illustrates how `.orbit-zone` can be utilized and nested to create complex radial layouts in an Orbit project.