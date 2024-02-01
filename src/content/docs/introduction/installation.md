---
title: Launch Orbit
---
## Quick start
Add Orbit to Your Page
You can add Orbit to your page via the free jsDelivr CDN. Just add the following <link> element into your page's <head>, before your project's stylesheets.


Alternatively, check out other CDNs that host Orbit or you can install Orbit via a package manager.

## Playground code


## Minimal template

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