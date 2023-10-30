---
title: Layout
---
# CSS Radial Layout with Orbit

## Introduction

The CSS Radial Layout with Orbit offers a user-friendly way to organize elements in circular patterns using CSS alone. Whether you have a single element or multiple orbiters, Orbit automatically calculates orbit dimensions based on the number of orbiters within a parent element. Additionally, you have the flexibility to manually set orbit dimensions using the `.size-1` to `.size-6` classes. Nesting orbits is also supported, ensuring sub-orbits inherit dimensions from their parent orbits. This makes creating complex and visually captivating circular UI designs a breeze.

## Core Class: `.orbit`

The central element around which you want to arrange orbiters should have the `.orbit` class applied. This class serves as the anchor for the radial layout, and you can nest sub-orbits within it as needed.

```html
<div class="orbit">
  <!-- Central element content goes here -->
</div>
```

## Automatic Calculation of Orbit Dimensions

Orbit excels in automatically calculating orbit dimensions based on the number of orbiters within a parent element. This means you don't have to specify individual dimensions for each orbiter. Orbit ensures that they are evenly distributed and proportionally sized around the central element.

```html
<div class="orbit">
  <!-- Central element content goes here -->
  <div>Orbiter 1</div>
  <div>Orbiter 2</div>
  <div>Orbiter 3</div>
</div>
```

## Manual Setting of Orbit Dimensions

If you prefer to manually set orbit dimensions, you can do so using the `.size-1` to `.size-6` classes. These classes allow you to define the dimensions of the orbiters as needed.

```html
<div class="orbit">
  <!-- Central element content goes here -->
  <div class="size-2">Orbiter 1</div>
  <div class="size-4">Orbiter 2</div>
  <div class="size-6">Orbiter 3</div>
</div>
```

## Nesting Orbits

Orbit also supports nesting, which allows you to create sub-orbits within parent orbits. Sub-orbits inherit dimensions from their parent orbit, ensuring a consistent sizing and distribution of orbiters.

```html
<div class="orbit">
  <!-- Central element content goes here -->
  <div class="orbit">
    <!-- Sub-orbit content goes here -->
    <div>Sub-Orbiter 1</div>
    <div>Sub-Orbiter 2</div>
  </div>
  <div>Orbiter 1</div>
  <div>Orbiter 2</div>
  <div>Orbiter 3</div>
</div>
```

## Conclusion

The CSS Radial Layout with Orbit simplifies circular UI design with its automatic orbit dimension calculation. Additionally, you have the option to manually set orbit dimensions using `.size-1` to `.size-6` classes. The support for nesting orbits ensures consistent sizing and distribution, making Orbit an excellent choice for creating complex and visually engaging circular interfaces. Whether you're designing circular menus, data visualization components, or unique circular layouts, Orbit offers a versatile and straightforward solution for your creative needs.