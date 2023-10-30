---
title: Layout
---
# CSS Radial Layout with Orbit

## Introduction

The CSS Radial Layout with Orbit offers a user-friendly way to organize elements in circular patterns using CSS alone.Orbit automatically calculates ´.o-orbit´ dimensions based on the number of orbits within a parent element. Additionally, you have the flexibility to manually set orbit dimensions using the `.size-1` to `.size-6` classes. Nesting orbits is also supported, ensuring sub-orbits inherit dimensions from their parent orbits. ¿

## Core Class: `.o-core`

The central element (like orbit zero) around which you want to arrange orbiters should have the `.orbit` class applied. This class serves as the anchor for the radial layout, and you can nest sub-orbits within it as needed.

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

# CSS Radial Layout with Orbit

## Introduction

The CSS Radial Layout with Orbit is a versatile and creative way to organize elements in a circular pattern using only CSS. This approach allows you to create stunning circular UI designs without the need for JavaScript. The core concept revolves around a central element and its surrounding orbiters, which are positioned in a circular arrangement. With Orbit, you can easily control the number of orbiters, their dimensions, offsets, directions, and angle limits to achieve the desired circular layout.

## Core Class: `.orbit`

The core class that drives the CSS Radial Layout is `.orbit`. This class is applied to the central element around which the orbiters will be arranged. It serves as the anchor for the radial layout. By adding this class to your HTML element, you establish the foundation for creating circular UI designs.

```html
<div class="orbit">
  <!-- Your central element content goes here -->
</div>
```

## Orbit Classes: `.orbit-1` to `.orbit-6`

To define the dimensions and positions of the orbiters, you can use the `.orbit-1` to `.orbit-6` classes. Each class corresponds to a specific dimension and positioning for the orbiters. You can apply these classes to the elements you want to position around the central element.

- `.orbit-1`: One-dimensional orbit (Single orbiter)
- `.orbit-2`: Two-dimensional orbit (Two orbiters)
- `.orbit-3`: Three-dimensional orbit (Three orbiters)
- `.orbit-4`: Four-dimensional orbit (Four orbiters)
- `.orbit-5`: Five-dimensional orbit (Five orbiters)
- `.orbit-6`: Six-dimensional orbit (Six orbiters)

```html
<div class="orbit">
  <!-- Central element content goes here -->
  <div class="orbit-6">Orbiter 1</div>
  <div class="orbit-6">Orbiter 2</div>
  <div class="orbit-6">Orbiter 3</div>
  <div class="orbit-6">Orbiter 4</div>
  <div class="orbit-6">Orbiter 5</div>
  <div class="orbit-6">Orbiter 6</div>
</div>
```

## Customization with Offset, Direction, and Angle Limits

Orbit also offers flexibility in customizing the layout with the following options:

### Offset

You can set the offset for the orbiters to control their distance from the central element. This allows you to create compact or spacious radial layouts, depending on your design preferences.

```css
.orbit-6 {
  --offset: 50px; /* Adjust the offset as needed */
}
```

### Direction

By specifying the direction, you can control whether the orbiters move clockwise or counterclockwise around the central element. This customization offers even more design possibilities.

```css
.orbit-6 {
  --direction: clockwise; /* or --direction: counterclockwise; */
}
```

### Angle Limits

Orbit also lets you set angle limits for the orbiters. This means you can restrict their movement within a specified angle range, creating unique and controlled circular layouts.

```css
.orbit-6 {
  --angle-start: 45deg; /* Starting angle */
  --angle-end: 315deg; /* Ending angle */
}
```

## Conclusion

The CSS Radial Layout with Orbit is a powerful way to create circular UI designs using CSS alone. By applying the core class, orbit classes, and customizing the offset, direction, and angle limits, you can achieve a wide range of circular layouts. The support for nesting orbits ensures consistent sizing and distribution, making Orbit an excellent choice for creating complex and visually engaging circular interfaces. Whether you're building circular menus, data visualization components, or unique circular interfaces, Orbit simplifies the process and unlocks a world of creative possibilities.
