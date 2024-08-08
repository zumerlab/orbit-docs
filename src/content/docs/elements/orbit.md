---
title: orbit CSS class
---
### CSS Class: `.orbit`

The `.orbit` CSS class, along with variations from `.orbit-0` to `.orbit-12`, defines a circular perimeter inside an `.gravity-spot`. Within the `.orbit` element, various Orbit components such as `satellites`, `slices`, `progress`, `vectors`, `sides`, and `texts` can be positioned.

By default, these Orbit elements are evenly distributed along the perimeter of `.orbit`. For instance, if there are five `satellites`, they will be spaced 72 degrees apart, covering the full 360-degree range of `.orbit`. The zero degree of Orbit is positioned similar to the 12 o'clock mark on an analog clock.

It's important to note that multiple `orbits` can be nested within an `gravity-spot`. When no specific size is defined, there can be up to 12 orbits. However, when a size is defined, there is no limit to the number of `orbits` that can be rendered, including duplicate sizes (e.g., multiple `.orbit-5`). In such cases, the stacking order follows standard HTML rules, with later `orbits` appearing above earlier ones.

`.orbit-12` extends to match the size of its parent `.gravity-spot`, while `.orbit-0` has no extension beyond its own boundary. `Orbits` numbered from 1 to 11 represent a percentage of the parent `.gravity-spot` extension, positioned in between these two extremes. `Orbits` from 13 to 24 are placed outside force boundary.

### Customization

- **Granular Orbit size:** Each `.orbit` can be finely adjusted using the CSS class utility `.shrink-10` to `.shrink-90`, allowing the orbit to shrink by a specified percentage.
  
- **Look and feel:** Orbits are initially invisible but can be customized by adding border and background properties.

- **Adjust radial layout:** Various CSS utility classes can modify the radial layout of children within `.orbits`:
  - **`.range-*`:** Set arbitrary orbit range from 0 to 360 length. If custom range is defined, `.fit-range` could be added to justify children distribution.
  - **`.from-*`:** Set starting point angle from 0 to 360 degrees.
  - **`.ccw`:** Invert orbit child arragement to counter clock wise direction.
  - **`.gooey-fx-*`:** This CSS utility enhances the appearance of grouped and sticky child elements within the orbit. Possible values are `.gooey-fx`, `.gooey-fx-medium`, and `.gooey-fx-max`

- **Turn Orbits into ellipses:** Two CSS variables (`--o-ellipse-x` and `--o-ellipse-y`) can transform `.orbit` or `.orbit-*` into an ellipse shape. This transformation affects the orbit and its children, excluding `<o-slice>`, `<o-progress>`, and `<o-text>` web components, which remain hidden when the orbit is elliptical. Values for these variables range from 0 to 1. A CSS utlity could be added in a future.


### Usage

- Basic example that renders two orbits
  ```html
  <div class="gravity-spot">
    <div class="orbit"></div>
    <div class="orbit"></div>
  </div>
  ```

- Basic example that renders two orbits of same radius the latter one is above the former.
  ```html
  <div class="gravity-spot">
    <div class="orbit-10"></div>
    <div class="orbit-10"></div>
  </div>
  ```

- This renders three orbits with custom distribution
  ```html
  <div class="orbit-2"></div>
  <div class="orbit-9"></div>
  <div class="orbit-12"></div>
  ```

- This renders nested orbits around a satellite
  ```html
  <div class="gravity-spot">
    <div class="orbit">
      <div class="satellite">
        <div class="gravity-spot">
          <div class="orbit"></div>
          <div class="orbit"></div>
        </div>
      </div>
    </div>
  </div>
  ```

  - This example renders one orbit with cusotm range and starting point for its satellites
  ```html
  <div class="gravity-spot">
    <div class="orbit-9 from-90 range-180 fit-range">
      <div class="satellite"></div>
      <div class="satellite"></div>
      <div class="satellite"></div>
    </div>
  </div>
  ```
