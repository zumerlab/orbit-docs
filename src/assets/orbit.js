
/*
* orbit
* v.1.2.1
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
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-back-fill: transparent;
        --o-back-stroke: none;
        --o-back-stroke-width: 1;
      }
      :host(:hover){
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-back-fill: transparent;
        --o-back-stroke: none;
        --o-back-stroke-width: 1;
      }
      svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }
        svg * {
          pointer-events: visiblePainted;
        }
        .progress-bar {
          fill: var(--o-fill);
          stroke: var(--o-stroke);
          stroke-width: var(--o-stroke-width);
          transition: fill 0.25s, stroke 0.25s;
          stroke-linejoin: round;
        }
        .progress-bg {
          fill: var(--o-back-fill);
          stroke: var(--o-back-stroke);
          stroke-width: var(--o-back-stroke-width);
        }
      </style>
      <svg viewBox="0 0 100 100">
        <path class="progress-bg" shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke"></path>
        <path class="progress-bar" shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke"></path>
      </svg>
    `;
    }
    connectedCallback() {
      this.update();
      this.observer = new MutationObserver((mutations) => {
        this.observer.disconnect();
        mutations.forEach((mutation) => {
          this.update();
        });
        this.observer.observe(this, { attributes: true, childList: true });
      });
      this.observer.observe(this, { attributes: true, childList: true });
    }
    update() {
      const progressBg = this.shadowRoot.querySelector(".progress-bg");
      const progressBar = this.shadowRoot.querySelector(".progress-bar");
      this.updateArc(progressBg, true);
      this.updateArc(progressBar, false);
    }
    updateArc(arc, full) {
      const { d } = this.calculateArcParameters(full);
      arc.setAttribute("d", d);
    }
    getAttributes() {
      const orbitRadius = parseFloat(getComputedStyle(this).getPropertyValue("r") || 0);
      let orbitNumber = parseFloat(getComputedStyle(this).getPropertyValue("--o-orbit-number"));
      let size = parseFloat(getComputedStyle(this).getPropertyValue("--o-size-ratio"));
      const range = parseFloat(getComputedStyle(this).getPropertyValue("--o-range") || 360);
      const progress = parseFloat(getComputedStyle(this).getPropertyValue("--o-progress") || this.getAttribute("value") || 0);
      const shape = this.getAttribute("shape") || "none";
      const strokeWidth = parseFloat(getComputedStyle(this).getPropertyValue("--o-stroke-width"));
      const arcHeight = orbitRadius / orbitNumber * size - strokeWidth + 0.3;
      const arcHeightPercentage = arcHeight / 2 * 100 / orbitRadius / 2;
      const maxAngle = range;
      const maxValue = parseFloat(this.getAttribute("max")) || 100;
      let innerOuter;
      if (this.classList.contains("outer-orbit")) {
        innerOuter = arcHeightPercentage;
      } else if (this.classList.contains("quarter-outer-orbit")) {
        innerOuter = arcHeightPercentage * -0.5;
      } else if (this.classList.contains("inner-orbit")) {
        innerOuter = arcHeightPercentage * -1;
      } else if (this.classList.contains("quarter-inner-orbit")) {
        innerOuter = arcHeightPercentage * 0.5;
      } else {
        innerOuter = 0;
      }
      const realRadius = 50 + innerOuter;
      return {
        orbitRadius,
        progress,
        strokeWidth,
        realRadius,
        maxAngle,
        maxValue,
        shape,
        arcHeightPercentage,
        orbitNumber
      };
    }
    getProgressAngle(full) {
      const { maxAngle, progress, maxValue } = this.getAttributes();
      return full ? (maxValue - 1e-5) / maxValue * maxAngle : progress / maxValue * maxAngle;
    }
    calculateArcParameters(full) {
      const arcAngle = this.getProgressAngle(full);
      const { realRadius, arcHeightPercentage, orbitNumber, shape, strokeWidth } = this.getAttributes();
      const radius = realRadius;
      let startX, startY, endX, endY, largeArcFlag, startX1, startY1, endX1, endY1, dShape, pointX, pointX1, pointY, pointY1;
      let offset = Math.PI / 2;
      let stroke = strokeWidth;
      let fangle = arcAngle * Math.PI / 180;
      let bigRadius = radius + arcHeightPercentage;
      let smallRadius = radius - arcHeightPercentage !== 0 ? radius - arcHeightPercentage : radius;
      let bigGap = stroke * 2 / orbitNumber / 2 / bigRadius;
      let smallGap = stroke * 2 / orbitNumber / 2 / smallRadius;
      let startAngle = bigGap - offset;
      let endAngle = fangle - bigGap - offset;
      let startAngle1 = smallGap - offset;
      let endAngle1 = fangle - smallGap - offset;
      startX = 50 + bigRadius * Math.cos(startAngle);
      startY = 50 + bigRadius * Math.sin(startAngle);
      endX = 50 + bigRadius * Math.cos(endAngle);
      endY = 50 + bigRadius * Math.sin(endAngle);
      pointX = 50 + bigRadius * Math.cos(endAngle + 3 * Math.PI / 180);
      pointY = 50 + bigRadius * Math.sin(endAngle + 3 * Math.PI / 180);
      startX1 = 50 + smallRadius * Math.cos(startAngle1);
      startY1 = 50 + smallRadius * Math.sin(startAngle1);
      endX1 = 50 + smallRadius * Math.cos(endAngle1);
      endY1 = 50 + smallRadius * Math.sin(endAngle1);
      pointX1 = 50 + smallRadius * Math.cos(endAngle1 + 3 * Math.PI / 180);
      pointY1 = 50 + smallRadius * Math.sin(endAngle1 + 3 * Math.PI / 180);
      largeArcFlag = arcAngle <= 180 ? 0 : 1;
      let d = `M ${startX},${startY} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${endX},${endY}`;
      if (shape === "arrow")
        d += `L ${(pointX + pointX1) / 2}  ${(pointY + pointY1) / 2} `;
      if (shape === "circle" || shape === "bullet")
        d += `A ${arcHeightPercentage}, ${arcHeightPercentage} 0 0 1 ${endX1},${endY1} `;
      d += `L ${endX1} ${endY1}`;
      d += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${startX1},${startY1}`;
      if (shape === "circle")
        d += `A ${arcHeightPercentage}, ${arcHeightPercentage} 0 0 1 ${startX},${startY} `;
      if (shape === "bullet")
        d += `A ${arcHeightPercentage}, ${arcHeightPercentage} 0 0 0 ${startX},${startY} `;
      if (shape === "arrow")
        d += `L ${startX1 + 3} ${(startY + startY1) / 2}  `;
      d += `Z`;
      return { d };
    }
  };

  // src/js/orbit-arc.js
  var template = document.createElement("template");
  template.innerHTML = `
   <style>
      :host {
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-color: currentcolor;
      }
      :host(:hover){
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-color: currentcolor;
      }
      svg {
        width: 100%;
        height: 100%;
        overflow: visible;
        pointer-events: none;
      }
      svg * {
        pointer-events: visiblePainted;
      }
      #orbitShape {
        fill: var(--o-fill);
        stroke: var(--o-stroke);
        stroke-width: var(--o-stroke-width);
        transition: fill 0.25s, stroke 0.25s;
        stroke-linejoin: round;
      }
      text {
       fill: var(--o-color);
      }
      #orbitPath {
        fill: transparent;
        stroke: none;
        stroke-width: 0;
      }
   </style>
   <svg viewBox="0 0 100 100">
     <path id="orbitShape" shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke"></path>
     <path id="orbitPath"  shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke" ></path>
     <text>
        <textPath href="#orbitPath"  alignment-baseline="middle"></textPath>
      </text>
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
      this.observer = new MutationObserver((mutations) => {
        this.observer.disconnect();
        mutations.forEach((mutation) => {
          this.update();
        });
        this.observer.observe(this, { attributes: true, childList: true });
      });
      this.observer.observe(this, { attributes: true, childList: true });
    }
    update() {
      const { length, fontSize, textAnchor, fitRange } = this.getAttributes();
      const orbitPath = this.shadowRoot.getElementById("orbitPath");
      const orbitShape = this.shadowRoot.getElementById("orbitShape");
      const text = this.shadowRoot.querySelector("text");
      const textPath = this.shadowRoot.querySelector("textPath");
      const { dShape } = this.calculateArcParameters();
      const { dPath } = this.calculateTextArcParameters();
      orbitShape.setAttribute("d", dShape);
      orbitPath.setAttribute("d", dPath);
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
      if (fitRange)
        textPath.parentElement.setAttribute("textLength", orbitPath.getTotalLength());
      text.style.fontSize = `calc(${fontSize} * (100 / (${length}) * (12 /  var(--o-orbit-number) ))`;
      textPath.textContent = this.textContent;
    }
    getAttributes() {
      let rawAngle, arcAngle, orbitNumber, size, innerOuter;
      const strokeWidth = parseFloat(getComputedStyle(this).getPropertyValue("--o-stroke-width"));
      const orbitRadius = parseFloat(getComputedStyle(this).getPropertyValue("r") || 0);
      const shape = this.getAttribute("shape") || "none";
      const flip = this.hasAttribute("flip") || this.classList.contains("flip");
      const fitRange = this.hasAttribute("fit-range") || this.classList.contains("fit-range") || false;
      const length = parseFloat(getComputedStyle(this).getPropertyValue("--o-force"));
      const textAnchor = this.getAttribute("text-anchor") || "middle";
      const fontSize = getComputedStyle(this).getPropertyValue("font-size") || getComputedStyle(this).getPropertyValue("--font-size");
      const range = parseFloat(getComputedStyle(this).getPropertyValue("--o-range") || 360);
      const value = parseFloat(this.getAttribute("value"));
      if (value) {
        arcAngle = this.getProgressAngle(range, value);
        const prevElement = this.previousElementSibling;
        const stackOffset = prevElement ? parseFloat(getComputedStyle(prevElement).getPropertyValue("--o_stack")) : 0;
        this.style.setProperty("--o_stack", stackOffset + arcAngle);
        if (stackOffset >= 0 && flip)
          this.style.setProperty("--o-angle-composite", parseFloat(stackOffset) + "deg");
        if (stackOffset > 0 && !flip)
          this.style.setProperty("--o-angle-composite", parseFloat(stackOffset) + "deg");
      } else {
        rawAngle = getComputedStyle(this).getPropertyValue("--o-angle");
        arcAngle = calcularExpresionCSS(rawAngle);
      }
      orbitNumber = parseFloat(getComputedStyle(this).getPropertyValue("--o-orbit-number"));
      size = parseFloat(getComputedStyle(this).getPropertyValue("--o-size-ratio"));
      const arcHeight = orbitRadius / orbitNumber * size - strokeWidth + 0.3;
      const arcHeightPercentage = arcHeight / 2 * 100 / orbitRadius / 2;
      const gap = parseFloat(getComputedStyle(this).getPropertyValue("--o-gap"));
      if (this.classList.contains("outer-orbit")) {
        innerOuter = arcHeightPercentage;
      } else if (this.classList.contains("quarter-outer-orbit")) {
        innerOuter = arcHeightPercentage * -0.5;
      } else if (this.classList.contains("inner-orbit")) {
        innerOuter = arcHeightPercentage * -1;
      } else if (this.classList.contains("quarter-inner-orbit")) {
        innerOuter = arcHeightPercentage * 0.5;
      } else {
        innerOuter = 0;
      }
      const realRadius = 50 + innerOuter;
      return {
        orbitRadius,
        arcHeight,
        realRadius,
        gap,
        arcAngle,
        shape,
        length,
        fontSize,
        flip,
        fitRange,
        textAnchor,
        arcHeightPercentage,
        innerOuter,
        orbitNumber,
        size,
        strokeWidth
      };
    }
    getProgressAngle(maxAngle, value) {
      const progress = value;
      const maxValue = parseFloat(this.getAttribute("max")) || 100;
      return progress / maxValue * maxAngle;
    }
    calculateArcParameters() {
      const { arcAngle, realRadius, gap, arcHeightPercentage, orbitNumber, shape, strokeWidth } = this.getAttributes();
      const radius = realRadius;
      let startX, startY, endX, endY, largeArcFlag, startX1, startY1, endX1, endY1, dShape, pointX, pointX1, pointY, pointY1;
      let offset = Math.PI / 2;
      let stroke = strokeWidth;
      let fangle = arcAngle * Math.PI / 180;
      let bigRadius = radius + arcHeightPercentage;
      let smallRadius = radius - arcHeightPercentage !== 0 ? radius - arcHeightPercentage : radius;
      let bigGap = (gap * 2 + stroke * 2) / orbitNumber / 2 / bigRadius;
      let smallGap = (gap * 2 + stroke * 2) / orbitNumber / 2 / smallRadius;
      let startAngle = bigGap - offset;
      let endAngle = fangle - bigGap - offset;
      let startAngle1 = smallGap - offset;
      let endAngle1 = fangle - smallGap - offset;
      startX = 50 + bigRadius * Math.cos(startAngle);
      startY = 50 + bigRadius * Math.sin(startAngle);
      endX = 50 + bigRadius * Math.cos(endAngle);
      endY = 50 + bigRadius * Math.sin(endAngle);
      pointX = 50 + bigRadius * Math.cos(endAngle + 3 * Math.PI / 180);
      pointY = 50 + bigRadius * Math.sin(endAngle + 3 * Math.PI / 180);
      startX1 = 50 + smallRadius * Math.cos(startAngle1);
      startY1 = 50 + smallRadius * Math.sin(startAngle1);
      endX1 = 50 + smallRadius * Math.cos(endAngle1);
      endY1 = 50 + smallRadius * Math.sin(endAngle1);
      pointX1 = 50 + smallRadius * Math.cos(endAngle1 + 3 * Math.PI / 180);
      pointY1 = 50 + smallRadius * Math.sin(endAngle1 + 3 * Math.PI / 180);
      largeArcFlag = arcAngle <= 180 ? 0 : 1;
      dShape = `M ${startX},${startY} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${endX},${endY}`;
      if (shape === "arrow")
        dShape += `L ${(pointX + pointX1) / 2}  ${(pointY + pointY1) / 2} `;
      if (shape === "circle" || shape === "bullet")
        dShape += `A ${arcHeightPercentage}, ${arcHeightPercentage} 0 0 1 ${endX1},${endY1} `;
      dShape += `L ${endX1} ${endY1}`;
      dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${startX1},${startY1}`;
      if (shape === "circle")
        dShape += `A ${arcHeightPercentage}, ${arcHeightPercentage} 0 0 1 ${startX},${startY} `;
      if (shape === "bullet")
        dShape += `A ${arcHeightPercentage}, ${arcHeightPercentage} 0 0 0 ${startX},${startY} `;
      if (shape === "arrow")
        dShape += `L ${startX1 + 3} ${(startY + startY1) / 2}  `;
      dShape += `Z`;
      return { dShape };
    }
    calculateTextArcParameters() {
      const { arcAngle, realRadius, gap, flip } = this.getAttributes();
      const radius = realRadius;
      let startX, startY, endX, endY, largeArcFlag, dPath, sweepFlag;
      let adjustedGap = gap * 0.5;
      sweepFlag = flip ? 0 : 1;
      largeArcFlag = arcAngle <= 180 ? 0 : 1;
      let coordX1 = 50 + radius * Math.cos((-90 + adjustedGap) * (Math.PI / 180));
      let coordY1 = 50 + radius * Math.sin((-90 + adjustedGap) * (Math.PI / 180));
      let coordX2 = 50 + radius * Math.cos((arcAngle - 90 - adjustedGap) * Math.PI / 180);
      let coordY2 = 50 + radius * Math.sin((arcAngle - 90 - adjustedGap) * Math.PI / 180);
      if (flip) {
        startX = coordX2;
        startY = coordY2;
        endX = coordX1;
        endY = coordY1;
      } else {
        startX = coordX1;
        startY = coordY1;
        endX = coordX2;
        endY = coordY2;
      }
      dPath = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX},${endY}`;
      return { dPath };
    }
  };
  function calcularExpresionCSS(cssExpression) {
    const match = cssExpression.match(
      /calc\(\s*([\d.]+)deg\s*\/\s*\(\s*(\d+)\s*-\s*(\d+)\s*\)\s*\)/
    );
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
  if (!customElements.get("o-progress")) {
    customElements.define("o-progress", OrbitProgress);
  }
  if (!customElements.get("o-arc")) {
    customElements.define("o-arc", OrbitArc);
  }
  window.Orbit = Orbit;
})();
