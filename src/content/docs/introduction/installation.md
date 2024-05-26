---
title: Launch Orbit
---

## Installation

### Download or Include via CDN:
Download the library files from our repository or include them directly from a CDN in your HTML file:

```html
<link rel="stylesheet" href="path/to/orbit.css">
```

### Install via Package Manager:
If you are using a package manager like npm or yarn, install the library by running:

```bash
npm install @zumerlab/orbit
```

or

```bash
yarn add  @zumerlab/orbit
```

## Basic Usage

### Include Styles:
Link the library styles in the `<head>` section of your HTML file.

```html
<head>
  <link rel="stylesheet" href="path/to/orbit.css">
</head>
```
or 

```html
<style>
  @import url('path/to/orbit.css');
</style>
```

### Apply Orbit Classes:
Utilize predefined classes in your HTML elements to benefit from Orbit features. Folllowing code set a container and inside it a radial layout with three circles.

```html
<div class="container">
  <div class="orbit">
    <div class="orbiter"></div>
    <div class="orbiter"></div>
    <div class="orbiter"></div>
  </div>
</div>
```
Congratulations! You've successfully integrated and started using Orbit. Follow next steps for more advanced options and customization possibilities. If you encounter any issues, feel free to reach out to our support community for assistance.

Happy coding!


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