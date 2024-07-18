---
title: Orbit resize JS method
---

Orbit provides a Orbit JS class with `resize()` method to allow `.orbit-zone` to adapt its size to a parent element. See [installation doc section](/introduction/installation)

### Usage

```html
<body>
    <div class="container">
        <div class="orbit-zone">
            <!-- Orbit app -->
        </div>
    </div>
    <script scr="orbit-resize.js">
        Orbit.resize('container');  // Select parent element
    </script>
</body>
```
