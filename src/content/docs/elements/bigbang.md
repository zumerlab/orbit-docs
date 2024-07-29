---
title: bigbang CSS class
---
### CSS Class: `.bigbang`

The `.bigbang` CSS class is a container for Orbit Apps, serving as a foundation for your project. By default, it occupies all available space and centers its content. However, you can use CSS utilities to adjust the alignment as needed.

For more control, wrap `.bigbang` in a parent element with defined width and height. This class is recommended as the starting point for every Orbit project.

### Customization

- **Extension length:** By default, `.bigbang` extends to 100% of available space. To restrict its extension, wrap it in a parent element with a defined width and height.

- **Alignment utilities:** By default, child `.bigbang` elements align at the center. This behavior can be altered using alignment utility classes such as `.at-center-left`, `.at-center-right`, `.at-top-left`, `.at-top-center`, `.at-top-right`, `.at-bottom-left`, `.at-bottom-center`, and `.at-bottom-right`.

### Example usage

```html
<div class="bigbang">
  <div class="gravity-spot">
    <div class="orbit"></div>
    <div class="orbit"></div>
  </div>
</div>
```

