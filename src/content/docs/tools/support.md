---
title: Visual Aids
---

## Orbit support and compliance checks

Orbit provides a comprehensive set of rules and visual aids in CSS to assist developers in enhancing user experience. These guidelines ensure adherence to best practices and optimize the utilization of Orbit's features.

### Checking browser support for `has()` CSS Rule

Before implementing features reliant on the `has()` CSS rule, it's essential to confirm browser compatibility. Orbit includes checks to verify support for this rule, alerting developers if it's unavailable in the targeted browser environment.

### Checking browser support for `context-stroke`

Some browsers doesn't support `context-stroke` which is used to add some fancy ending markers in `o-sector` and `o-progress`. Orbit will alert this porblem and offer a quick-fix.

### Usage Limitation of `o-sector`, `o-label`, and `o-progress`

For optimal functionality, `o-sector`, `o-label`, and `o-progress` should only be applied within circular orbits. As Orbit currently doesn't support elliptical shapes, these web-components will be hidden if detected within incompatible orbit shapes.

### Visual Warning for Invalid Nested Elements

Orbit incorporates visual cues to identify and warn developers of invalid nested elements within orbit structures:

- **Invalid Child Elements within `.orbit-zone`:** Orbit detects and notifies developers if `.orbit-zone` contains invalid direct child elements. Only `.orbit` or `.orbit-*` elements are permissible within `.orbit-zone`.

- **Invalid Child Elements within `.satellite`:** Similarly, Orbit checks for and alerts developers if `.satellite` includes invalid direct child elements. Only `.orbit-zone` elements are permitted within `.satellite`.




**Source:** [_support.scss](https://github.com/zumerlab/orbit/blob/main/src/scss/_support.scss)
