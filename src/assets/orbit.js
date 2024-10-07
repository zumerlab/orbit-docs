
/*
* orbit
* v.0.6.0
* Author Juan Martin Muda - Zumerlab
* License MIT
**/
(() => {
  // src/js/orbit-progress.js
  var OrbitProgress = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }
        svg * {
          pointer-events: stroke;
        }
        .progress-bar {
          fill: transparent;
          stroke: var(--o-progress-color);
          transition: stroke 0.3s;
        }
        .progress-bg {
          stroke: var(--o-bg-color, transparent);
        }
        :host(:hover) .progress-bar {
          stroke: var(--o-hover-progress-color, var(--o-progress-color));
          
        }
      </style>
      <svg viewBox="0 0 100 100">
        <defs></defs>
        <path class="progress-bg"></path>
        <path class="progress-bar"></path>
      </svg>
    `;
    }
    connectedCallback() {
      this.update();
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          this.update();
        });
      });
      observer.observe(this, { attributes: true, childList: true });
    }
    update() {
      const { shape } = this.getAttributes();
      const svg = this.shadowRoot.querySelector("svg");
      const defs = this.createDefs();
      if (shape !== "none") {
        defs.appendChild(this.createMarker("head", "end"));
        defs.appendChild(this.createMarker("tail", "start"));
      }
      const progressBg = this.shadowRoot.querySelector(".progress-bg");
      const progressBar = this.shadowRoot.querySelector(".progress-bar");
      this.updateArc(progressBg, true);
      this.updateArc(progressBar, false);
      svg.querySelector("defs").replaceWith(defs);
    }
    createSVGElement() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("width", this.getAttribute("width") || "100%");
      svg.setAttribute("height", this.getAttribute("height") || "100%");
      return svg;
    }
    updateArc(arc, full) {
      const {
        strokeWidth,
        realRadius,
        ellipseX,
        ellipseY,
        progressBarColor,
        progressBgColor,
        maxAngle,
        shape
      } = this.getAttributes();
      const angle = this.getProgressAngle(maxAngle, full);
      const { d } = this.calculateArcParameters(angle, realRadius, ellipseX, ellipseY);
      arc.setAttribute("d", d);
      arc.setAttribute("stroke", full ? progressBgColor : progressBarColor);
      arc.setAttribute("fill", "transparent");
      if (shape !== "none") {
        arc.setAttribute("marker-end", "url(#head)");
        arc.setAttribute("marker-start", "url(#tail)");
      }
      arc.setAttribute("stroke-width", strokeWidth);
      arc.setAttribute("vector-effect", "non-scaling-stroke");
    }
    getAttributes() {
      const orbitRadius = parseFloat(
        getComputedStyle(this).getPropertyValue("r") || 0
      );
      const range = parseFloat(
        getComputedStyle(this).getPropertyValue("--o-range") || 360
      );
      const ellipseX = parseFloat(
        getComputedStyle(this).getPropertyValue("--o-ellipse-x") || 1
      );
      const ellipseY = parseFloat(
        getComputedStyle(this).getPropertyValue("--o-ellipse-y") || 1
      );
      const progress = parseFloat(
        getComputedStyle(this).getPropertyValue("--o-progress") || this.getAttribute("value") || 0
      );
      const shape = this.getAttribute("shape") || "none";
      const progressBarColor = this.getAttribute("bar-color");
      const progressBgColor = this.getAttribute("bgcolor") || "transparent";
      const strokeWidth = parseFloat(
        getComputedStyle(this).getPropertyValue("stroke-width") || 1
      );
      let strokeWithPercentage = strokeWidth / 2 * 100 / orbitRadius / 2;
      let innerOuter = strokeWithPercentage;
      if (this.classList.contains("outer-orbit")) {
        innerOuter = strokeWithPercentage * 2;
      }
      if (this.classList.contains("quarter-outer-orbit")) {
        innerOuter = strokeWithPercentage * 1.75;
      }
      if (this.classList.contains("inner-orbit")) {
        innerOuter = 0;
      }
      if (this.classList.contains("quarter-inner-orbit")) {
        innerOuter = strokeWithPercentage * 0.75;
      }
      const realRadius = 50 + innerOuter - strokeWithPercentage;
      const maxAngle = range;
      return {
        orbitRadius,
        ellipseX,
        ellipseY,
        progress,
        progressBarColor,
        progressBgColor,
        strokeWidth,
        realRadius,
        maxAngle,
        shape
      };
    }
    getProgressAngle(maxAngle, full) {
      const progress = parseFloat(
        getComputedStyle(this).getPropertyValue("--o-progress") || this.getAttribute("value") || 0
      );
      const maxValue = parseFloat(this.getAttribute("max")) || 100;
      return full ? (maxValue - 1e-5) / maxValue * maxAngle : progress / maxValue * maxAngle;
    }
    calculateArcParameters(angle, realRadius, ellipseX, ellipseY) {
      const radiusX = realRadius / ellipseX;
      const radiusY = realRadius / ellipseY;
      const startX = 50 + radiusX * Math.cos(-Math.PI / 2);
      const startY = 50 + radiusY * Math.sin(-Math.PI / 2);
      const endX = 50 + radiusX * Math.cos((angle - 90) * Math.PI / 180);
      const endY = 50 + radiusY * Math.sin((angle - 90) * Math.PI / 180);
      const largeArcFlag = angle <= 180 ? 0 : 1;
      const d = `M ${startX},${startY} A ${radiusX},${radiusY} 0 ${largeArcFlag} 1 ${endX},${endY}`;
      return { startX, startY, endX, endY, largeArcFlag, d };
    }
    createDefs() {
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      return defs;
    }
    createMarker(id, position = "end") {
      const { shape } = this.getAttributes();
      const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
      marker.setAttribute("id", id);
      marker.setAttribute("viewBox", "0 0 10 10");
      if (position === "start" && shape !== "circle") {
        marker.setAttribute("refX", "2");
      } else if (position === "start" && shape === "circle") {
        marker.setAttribute("refX", "5");
      } else {
        marker.setAttribute("refX", "0.1");
      }
      marker.setAttribute("refY", "5");
      marker.setAttribute("markerWidth", "1");
      marker.setAttribute("markerHeight", "1");
      marker.setAttribute("orient", "auto");
      marker.setAttribute("markerUnits", "strokeWidth");
      marker.setAttribute("fill", "context-stroke");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const shapes = {
        arrow: {
          head: "M 0 0 L 2 5 L 0 10 z",
          tail: "M 2 0 L 0 0 L 1 5 L 0 10 L 2 10 L 2 5 z"
        },
        slash: {
          head: "M 0 0 L 0 0 L 1 5 L 2 10 L 0 10 L 0 5 z",
          tail: "M 2 0 L 0 0 L 1 5 L 2 10 L 2 10 L 2 5 z"
        },
        backslash: {
          head: "M 0 0 L 2 0 L 1 5 L 0 10 L 0 10 L 0 5 z",
          tail: "M 2 0 L 2 0 L 1 5 L 0 10 L 2 10 L 2 5 z"
        },
        circle: {
          head: "M 0 0 C 7 0 7 10 0 10 z",
          tail: "M 6 0 C -1 0 -1 10 6 10 z"
        },
        zigzag: {
          head: "M 1 0 L 0 0 L 0 5 L 0 10 L 1 10 L 2 7 L 1 5 L 2 3 z",
          tail: "M 0 0 L 2 0 L 2 5 L 2 10 L 0 10 L 1 7 L 0 5 L 1 3 z"
        }
      };
      if (position === "end") {
        path.setAttribute("d", shapes[shape].head);
      } else {
        path.setAttribute("d", shapes[shape].tail);
      }
      marker.appendChild(path);
      return marker;
    }
  };

  // src/js/orbit-arc.js
  var template = document.createElement("template");
  template.innerHTML = `
   <style>
     :host {
       display: inline-block;
     }
     svg {
       width: 100%;
       height: 100%;
       overflow: visible;
       pointer-events: none;
     }
       svg * {
          pointer-events: stroke;
        }
       .arc {
          stroke: var(--o-arc-color, var(--o-cyan-light));
          stroke-width:  calc(var(--o-radius) / var(--o-orbit-number) * var(--o-size-ratio, 1));
          transition: stroke 0.3s;
        }
        
        :host(:hover) .arc {
          stroke: var(--o-hover-arc-color, var(--o-arc-color));
          
        }
   </style>
   <svg viewBox="0 0 100 100">
     <defs></defs>
     <path class="arc" vector-effect="non-scaling-stroke" fill="transparent"></path>
   </svg>
 `;
  var OrbitArc = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.update();
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          this.update();
        });
      });
      observer.observe(this, { attributes: true, childList: true });
    }
    update() {
      const { shape } = this.getAttributes();
      const svg = this.shadowRoot.querySelector("svg");
      const path = this.shadowRoot.querySelector("path");
      const defs = this.shadowRoot.querySelector("defs");
      if (shape !== "none") {
        defs.innerHTML = "";
        defs.appendChild(this.createMarker("head", "end"));
        defs.appendChild(this.createMarker("tail", "start"));
        path.setAttribute("marker-end", "url(#head)");
        path.setAttribute("marker-start", "url(#tail)");
      }
      const { realRadius, arcColor, gap } = this.getAttributes();
      const angle = this.calculateAngle();
      const { d } = this.calculateArcParameters(angle, realRadius, gap);
      path.setAttribute("d", d);
      path.setAttribute("stroke", arcColor);
    }
    getAttributes() {
      const orbitRadius = parseFloat(getComputedStyle(this).getPropertyValue("r") || 0);
      const gap = parseFloat(getComputedStyle(this).getPropertyValue("--o-gap") || 1e-3);
      const shape = this.getAttribute("shape") || "none";
      const arcColor = this.getAttribute("arc-color");
      const rawAngle = getComputedStyle(this).getPropertyValue("--o-angle");
      const strokeWidth = parseFloat(getComputedStyle(this).getPropertyValue("stroke-width") || 1);
      const strokeWithPercentage = strokeWidth / 2 * 100 / orbitRadius / 2;
      let innerOuter = strokeWithPercentage;
      if (this.classList.contains("outer-orbit")) {
        innerOuter = strokeWithPercentage * 2;
      }
      if (this.classList.contains("quarter-outer-orbit")) {
        innerOuter = strokeWithPercentage * 1.75;
      }
      if (this.classList.contains("inner-orbit")) {
        innerOuter = 0;
      }
      if (this.classList.contains("quarter-inner-orbit")) {
        innerOuter = strokeWithPercentage * 0.75;
      }
      const realRadius = 50 + innerOuter - strokeWithPercentage;
      const arcAngle = calcularExpresionCSS(rawAngle);
      return {
        orbitRadius,
        strokeWidth,
        realRadius,
        arcColor,
        gap,
        arcAngle,
        shape
      };
    }
    calculateAngle() {
      const { arcAngle, gap } = this.getAttributes();
      return arcAngle - gap;
    }
    calculateArcParameters(angle, realRadius) {
      const radiusX = realRadius / 1;
      const radiusY = realRadius / 1;
      const startX = 50 + radiusX * Math.cos(-Math.PI / 2);
      const startY = 50 + radiusY * Math.sin(-Math.PI / 2);
      const endX = 50 + radiusX * Math.cos((angle - 90) * Math.PI / 180);
      const endY = 50 + radiusY * Math.sin((angle - 90) * Math.PI / 180);
      const largeArcFlag = angle <= 180 ? 0 : 1;
      const d = `M ${startX},${startY} A ${radiusX},${radiusY} 0 ${largeArcFlag} 1 ${endX},${endY}`;
      return { startX, startY, endX, endY, largeArcFlag, d };
    }
    createMarker(id, position = "end") {
      const { shape } = this.getAttributes();
      const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
      marker.setAttribute("id", id);
      marker.setAttribute("viewBox", "0 0 10 10");
      position === "start" && shape !== "circle" ? marker.setAttribute("refX", "2") : position === "start" && shape === "circle" ? marker.setAttribute("refX", "5") : marker.setAttribute("refX", "0.1");
      marker.setAttribute("refY", "5");
      marker.setAttribute("markerWidth", "1");
      marker.setAttribute("markerHeight", "1");
      marker.setAttribute("orient", "auto");
      marker.setAttribute("markerUnits", "strokeWidth");
      marker.setAttribute("fill", "context-stroke");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const shapes = {
        arrow: {
          head: "M 0 0 L 2 5 L 0 10 z",
          tail: "M 2 0 L 0 0 L 1 5 L 0 10 L 2 10 L 2 5 z"
        },
        slash: {
          head: "M 0 0 L 0 0 L 1 5 L 2 10 L 0 10 L 0 5 z",
          tail: "M 2 0 L 0 0 L 1 5 L 2 10 L 2 10 L 2 5 z"
        },
        backslash: {
          head: "M 0 0 L 2 0 L 1 5 L 0 10 L 0 10 L 0 5 z",
          tail: "M 2 0 L 2 0 L 1 5 L 0 10 L 2 10 L 2 5 z"
        },
        circle: {
          head: "M 0 0 C 7 0 7 10 0 10 z",
          tail: "M 6 0 C -1 0 -1 10 6 10 z"
        },
        zigzag: {
          head: "M 1 0 L 0 0 L 0 5 L 0 10 L 1 10 L 2 7 L 1 5 L 2 3 z",
          tail: "M 0 0 L 2 0 L 2 5 L 2 10 L 0 10 L 1 7 L 0 5 L 1 3 z"
        }
      };
      position === "end" ? path.setAttribute("d", shapes[shape].head) : path.setAttribute("d", shapes[shape].tail);
      marker.appendChild(path);
      return marker;
    }
  };
  function calcularExpresionCSS(cssExpression) {
    const match = cssExpression.match(/calc\(\s*([\d.]+)deg\s*\/\s*\(\s*(\d+)\s*-\s*(\d+)\s*\)\s*\)/);
    if (match) {
      const value = parseFloat(match[1]);
      const divisor = parseInt(match[2]) - parseInt(match[3]);
      if (!isNaN(value) && !isNaN(divisor) && divisor !== 0) {
        return value / divisor;
      }
    }
  }

  // src/js/orbit-text.js
  var OrbitText = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const template2 = document.createElement("template");
      template2.innerHTML = `
      <svg viewBox="0 0 100 100"  >
        <path id="orbitPath" fill="none" vector-effect="non-scaling-stroke"></path>
        <text>
          <textPath href="#orbitPath"  alignment-baseline="middle"></textPath>
        </text>
      </svg>
      <style>
       :host {
          display: inline-block;

        }
        svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
          
        }
        svg * {
          pointer-events: stroke;
        }
        
        path {
          fill: transparent;
          stroke: var(--o-text-color);
          transition: stroke 0.3s;
        }
       
        :host(:hover) path {
          stroke: var(--o-hover-text-color, var(--o-text-color));
          
        }
      
        
      </style>
    `;
      this.shadowRoot.appendChild(template2.content.cloneNode(true));
    }
    connectedCallback() {
      this.update();
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          this.update();
        });
      });
      observer.observe(this, { attributes: true, childList: true });
    }
    update() {
      const path = this.shadowRoot.getElementById("orbitPath");
      const text = this.shadowRoot.querySelector("text");
      const textPath = this.shadowRoot.querySelector("textPath");
      const { d, strokeWidth, lineCap } = this.getPathAttributes();
      path.setAttribute("d", d);
      path.setAttribute("stroke-width", strokeWidth);
      path.setAttribute("stroke-linecap", lineCap);
      const { length, fontSize, textAnchor, fitRange } = this.getTextAttributes();
      if (textAnchor === "start") {
        textPath.setAttribute("startOffset", "0%");
        textPath.setAttribute("text-anchor", "start");
      } else if (textAnchor === "middle") {
        textPath.setAttribute("startOffset", "50%");
        textPath.setAttribute("text-anchor", "middle");
      } else if (textAnchor === "end") {
        textPath.setAttribute("startOffset", "100%");
        textPath.setAttribute("text-anchor", "end");
      }
      if (fitRange) {
        textPath.parentElement.setAttribute("textLength", path.getTotalLength());
      }
      text.style.fontSize = `calc(${fontSize} * (100 / (${length}) * (12 /  var(--o-orbit-number) ))`;
      textPath.textContent = this.textContent.trim();
    }
    getPathAttributes() {
      const { realRadius, gap, textBgColor, flip, lineCap, strokeWidth } = this.getAttributes();
      const angle = this.calculateAngle();
      const { d } = this.calculateArcParameters(angle, realRadius, gap, flip);
      return { d, strokeWidth, textBgColor, lineCap };
    }
    getTextAttributes() {
      const { length, fontSize, textAnchor, fitRange } = this.getAttributes();
      return { length, fontSize, textAnchor, fitRange };
    }
    getAttributes() {
      const orbitRadius = parseFloat(getComputedStyle(this).getPropertyValue("r") || 0);
      const flip = this.hasAttribute("flip");
      const fitRange = this.hasAttribute("fit-range");
      const lineCap = getComputedStyle(this).getPropertyValue("--o-linecap") || "butt";
      const gap = parseFloat(getComputedStyle(this).getPropertyValue("--o-gap") || 1e-3);
      const length = parseFloat(getComputedStyle(this).getPropertyValue("--o-force"));
      const textAnchor = this.getAttribute("text-anchor") || "middle";
      const fontSize = getComputedStyle(this).getPropertyValue("font-size") || getComputedStyle(this).getPropertyValue("--font-size");
      const rawAngle = getComputedStyle(this).getPropertyValue("--o-angle");
      const strokeWidth = parseFloat(getComputedStyle(this).getPropertyValue("stroke-width") || 1);
      let strokeWithPercentage = strokeWidth / 2 * 100 / orbitRadius / 2;
      let innerOuter = strokeWithPercentage;
      if (this.classList.contains("outer-orbit")) {
        innerOuter = strokeWithPercentage * 2;
      }
      if (this.classList.contains("quarter-outer-orbit")) {
        innerOuter = strokeWithPercentage * 1.75;
      }
      if (this.classList.contains("inner-orbit")) {
        innerOuter = 0;
      }
      if (this.classList.contains("quarter-inner-orbit")) {
        innerOuter = strokeWithPercentage * 0.75;
      }
      const realRadius = 50 + innerOuter - strokeWithPercentage;
      const textAngle = calcularExpresionCSS2(rawAngle);
      return {
        orbitRadius,
        strokeWidth,
        realRadius,
        length,
        fontSize,
        gap,
        textAngle,
        flip,
        textAnchor,
        lineCap,
        fitRange
      };
    }
    calculateAngle() {
      const { textAngle, gap } = this.getAttributes();
      return textAngle - gap;
    }
    calculateArcParameters(angle, realRadius, gap, flip) {
      const radiusX = realRadius / 1;
      const radiusY = realRadius / 1;
      let startX, startY, endX, endY, largeArcFlag, d;
      if (flip) {
        startX = 50 - gap + radiusX * Math.cos(-Math.PI / 2);
        startY = 50 + radiusY * Math.sin(-Math.PI / 2);
        endX = 50 + radiusX * Math.cos((270 - angle) * Math.PI / 180);
        endY = 50 + radiusY * Math.sin((270 - angle) * Math.PI / 180);
        largeArcFlag = angle <= 180 ? 0 : 1;
        d = `M ${startX},${startY} A ${radiusX},${radiusY} 0 ${largeArcFlag} 0 ${endX},${endY}`;
      } else {
        startX = 50 + gap + radiusX * Math.cos(-Math.PI / 2);
        startY = 50 + radiusY * Math.sin(-Math.PI / 2);
        endX = 50 + radiusX * Math.cos((angle - 90) * Math.PI / 180);
        endY = 50 + radiusY * Math.sin((angle - 90) * Math.PI / 180);
        largeArcFlag = angle <= 180 ? 0 : 1;
        d = `M ${startX},${startY} A ${radiusX},${radiusY} 0 ${largeArcFlag} 1 ${endX},${endY}`;
      }
      return { startX, startY, endX, endY, largeArcFlag, d };
    }
  };
  function calcularExpresionCSS2(cssExpression) {
    const match = cssExpression.match(/calc\(\s*([\d.]+)deg\s*\/\s*\(\s*(\d+)\s*-\s*(\d+)\s*\)\s*\)/);
    if (match) {
      const value = parseFloat(match[1]);
      const divisor = parseInt(match[2]) - parseInt(match[3]);
      if (!isNaN(value) && !isNaN(divisor) && divisor !== 0) {
        return value / divisor;
      }
    }
  }

  // src/js/orbit-resize.js
  var Orbit = {};
  Orbit = {
    resize: (parentElementSelector) => {
      const parentElement = document.querySelector(parentElementSelector);
      if (!parentElement) {
        console.error(`Not found: ${parentElementSelector}`);
        return;
      }
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width } = entry.contentRect;
          const childElements = parentElement.querySelectorAll(".gravity-spot");
          if (childElements) {
            childElements.forEach((childElement) => {
              let gravityForce = getComputedStyle(childElement).getPropertyValue("--o-force");
              let forceRatio = width / 500;
              console.log(gravityForce, forceRatio, parseFloat(gravityForce) * forceRatio);
              childElement.style.setProperty("--o-force-ratio", `${forceRatio}`);
            });
          } else {
            console.error("No gravity-spot found");
          }
        }
      });
      resizeObserver.observe(parentElement);
    }
  };

  // src/orbit.js
  customElements.define("o-progress", OrbitProgress);
  customElements.define("o-arc", OrbitArc);
  customElements.define("o-text", OrbitText);
  window.Orbit = Orbit;
})();
