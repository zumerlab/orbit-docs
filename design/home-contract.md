# Orbit home and playground

## Evidence

Primary references: the user's current home at https://zumerlab.com/orbit-docs/
(dark blue, blue/coral arcs, concentric ticks and an orbital composition), and
the verified `orbit/examples/playground.html` (direct manipulation and real code).

UIZZE catalogue searches exposed metadata for three relevant editing screens:

- [Whop tutorial editor](https://uizze.com/screens/69ac7efa003848282eff): select
  the subject before editing it. Transfer recipe navigation, not course branding.
- [Wix post design](https://uizze.com/screens/6999d52a001d656e575d): scoped settings
  and explanatory states. Transfer disclosure of code, not the business content.
- [Apollo filters](https://uizze.com/screens/6995634a0013a4ec6281): explicit grouped
  parameters. Transfer control grouping, not CRM fields or density.

Evidence limitation: indexed descriptions were available, but direct screen
requests returned 410. Their visual layouts were not verified. The user's own
home and working playground govern the actual visual treatment.

User revision: keep the established layout and colors, use the original docs logo,
and remove decorative numbering, spaced uppercase labels and monospace UI text.
The [sci-fi example](http://127.0.0.1:4326/orbit-docs/examples/scifi/) supplies the
separate depth layers. The user's [SnapDOM reference](https://snapdom.dev/showcase/#orbit)
supplies the automatic tilt: a slow rotation around both X and Y axes. Preserve
the satellite control and add pause/resume; no pointer movement is required.

## Contract

| Field | Decision |
| --- | --- |
| Job | Understand radial composition, change it and leave with working code. |
| User/action | Developer adjusts a live parameter, then copies or downloads the composition. |
| Hierarchy | Purpose + live branded composition; playground; editable recipes; installation/docs. |
| Navigation | Visible Playground, Examples, Docs, GitHub; existing docs URLs preserved. |
| Visual language | Existing #060f16, #3da9fc, #ef4565 and original docs SVG logo; real Orbit geometry; Arial for UI and compositions, monospace only for code; sentence case labels without numbering; thin rules and space around the compositions. |
| States | Zero, 80 satellites, reorder, recipe selection, mobile preview/code, copy/export loading/success/failure, reset. |
| Responsive | Desktop preview beside settings/code; mobile preview/code views, native labelled controls, reachable navigation. |
| Motion | Layered hero tilts automatically in 3D, with pause/resume and live satellite count. Reduced-motion prevents autoplay. Suspend animation offscreen and in hidden tabs. |
| Forbidden | Invented logos, numbered section labels, uppercase micro-labels, generic slogans, invented adoption metrics, unrelated illustrations, forced signup, decorative dashboard cards. |
| Acceptance | Useful controls above fold on desktop; no 360px overflow; keyboard/focus support; source matches preview; standalone export runs offline; docs/search/mobile nav work. |

## Runtime

Home, docs previews and exports share a verified Orbit snapshot. Its manifest
records source revision and hashes because npm currently has the same version
number with older code. Astro/Starlight build the site; interactions use plain JS.

## Verification

Validated against the production build on 2026-09-05:

- Node 24 type checking and production build pass; npm audit reports no vulnerabilities.
- All 60 existing routes and 101 local link/asset targets resolve, including anchors.
- Chromium, Firefox and WebKit pass the playground and documentation editor flows.
  First pointer and keyboard edits work in WebKit without focusing or scrolling on load.
- All nine recipe/browser exports run from `file://` without network access;
  Chromium clipboard content matches the downloaded HTML. Export failures recover.
- Keyboard tabs, reset, zero/full values, 80 satellites and reduced motion work.
- Desktop, tablet and mobile layouts were visually inspected. No horizontal page
  overflow at 360, 390, 768, 1280 or 1440 pixels. Search and mobile navigation work.
- Both copies of all five Orbit runtime files match the recorded SHA-256 hashes.

User revision checks:

- The header and hero load the original docs SVG, with its existing color and proportions.
- UI text and compositions use Arial. Monospace remains only in source code;
  section/tab numbering and promotional slogans were removed.
- The hero's seven depth layers tilt automatically on an 18-second loop.
  Chromium, Firefox and WebKit pass pause/resume, satellite changes, offscreen
  suspension, persistent manual pause and initial/live reduced-motion checks.
- Nine animation phases at 360, 390, 768 and 1440 pixels produce no horizontal
  page overflow. Desktop, tablet and mobile views were inspected visually.
- The tablet preview reserves space below the composition for its caption.
- The hidden-tab handler was checked by simulating document visibility in
  headless browsers; pagehide/pageshow suspension was also checked.

Release boundary: this is a local site build. The bundled Orbit snapshot includes
the fixes; the existing npm 1.4.12 release does not. Publish a new package version
and run `npm run sync:orbit` before removing the pending-release documentation.
