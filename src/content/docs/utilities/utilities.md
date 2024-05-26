---
title: CSS Utilities
---

There is a small set of CSS utilities to use with some orbit classes and componentes:

  - **.orbit-zone aligment utilities**
    - `.center`, `center-left`, `.center-right`, `.top-left`, `.top-center`, `.top-right`, `.bottom-left`, `.bottom-center`,  `.bottom-right`
  - **.orbit or .orbit-* child elements utilities (satellite, spoke, segment, o-sector, o-progress)**
    - `.from-*`: To set a starting angle point. From 0 - 360deg. Default 0deg.
    - `.range-*`: To set a limit to distribute elements. From 0 - 360deg. Default 360deg.
    - `.angle-*`: To set an angle point to place elements. From 0 - 360deg. (not applies to o-progress)
  - **Satellite, spoke, segment, o-sector, o-progress utilites**
    - `.grow-*x`: To increase size according number of orbits. Default 1.
    - `.reduce-*`: To decrease size according an orbit fracction percentage. Default 1.
    - `.inner-orbit`: To place element just below its orbit.
    - `.outer-orbit`: To place element just above its orbit. 
  - **satellite utilities**
    - `.circle` to render a circle shape. Default
    - `.rounded-box` to render a rounded box shape.
    - `.box` to render a box shape.
  - **o-sector utilities**
    - `.gap-*` applied on `.orbit` or `.orbit-*` or in `<o-sector>`: to set a gap space. Default '0'
  


**Source:** [_utilities.scss](https://github.com/zumerlab/orbit/blob/main/src/scss/_utilities.scss)
