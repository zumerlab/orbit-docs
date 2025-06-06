import { getClosestToken } from "../../../utils/index.js";
import { o as optionsFromKeys } from "../../../utils-BwjmoXco.js";
import { a as htmlEventHandlers, b as attrValueReferrerpolicy, c as attrValueTarget, d as attrValueB, e as attrValueXo, f as attrValueDecoding } from "../../../data-CCzVscJt.js";
import { g, h } from "../../../data-CCzVscJt.js";
const overflow = ["visible", "hidden", "scroll", "auto", "inherit"];
const alignmentBaseline = [
  "auto",
  "baseline",
  "before-edge",
  "text-before-edge",
  "middle",
  "central",
  "after-edge",
  "text-after-edge",
  "ideographic",
  "alphabetic",
  "hanging",
  "mathematical",
  "inherit"
];
const visibility = ["visible", "hidden", "collapse", "inherit"];
const units = ["userSpaceOnUse", "objectBoundingBox"];
const colorInterpolation = ["auto", "sRGB", "linearRGB", "inherit"];
const animationAttributes = {
  attributeName: null,
  attributeType: ["CSS", "XML", "auto"],
  begin: null,
  dur: null,
  end: null,
  fill: ["freeze", "remove"],
  min: null,
  max: null,
  onbegin: null,
  onrepeat: null,
  onend: null,
  restart: ["always", "whenNotActive", "never"],
  repeatCount: ["indefinite"],
  repeatDur: null,
  systemLanguage: null,
  to: null
};
const allAnimationAttributes = {
  ...animationAttributes,
  accumulate: ["none", "sum"],
  additive: ["replace", "sum"],
  by: null,
  calcMode: ["discrete", "linear", "paced", "spline"],
  from: null,
  href: null,
  keySplines: null,
  keyTimes: null,
  values: null
};
const presentationAttributes = {
  "clip-path": null,
  "clip-rule": ["nonzero", "evenodd", "inherit"],
  color: null,
  "color-interpolation": colorInterpolation,
  "color-rendering": ["auto", "optimizeSpeed", "optimizeQuality", "inherit"],
  cursor: null,
  display: null,
  fill: null,
  "fill-opacity": null,
  "fill-rule": ["nonzero", "evenodd", "inherit"],
  filter: null,
  mask: null,
  opacity: null,
  "pointer-events": [
    "bounding-box",
    "visiblePainted",
    "visibleFill",
    "visibleStroke",
    "visible",
    "painted",
    "fill",
    "stroke",
    "all",
    "none"
  ],
  "shape-rendering": ["auto", "optimizeSpeed", "crispEdges", "geometricPrecision", "inherit"],
  stroke: null,
  "stroke-dasharray": null,
  "stroke-dashoffset": null,
  "stroke-linecap": ["butt", "round", "square"],
  "stroke-linejoin": ["arcs", "bevel", "miter", "miter-clip", "round"],
  "stroke-miterlimit": null,
  "stroke-opacity": null,
  "stroke-width": null,
  transform: null,
  "vector-effect": [
    "none",
    "non-scaling-stroke",
    "non-scaling-size",
    "none-rotation",
    "fixed-position"
  ],
  visibility
};
const textAttributes = {
  direction: ["ltr", "rtl", "inherit"],
  "dominant-baseline": [
    "auto",
    "text-bottom",
    "alphabetic",
    "ideographic",
    "middle",
    "central",
    "mathematical",
    "hanging",
    "text-top"
  ],
  "font-family": null,
  "font-size": null,
  "font-size-adjust": null,
  "font-stretch": null,
  "font-style": ["normal", "italic", "oblique"],
  "font-variant": null,
  "font-weight": null,
  "glyph-orientation-horizontal": null,
  "glyph-orientation-vertical": null,
  kerning: null,
  lengthAdjust: ["spacing", "spacingAndGlyphs"],
  "letter-spacing": null,
  systemLanguage: null,
  "text-anchor": ["start", "middle", "end", "inherit"],
  "text-decortation": ["none", "underline", "overline", "line-through", "blink", "inherit"],
  textLength: null,
  "unicode-bidi": null,
  "word-spacing": null,
  "writing-mode": ["lr-tb", "rl-tb", "tb-rl", "lr", "rl", "tb", "inherit"]
};
const posAttributes = {
  height: null,
  width: null,
  x: null,
  y: null
};
const filterAttributes = {
  ...posAttributes,
  "color-interpolation-filters": colorInterpolation,
  result: null
};
const transferFuncAttributes = {
  amplitude: null,
  exponent: null,
  intercept: null,
  offset: null,
  slope: null,
  type: ["identity", "table", "discrete", "linear", "gamma"],
  tableValues: null,
  x: null,
  y: null
};
const pathAttributes = {
  ...presentationAttributes,
  "marker-end": null,
  "marker-mid": null,
  "marker-start": null,
  pathLength: null,
  systemLanguage: null
};
const globalSvgAttributes = {
  ...htmlEventHandlers,
  class: null,
  id: null,
  lang: null,
  style: null,
  tabindex: null
};
const svgTags = {
  a: {
    ...presentationAttributes,
    download: null,
    href: null,
    hreflang: null,
    referrerpolicy: attrValueReferrerpolicy,
    rel: null,
    target: attrValueTarget,
    type: null
  },
  animate: {
    ...allAnimationAttributes,
    "color-interpolation": colorInterpolation
  },
  animateMotion: {
    ...allAnimationAttributes,
    keyPoints: null,
    path: null,
    rotate: null,
    systemLanguage: null
  },
  animateTransform: {
    ...allAnimationAttributes,
    systemLanguage: null,
    type: ["translate", "scale", "rotate", "skewX", "skewY"]
  },
  circle: {
    ...pathAttributes,
    cx: null,
    cy: null,
    r: null
  },
  clipPath: pathAttributes,
  defs: {
    ...presentationAttributes,
    "enable-background": null,
    systemLanguage: null
  },
  desc: {},
  discard: {
    begin: null,
    href: null,
    systemLanguage: null
  },
  ellipse: {
    ...pathAttributes,
    cx: null,
    cy: null,
    rx: null,
    ry: null
  },
  feBlend: {
    ...filterAttributes,
    in: null,
    in2: null,
    mode: [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ]
  },
  feColorMatrix: {
    ...filterAttributes,
    in: null,
    type: ["matrix", "saturate", "hueRotate", "luminanaceToAlpha"],
    values: null
  },
  feComponentTransfer: {
    ...filterAttributes,
    in: null
  },
  feComposite: {
    ...filterAttributes,
    in: null,
    in2: null,
    k1: null,
    k2: null,
    k3: null,
    k4: null,
    operator: ["over", "in", "out", "atop", "xor", "lighter", "arithmetic"]
  },
  feConvolveMatrix: {
    ...filterAttributes,
    bias: null,
    divisor: null,
    edgeMode: ["duplicate", "wrap", "none"],
    in: null,
    kernelMatrix: null,
    kernelUnitLength: null,
    order: null,
    preserveAlpha: attrValueB,
    targetX: null,
    targetY: null
  },
  feDiffuseLighting: {
    ...filterAttributes,
    diffuseConstant: null,
    in: null,
    kernelUnitLength: null,
    "lighting-color": null,
    surfaceScale: null
  },
  feDisplacementMap: {
    ...filterAttributes,
    in: null,
    in2: null,
    scale: null,
    xChannelSelector: [..."RGBA"],
    yChannelSelector: [..."RGBA"]
  },
  feDistantLight: {
    azimuth: null,
    elevation: null
  },
  feDropShadow: {
    ...filterAttributes,
    dx: null,
    dy: null,
    "flood-color": null,
    "flood-opacity": null,
    stdDeviation: null
  },
  feFlood: {
    ...filterAttributes,
    "flood-color": null,
    "flood-opacity": null
  },
  feFuncA: transferFuncAttributes,
  feFuncB: transferFuncAttributes,
  feFuncG: transferFuncAttributes,
  feFuncR: transferFuncAttributes,
  feGaussianBlur: {
    ...filterAttributes,
    edgeMode: ["duplicate", "wrap", "none"],
    in: null,
    stdDeviation: null
  },
  feImage: {
    ...filterAttributes,
    href: null,
    preserveAspectRatio: null,
    crossorigin: attrValueXo
  },
  feMerge: filterAttributes,
  feMergeNode: {
    in: null,
    x: null,
    y: null
  },
  feMorphology: {
    ...filterAttributes,
    in: null,
    operator: ["erode", "dilate"],
    radius: null
  },
  feOffset: {
    ...filterAttributes,
    dx: null,
    dy: null,
    in: null
  },
  fePointLight: {
    x: null,
    y: null,
    z: null
  },
  feSpecularLighting: {
    ...filterAttributes,
    in: null,
    "lighting-color": null,
    kernelUnitLength: null,
    specularConstant: null,
    specularExponent: null,
    surfaceScale: null
  },
  feSpotLight: {
    x: null,
    y: null,
    z: null,
    pointsAtX: null,
    pointsAtY: null,
    pointsAtZ: null,
    specularExponenet: null,
    limitingConeAngle: null
  },
  feTile: {
    ...filterAttributes,
    in: null
  },
  feTurbulence: {
    ...filterAttributes,
    baseFrequency: null,
    numOctaves: null,
    seed: null,
    stitchTiles: ["noStitch", "stitch"],
    type: ["fractalNoise", "turbulence"]
  },
  filter: {
    ...posAttributes,
    filterUnits: units,
    href: null,
    primitiveUnits: units
  },
  foreignObject: {
    ...presentationAttributes,
    ...posAttributes,
    overflow,
    systemLanguage: null
  },
  g: {
    ...presentationAttributes,
    "enable-background": null,
    systemLanguage: null
  },
  image: {
    ...presentationAttributes,
    ...posAttributes,
    "color-profile": null,
    crossorigin: attrValueXo,
    decoding: attrValueDecoding,
    href: null,
    "image-rendering": ["auto", "optimizeQuality", "optimizeSpeed"],
    overflow,
    preserveAspectRatio: null,
    systemLanguage: null
  },
  line: {
    ...pathAttributes,
    x1: null,
    x2: null,
    y1: null,
    y2: null
  },
  linearGradient: {
    gradientUnits: units,
    gradientTransform: null,
    href: null,
    spreadMethod: ["pad", "reflect", "repeat"],
    x1: null,
    x2: null,
    y1: null,
    y2: null
  },
  marker: {
    ...presentationAttributes,
    markerHeight: null,
    markerUnits: ["userSpaceOnUse", "strokeWidth"],
    markerWidth: null,
    orient: null,
    overflow,
    preserveAspectRatio: null,
    refX: null,
    refY: null,
    viewBox: null
  },
  mask: {
    ...presentationAttributes,
    ...posAttributes,
    maskContentUnits: units,
    maskUnits: units,
    systemLanguage: null
  },
  metadata: {},
  mpath: {
    href: null
  },
  path: {
    ...pathAttributes,
    d: null
  },
  pattern: {
    ...presentationAttributes,
    ...posAttributes,
    href: null,
    overflow,
    patternContentUnits: units,
    patternTransform: null,
    patternUnits: units,
    preserveAspectRatio: null,
    systemLanguage: null,
    viewBox: null
  },
  polygon: {
    ...pathAttributes,
    points: null
  },
  polyline: {
    ...pathAttributes,
    points: null
  },
  radialGradient: {
    cx: null,
    cy: null,
    fr: null,
    fx: null,
    fy: null,
    gradientUnits: units,
    gradientTransform: null,
    href: null,
    r: null,
    spreadMethod: ["pad", "reflect", "repeat"]
  },
  rect: {
    ...pathAttributes,
    ...posAttributes,
    rx: null,
    ry: null
  },
  script: {
    async: null,
    crossorigin: attrValueXo,
    defer: null,
    href: null,
    type: null
  },
  set: animationAttributes,
  stop: {
    color: null,
    display: null,
    offset: null,
    "stop-color": null,
    "stop-opacity": null,
    visibility
  },
  style: {
    type: null,
    media: null,
    title: null
  },
  svg: {
    ...presentationAttributes,
    ...posAttributes,
    baseProfile: null,
    contentScriptValue: null,
    contentStyleType: null,
    overflow,
    preserveAspectRatio: null,
    systemLanguage: null,
    version: null,
    viewBox: null
  },
  switch: {
    ...presentationAttributes,
    "enable-background": null,
    systemLanguage: null
  },
  symbol: {
    ...presentationAttributes,
    ...posAttributes,
    overflow,
    preserveAspectRatio: null,
    refX: null,
    refY: null,
    viewBox: null
  },
  text: {
    ...presentationAttributes,
    ...textAttributes,
    dx: null,
    dy: null,
    overflow,
    systemLanguage: null,
    textLength: null,
    "text-rendering": [
      "auto",
      "optimizeSpeed",
      "optimizeLegibility",
      "geometricPrecision",
      "inherit"
    ],
    x: null,
    y: null
  },
  textPath: {
    ...presentationAttributes,
    ...textAttributes,
    "alignment-baseline": alignmentBaseline,
    "baseline-shift": null,
    href: null,
    method: ["align", "stretch"],
    spacing: ["auto", "exact"],
    startOffset: null
  },
  title: {},
  tspan: {
    ...presentationAttributes,
    ...textAttributes,
    "alignment-baseline": alignmentBaseline,
    "baseline-shift": null,
    dx: null,
    dy: null,
    rotate: null,
    x: null,
    y: null
  },
  use: {
    ...posAttributes,
    href: null,
    systemLanguage: null
  },
  view: {
    viewBox: null,
    preserveAspectRatio: null,
    viewTarget: null
  }
};
const tagPattern = /<$|<(?![!\d])([^\s/=>$<%]+)(?:\s(?:\s*([^\s/"'=>]+)(?:\s*=\s*(?!\s)(?:"[^"]*(?:"|$)|'[^']*(?:'|$)|[^\s"'=>]+(?!\S))?|(?![^\s=])))*\s*)?$/;
const getTagMatch = ({ explicit, before, pos }, editor) => {
  return getClosestToken(editor, ".comment,.cdata,.prolog,.doctype", 0, 0, pos) || !explicit && /\s/.test(before.slice(-1)) ? false : tagPattern.exec(before);
};
const markupCompletion = (tags, globalAttributes) => {
  const tagOptions = optionsFromKeys(tags, "property");
  const attrOptions = optionsFromKeys(globalAttributes, "enum");
  return (context, editor) => {
    const tagMatch = getTagMatch(context, editor);
    if (tagMatch) {
      let [tag, tagName, lastAttr] = tagMatch;
      let start = tagMatch.index;
      let from = start + 1;
      let options = tagOptions;
      if (/\s/.test(tag)) {
        let tagAttrs = tags[tagName];
        from = start + tag.search(/[^\s"'=]*$/);
        if (/=\s*(?:"[^"]*|'[^']*|[^\s"'=]*)$/.test(tag)) {
          options = (globalAttributes[lastAttr] || tagAttrs?.[lastAttr])?.map((val) => ({
            label: val,
            icon: "unit"
          }));
        } else {
          options = tagAttrs ? attrOptions.concat(optionsFromKeys(tagAttrs, "enum")) : attrOptions;
        }
      }
      if (options) {
        return {
          from,
          options
        };
      }
    }
  };
};
export {
  getTagMatch,
  g as globalHtmlAttributes,
  globalSvgAttributes,
  h as htmlTags,
  markupCompletion,
  svgTags
};
//# sourceMappingURL=index.js.map
