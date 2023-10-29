---
title: Launch Orbit
---
## Quick start

1. Clone the repository.
2. Go to `examples` folder and open index.html with a browser. That's all. Server is not required because this examples are very simple and static.
3. For development, we recommend using Visual Studio Code with the Live Sass Compile and Live Server extensions. This setup will provide a seamless experience until we have [devbox available as standalone tool](https://github.com/zumerlab/devbox).

## Barebone template

Folllowing code set a container and inside it a radial layout with three circles.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="../assets/css/index.css" type="text/css" defer/>
    <title>Orbit Rocks!</title>
  </head>
  <body>
    <div class="o-conatiner">
      <div class="orbit">
        <div class="orbiter"></div>
        <div class="orbiter"></div>
        <div class="orbiter"></div>
      </div>
    </div>
  </body>
</html>
```