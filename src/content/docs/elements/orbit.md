---
title: orbit 
---

`.orbit` or `.orbit-*` renders a circumsference inside an .orbit-zone. Inside `.orbit` can be placed many elements, such as satellites, sectors, progress, spokes, segments, and labels.
By default there are 12 orbits. The number can be modify with `$max-orbits` var at `_variables.scss`.

**Important:** .orbit or .orbit-* is a direct child element of .orbit-zone.

### Stack order
Orbits stack order is same as any html element. First orbit is below second one. 

### Usage: 

- Basic example that renders two orbits
  ```html
  <div class="orbit-zone">
    <div class="orbit"></div>
    <div class="orbit"></div>
  </div>
  ```

- Basic example that renders two orbits of same radius the latter one is abowe the former.
  ```html
  <div class="orbit-zone">
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
  <div class="orbit-zone">
    <div class="orbit">
      <div class="satellite">
        <div class="orbit-zone">
          <div class="orbit"></div>
          <div class="orbit"></div>
        </div>
      </div>
    </div>
  </div>
  ```
  
### Customization:

It has some special attributes and css variables to customize it or its children elements:

  - Utility class `.reduce-*`: To decrease size according an orbit fracction percentage. Default 1.
  - Utility class `.goey-fx`: This utility allows orbit child elements to look grouped and sticky. Try it!

  - CSS styles. User can customize `.orbit` by adding CSS properties.

Besides css properties that user can change according his needs, there two css variables to turn `.orbit`or `.orbit-*` into 
an ellipse (`--o-ellipse-x`, and `--o-ellipse-y`). This will affect orbit and its children, with an excepcion of `<o-sector>`, `<o-progress>`, and `<o-label>` web components that will be hiden when orbit is an ellipse. Values range from 0 to 1.

```html
<div class="orbit-zone" style="--o-ellipse-x: 0.6">
  <div class="orbit">
    <div class="satellite">
      <div class="orbit-zone">
        <div class="orbit"></div>
        <div class="orbit"></div>
      </div>
    </div>
  </div>
</div>
```

There are some utility classes that are set on `.orbit` element and affect its child radial layout (`.from-*`, `.range-*`, etc).  Please see [**Radial Layout section**].



**Source:** [_orbit-class.scss](https://github.com/zumerlab/orbit/blob/main/src/scss/_orbit-class.scss)