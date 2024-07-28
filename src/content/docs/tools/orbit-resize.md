---
title: Orbit.resize() JS method
---

Orbit provides a Orbit JS class with `resize()` method to allow `.gravity-spot` to adapt its size to a parent element. See [installation doc section](/introduction/installation)

- **Important:** Currently resize() only works on initial `.gravity-spot`. Does not affect child `gravity-spots`.

### Usage

```html
<body>
    <div class="container">
        <div class="gravity-spot">
            <!-- Orbit app -->
        </div>
    </div>
    <script scr="orbit.js">
        Orbit.resize('container');  // Select parent element
    </script>
</body>
```
