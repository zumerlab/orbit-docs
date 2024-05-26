---
title: orbit-zone
---

Orbit-zone is a container class that groups `.orbit` classes. It serves as a container with a size defined once by `--o-length` when the Orbit app is initialized.
~~When orbit-zone is nested into a `.satellite`, its length will depend on the `.satellite`'s `.orbit` diameter.~~

### Customization

  - Aligment class utilities: `.center`, `center-left`, `.center-right`, `.top-left`, `.top-center`, `.top-right`, `.bottom-left`, `.bottom-center`,  `.bottom-right`. Default `.center`

**Note:** Orbit is 100% CSS, but in case user needs Orbit be responsive there is an optional tiny JS script that modifies `--o-length` when a parent element of `.orbit-zone` is resized. See how to use in Orbit.resize docs

**Important:** The `orbit-zone` class can only be nested into a `.satellite`.

### Usage

```html
<div class="orbit-zone">
  <div class="orbit"></div>
  <div class="orbit">
    <div class="satellite">
      <div class="orbit-zone"> <!-- nested -->
        <div class="orbit"></div>
      </div>
    </div>
  </div>
</div>
```



**Source:** [_orbit-zone.scss](https://github.com/zumerlab/orbit/blob/main/src/scss/_orbit-zone.scss)
