
/*
* orbit
* v.1.2.2
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
      this.textObserver = new MutationObserver(() => {
        const textPath = this.shadowRoot.querySelector("textPath");
        textPath.textContent = this.textContent;
      });
      this.textObserver.observe(this, { characterData: true, subtree: true });
    }
    disconnectedCallback() {
      this.observer.disconnect();
      this.textObserver.disconnect();
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
    getControlPoint(x, y, x1, y1, direction = "clockwise") {
      let xm = (x + x1) / 2;
      let ym = (y + y1) / 2;
      let dx = x1 - x;
      let dy = y1 - y;
      let xc, yc;
      if (direction === "clockwise") {
        xc = xm + dy * 0.4;
        yc = ym - dx * 0.4;
      } else {
        xc = xm - dy * 0.4;
        yc = ym + dx * 0.4;
      }
      return { xc, yc };
    }
    calculateArcParameters() {
      const { arcAngle, realRadius, gap, arcHeightPercentage, orbitNumber, shape, strokeWidth, arcHeight } = this.getAttributes();
      const radius = realRadius;
      let largeArcFlag, dShape;
      let offset = Math.PI / 2;
      let stroke = strokeWidth;
      let fangle = arcAngle * Math.PI / 180;
      let bigRadius = radius + arcHeightPercentage;
      let smallRadius = radius - arcHeightPercentage !== 0 ? radius - arcHeightPercentage : radius;
      let bigGap = (gap + stroke * 1.25) / orbitNumber / bigRadius;
      let smallGap = (gap + stroke * 1.25) / orbitNumber / smallRadius;
      let upperAngleStart = bigGap - offset;
      let upperAngleEnd = fangle - bigGap - offset;
      let innerAngleStart = smallGap - offset;
      let innerAngleEnd = fangle - smallGap - offset;
      function arcPoint(radius2, angle, radiusAdjustment = 0, angleOffsetDegrees = 0) {
        const adjustedRadius = radius2 + radiusAdjustment;
        const adjustedAngle = angle + angleOffsetDegrees * Math.PI / 180;
        return {
          x: 50 + adjustedRadius * Math.cos(adjustedAngle),
          y: 50 + adjustedRadius * Math.sin(adjustedAngle)
        };
      }
      let upperArcStart = arcPoint(bigRadius, upperAngleStart);
      let upperArcEnd = arcPoint(bigRadius, upperAngleEnd);
      let innerArcStart = arcPoint(smallRadius, innerAngleStart);
      let innerArcEnd = arcPoint(smallRadius, innerAngleEnd);
      largeArcFlag = arcAngle <= 180 ? 0 : 1;
      if (shape === "rounded") {
        let curve = arcHeight < 10 ? 5 : arcHeight < 5 ? 2.5 : 10;
        let newUpperStart = arcPoint(bigRadius, upperAngleStart, 0, curve / orbitNumber);
        let newUpperEnd = arcPoint(bigRadius, upperAngleEnd, 0, -curve / orbitNumber);
        let newInnerStart = arcPoint(smallRadius, innerAngleStart, 0, curve / orbitNumber);
        let newInnerEnd = arcPoint(smallRadius, innerAngleEnd, 0, -curve / orbitNumber);
        let upperPointStart = arcPoint(bigRadius, upperAngleStart, -(curve / 2) / orbitNumber, 0);
        let upperPointEnd = arcPoint(bigRadius, upperAngleEnd, -(curve / 2) / orbitNumber, 0);
        let innerPointStart = arcPoint(smallRadius, innerAngleStart, curve / 2 / orbitNumber, 0);
        let innerPointEnd = arcPoint(smallRadius, innerAngleEnd, curve / 2 / orbitNumber, 0);
        let Q = this.getControlPoint(newUpperEnd.x, newUpperEnd.y, upperPointEnd.x, upperPointEnd.y);
        let Q1 = this.getControlPoint(innerPointEnd.x, innerPointEnd.y, newInnerEnd.x, newInnerEnd.y);
        let Q2 = this.getControlPoint(newInnerStart.x, newInnerStart.y, innerPointStart.x, innerPointStart.y);
        let Q3 = this.getControlPoint(upperPointStart.x, upperPointStart.y, newUpperStart.x, newUpperStart.y);
        dShape = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        dShape += `Q ${Q.xc}, ${Q.yc} ${upperPointEnd.x}  ${upperPointEnd.y} `;
        dShape += `L ${upperPointEnd.x} ${upperPointEnd.y}`;
        dShape += `L ${innerPointEnd.x} ${innerPointEnd.y}`;
        dShape += `Q ${Q1.xc}, ${Q1.yc} ${newInnerEnd.x} ${newInnerEnd.y} `;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x},${newInnerStart.y}`;
        dShape += `Q ${Q2.xc}, ${Q2.yc} ${innerPointStart.x}  ${innerPointStart.y} `;
        dShape += `L ${innerPointStart.x} ${innerPointStart.y}`;
        dShape += `L ${upperPointStart.x} ${upperPointStart.y}`;
        dShape += ` Q ${Q3.xc}, ${Q3.yc} ${newUpperStart.x} ${newUpperStart.y} `;
        dShape += ` Z`;
      } else if (shape === "circle" || shape === "bullet") {
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += ` A 1,1 0 0 1 ${innerArcEnd.x},${innerArcEnd.y} `;
        dShape += ` A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x},${innerArcStart.y}`;
        dShape += ` A 1,1 0 0 ${shape === "circle" ? 1 : 0} ${upperArcStart.x},${upperArcStart.y} `;
        dShape += ` Z`;
      } else if (shape === "circle1") {
        let segment = arcHeight * 1.36;
        let newUpperStart = arcPoint(bigRadius, upperAngleStart, 0, segment / orbitNumber);
        let newUpperEnd = arcPoint(bigRadius, upperAngleEnd, 0, -(segment / orbitNumber));
        let newInnerStart = arcPoint(smallRadius, innerAngleStart, 0, segment / orbitNumber);
        let newInnerEnd = arcPoint(smallRadius, innerAngleEnd, 0, -(segment / orbitNumber));
        dShape = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        dShape += ` A 1,1 0 0 1 ${newInnerEnd.x},${newInnerEnd.y} `;
        dShape += ` A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x},${newInnerStart.y}`;
        dShape += ` A 1,1 0 0 1 ${newUpperStart.x},${newUpperStart.y} `;
        dShape += ` Z`;
      } else if (shape === "arrow") {
        let middleEnd = arcPoint(radius, upperAngleEnd, 0, 24 / orbitNumber / 2);
        let middleStart = arcPoint(radius, upperAngleStart, 0, 24 / orbitNumber / 2);
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += `L ${middleEnd.x} ${middleEnd.y}`;
        dShape += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        dShape += `L ${middleStart.x} ${middleStart.y}  `;
        dShape += `Z`;
      } else if (shape === "backslash" || shape === "slash") {
        let newUpperStart = arcPoint(bigRadius, upperAngleStart, 0, shape === "backslash" ? 0 : 24 / orbitNumber / 2);
        let newUpperEnd = arcPoint(bigRadius, upperAngleEnd, 0, shape === "backslash" ? 0 : 24 / orbitNumber / 2);
        let newInnerStart = arcPoint(smallRadius, innerAngleStart, 0, shape === "backslash" ? 24 / orbitNumber / 2 : 0);
        let newInnerEnd = arcPoint(smallRadius, innerAngleEnd, 0, shape === "backslash" ? 24 / orbitNumber / 2 : 0);
        dShape = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        dShape += `L ${newInnerEnd.x} ${newInnerEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x}, ${newInnerStart.y}`;
        dShape += `Z`;
      } else if (shape === "nr") {
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        dShape += `Z`;
      } else {
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        dShape += `Z`;
      }
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
