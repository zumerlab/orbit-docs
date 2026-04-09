(()=>{var k=class extends HTMLElement{constructor(){super(),this.commonProperties={orbitRadius:0,arcHeight:0,realRadius:0,arcAngle:0,shape:"none",arcHeightPercentage:0,orbitNumber:1,size:1,strokeWidth:1}}getCommonAttributes(e){let t=parseFloat(getComputedStyle(e).getPropertyValue("r")||0),r=parseFloat(getComputedStyle(e).getPropertyValue("--o-orbit-number")||1),s=parseFloat(getComputedStyle(e).getPropertyValue("--o-size-ratio")||1),o=parseFloat(getComputedStyle(e).getPropertyValue("--o-stroke-width")||1),n=e.getAttribute("shape")||"none",c=t/r*s-o+.3,a=c/2*100/t/2,i=0;e.classList.contains("outer-orbit")?i=a:e.classList.contains("quarter-outer-orbit")?i=a*-.5:e.classList.contains("inner-orbit")?i=a*-1:e.classList.contains("quarter-inner-orbit")&&(i=a*.5);let g=50+i;return{orbitRadius:t,arcHeight:c,realRadius:g,arcAngle:0,shape:n,arcHeightPercentage:a,orbitNumber:r,size:s,strokeWidth:o}}getProgressAngle(e,t,r=100){return t/r*e}getControlPoint(e,t,r,s,o="clockwise"){let n=(e+r)/2,c=(t+s)/2,a=r-e,i=s-t;return o==="clockwise"?{xc:n+i*.4,yc:c-a*.4}:{xc:n-i*.4,yc:c+a*.4}}arcPoint(e,t,r=0,s=0){let o=e+r,n=t+s*Math.PI/180;return{x:50+o*Math.cos(n),y:50+o*Math.sin(n)}}calculateCommonArcParameters(e,t,r,s,o,n,c,a=0){let i=Math.PI/2,g=e*Math.PI/180,l=t+r,h=t-r!==0?t-r:t,u=(a+n*1.25)/s/l,$=(a+n*1.25)/s/h,p=u-i,A=g-u-i,b=$-i,d=g-$-i,P=this.arcPoint(l,p),x=this.arcPoint(l,A),m=this.arcPoint(h,b),v=this.arcPoint(h,d),f=e<=180?0:1;return{upperArcStart:P,upperArcEnd:x,innerArcStart:m,innerArcEnd:v,largeArcFlag:f,bigRadius:l,smallRadius:h,radius:t,upperAngleStart:p,upperAngleEnd:A,innerAngleStart:b,innerAngleEnd:d}}generatePathData(e,t,r,s){let o="";switch(e){case"rounded":o=this.generateRoundedPath(t,r,s);break;case"circle":case"circle-a":case"bullet":o=this.generateCirclePath(t,e);break;case"circle-b":o=this.generateCircleBPath(t,r,s);break;case"arrow":o=this.generateArrowPath(t,s);break;case"backslash":case"slash":o=this.generateSlashPath(t,e,s);break;case"zigzag":o=this.generateZigzagPath(t,r,s);break;default:o=this.generateDefaultPath(t)}return o}generateRoundedPath(e,t,r){let{upperArcStart:s,upperArcEnd:o,innerArcStart:n,innerArcEnd:c,bigRadius:a,smallRadius:i,largeArcFlag:g}=e,l=t<10?5:t<5?2.5:10,h=this.arcPoint(a,e.upperAngleStart,0,l/r),u=this.arcPoint(a,e.upperAngleEnd,0,-l/r),$=this.arcPoint(i,e.innerAngleStart,0,l/r),p=this.arcPoint(i,e.innerAngleEnd,0,-l/r),A=this.arcPoint(a,e.upperAngleStart,-(l/2)/r,0),b=this.arcPoint(a,e.upperAngleEnd,-(l/2)/r,0),d=this.arcPoint(i,e.innerAngleStart,l/2/r,0),P=this.arcPoint(i,e.innerAngleEnd,l/2/r,0),x=this.getControlPoint(u.x,u.y,b.x,b.y),m=this.getControlPoint(P.x,P.y,p.x,p.y),v=this.getControlPoint($.x,$.y,d.x,d.y),f=this.getControlPoint(A.x,A.y,h.x,h.y),y=`M ${h.x},${h.y} A ${a},${a} 0 ${g} 1 ${u.x},${u.y}`;return y+=`Q ${x.xc}, ${x.yc} ${b.x} ${b.y} `,y+=`L ${b.x} ${b.y}`,y+=`L ${P.x} ${P.y}`,y+=`Q ${m.xc}, ${m.yc} ${p.x} ${p.y} `,y+=`A ${i},${i} 0 ${g} 0 ${$.x},${$.y}`,y+=`Q ${v.xc}, ${v.yc} ${d.x} ${d.y} `,y+=`L ${d.x} ${d.y}`,y+=`L ${A.x} ${A.y}`,y+=` Q ${f.xc}, ${f.yc} ${h.x} ${h.y} `,y+=" Z",y}generateCirclePath(e,t){let{upperArcStart:r,upperArcEnd:s,innerArcStart:o,innerArcEnd:n,bigRadius:c,smallRadius:a,largeArcFlag:i}=e,g=`M ${r.x},${r.y} A ${c},${c} 0 ${i} 1 ${s.x},${s.y}`;return g+=` A 1,1 0 0 1 ${n.x},${n.y} `,g+=` A ${a},${a} 0 ${i} 0 ${o.x},${o.y}`,g+=` A 1,1 0 0 ${t==="circle"||t==="circle-a"?1:0} ${r.x},${r.y} `,g+=" Z",g}generateCircleBPath(e,t,r){let{upperAngleStart:s,upperAngleEnd:o,innerAngleStart:n,innerAngleEnd:c,bigRadius:a,smallRadius:i,largeArcFlag:g}=e,l=t*1.36,h=this.arcPoint(a,s,0,l/r),u=this.arcPoint(a,o,0,-l/r),$=this.arcPoint(i,n,0,l/r),p=this.arcPoint(i,c,0,-l/r),A=`M ${h.x},${h.y} A ${a},${a} 0 ${g} 1 ${u.x},${u.y}`;return A+=` A 1,1 0 0 1 ${p.x},${p.y} `,A+=` A ${i},${i} 0 ${g} 0 ${$.x},${$.y}`,A+=` A 1,1 0 0 1 ${h.x},${h.y} `,A+=" Z",A}generateArrowPath(e,t){let{upperArcStart:r,upperArcEnd:s,innerArcStart:o,innerArcEnd:n,bigRadius:c,smallRadius:a,largeArcFlag:i,radius:g}=e,l=this.arcPoint(g,e.upperAngleEnd,0,24/t/2),h=this.arcPoint(g,e.upperAngleStart,0,24/t/2),u=`M ${r.x},${r.y} A ${c},${c} 0 ${i} 1 ${s.x},${s.y}`;return u+=`L ${l.x} ${l.y}`,u+=`L ${n.x} ${n.y}`,u+=`A ${a},${a} 0 ${i} 0 ${o.x}, ${o.y}`,u+=`L ${h.x} ${h.y}`,u+="Z",u}generateSlashPath(e,t,r){let{upperAngleStart:s,upperAngleEnd:o,innerAngleStart:n,innerAngleEnd:c,bigRadius:a,smallRadius:i,largeArcFlag:g}=e,l=this.arcPoint(a,s,0,t==="backslash"?0:24/r/2),h=this.arcPoint(a,o,0,t==="backslash"?0:24/r/2),u=this.arcPoint(i,n,0,t==="backslash"?24/r/2:0),$=this.arcPoint(i,c,0,t==="backslash"?24/r/2:0),p=`M ${l.x},${l.y} A ${a},${a} 0 ${g} 1 ${h.x},${h.y}`;return p+=`L ${$.x} ${$.y}`,p+=`A ${i},${i} 0 ${g} 0 ${u.x}, ${u.y}`,p+="Z",p}generateZigzagPath(e,t,r){let{upperArcStart:s,upperArcEnd:o,innerArcStart:n,innerArcEnd:c,bigRadius:a,smallRadius:i,largeArcFlag:g,radius:l}=e,h=this.arcPoint(l,e.upperAngleStart,-t/r/2,3),u=this.arcPoint(l,e.upperAngleStart,0/r/2,0),$=this.arcPoint(l,e.upperAngleStart,t/r/2,3),p=this.arcPoint(l,e.innerAngleEnd,t/r/2,3),A=this.arcPoint(l,e.innerAngleEnd,0/r/2,0),b=this.arcPoint(l,e.innerAngleEnd,-t/r/2,3),d=`M ${s.x},${s.y} A ${a},${a} 0 ${g} 1 ${o.x},${o.y}`;return d+=`L ${p.x} ${p.y}`,d+=`L ${A.x} ${A.y}`,d+=`L ${b.x} ${b.y}`,d+=`L ${c.x} ${c.y}`,d+=`A ${i},${i} 0 ${g} 0 ${n.x}, ${n.y}`,d+=`L ${h.x} ${h.y}`,d+=`L ${u.x} ${u.y}`,d+=`L ${$.x} ${$.y}`,d+="Z",d}generateDefaultPath(e){let{upperArcStart:t,upperArcEnd:r,innerArcStart:s,innerArcEnd:o,bigRadius:n,smallRadius:c,largeArcFlag:a}=e,i=`M ${t.x},${t.y} A ${n},${n} 0 ${a} 1 ${r.x},${r.y}`;return i+=`L ${o.x} ${o.y}`,i+=`A ${c},${c} 0 ${a} 0 ${s.x}, ${s.y}`,i+="Z",i}},E=class extends k{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
      <style>
        :host {
          --o-fill: var(--o-gray-light);
          --o-stroke: var(--o-fill);
          --o-stroke-width: 1;
          --o-back-fill: transparent;
          --o-back-stroke: none;
          --o-back-stroke-width: 1;
        }
        :host(:hover) {
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
    `}connectedCallback(){this.update(),this.setupObserver()}setupObserver(){this.observer=new MutationObserver(e=>{this.observer.disconnect(),e.forEach(()=>this.update()),this.observer.observe(this,{attributes:!0,childList:!0})}),this.observer.observe(this,{attributes:!0,childList:!0})}update(){let e=this.shadowRoot.querySelector(".progress-bg"),t=this.shadowRoot.querySelector(".progress-bar");this.updateArc(e,!0),this.updateArc(t,!1)}updateArc(e,t){let{d:r}=this.calculateArcParameters(t);e.setAttribute("d",r)}getAttributes(){let e=super.getCommonAttributes(this),t=parseFloat(getComputedStyle(this).getPropertyValue("--o-range")||360),r=parseFloat(getComputedStyle(this).getPropertyValue("--o-progress")||this.getAttribute("value")||0),s=parseFloat(this.getAttribute("max"))||100;return{...e,range:t,progress:r,maxValue:s}}getProgressAngle(e){let{range:t,progress:r,maxValue:s}=this.getAttributes();return e?(s-1e-5)/s*t:r/s*t}calculateArcParameters(e){let{shape:t,realRadius:r,arcHeightPercentage:s,orbitNumber:o,strokeWidth:n,arcHeight:c}=this.getAttributes(),a=this.getProgressAngle(e),i=super.calculateCommonArcParameters(a,r,s,o,t,n,c);return{d:super.generatePathData(t,i,c,o)}}},S=document.createElement("template");S.innerHTML=`
  <style>
    :host {
      --o-fill: var(--o-gray-light);
      --o-stroke: var(--o-fill);
      --o-stroke-width: 1;
      --o-color: currentcolor;
    }
    :host(:hover) {
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
    <path id="orbitPath" shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke"></path>
    <text>
      <textPath href="#orbitPath" alignment-baseline="middle"></textPath>
    </text>
  </svg>
`;var C=class extends k{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(S.content.cloneNode(!0))}connectedCallback(){this.update(),this.setupObservers()}disconnectedCallback(){this.observer?.disconnect(),this.textObserver?.disconnect()}setupObservers(){this.observer=new MutationObserver(e=>{this.observer.disconnect(),e.forEach(()=>this.update()),this.observer.observe(this,{attributes:!0,childList:!0})}),this.observer.observe(this,{attributes:!0,childList:!0}),this.textObserver=new MutationObserver(()=>{let e=this.shadowRoot.querySelector("textPath");e.textContent=this.textContent}),this.textObserver.observe(this,{characterData:!0,subtree:!0})}update(){let{length:e,fontSize:t,textAnchor:r,fitRange:s}=this.getAttributes(),o=this.shadowRoot.getElementById("orbitPath"),n=this.shadowRoot.getElementById("orbitShape"),c=this.shadowRoot.querySelector("text"),a=this.shadowRoot.querySelector("textPath"),{dShape:i}=this.calculateArcParameters(),{dPath:g}=this.calculateTextArcParameters();n.setAttribute("d",i),o.setAttribute("d",g),r==="start"?(a.setAttribute("startOffset","0%"),a.setAttribute("text-anchor","start")):r==="middle"?(a.setAttribute("startOffset","50%"),a.setAttribute("text-anchor","middle")):r==="end"&&(a.setAttribute("startOffset","100%"),a.setAttribute("text-anchor","end")),s&&a.parentElement.setAttribute("textLength",o.getTotalLength()),c.style.fontSize=`calc(${t} * (100 / (${e}) * (12 / var(--o-orbit-number)))`,a.textContent=this.textContent}getAttributes(){let e=super.getCommonAttributes(this),t,r=this.hasAttribute("flip")||this.classList.contains("flip"),s=this.hasAttribute("fit-range")||this.classList.contains("fit-range")||!1,o=parseFloat(getComputedStyle(this).getPropertyValue("--o-force")),n=this.getAttribute("text-anchor")||"middle",c=getComputedStyle(this).getPropertyValue("font-size")||getComputedStyle(this).getPropertyValue("--font-size"),a=parseFloat(getComputedStyle(this).getPropertyValue("--o-range")||360),i=parseFloat(this.getAttribute("value")),g=parseFloat(getComputedStyle(this).getPropertyValue("--o-gap"));if(i){t=super.getProgressAngle(a,i);let l=this.previousElementSibling,h=l?parseFloat(getComputedStyle(l).getPropertyValue("--o_stack")):0;this.style.setProperty("--o_stack",h+t),h>=0&&r&&this.style.setProperty("--o-angle-composite",parseFloat(h)+"deg"),h>0&&!r&&this.style.setProperty("--o-angle-composite",parseFloat(h)+"deg")}else{let l=getComputedStyle(this).getPropertyValue("--o-angle");t=this.calcularExpresionCSS(l)}return{...e,gap:g,arcAngle:t,flip:r,fitRange:s,length:o,fontSize:c,textAnchor:n}}calculateArcParameters(){let{arcAngle:e,realRadius:t,arcHeightPercentage:r,orbitNumber:s,shape:o,strokeWidth:n,arcHeight:c,gap:a}=this.getAttributes(),i=super.calculateCommonArcParameters(e,t,r,s,o,n,c,a);return{dShape:super.generatePathData(o,i,c,s)}}calculateTextArcParameters(){let{arcAngle:e,realRadius:t,gap:r,flip:s}=this.getAttributes(),o=r*.5,n=s?0:1,c=e<=180?0:1,a=50+t*Math.cos((-90+o)*(Math.PI/180)),i=50+t*Math.sin((-90+o)*(Math.PI/180)),g=50+t*Math.cos((e-90-o)*Math.PI/180),l=50+t*Math.sin((e-90-o)*Math.PI/180),[h,u,$,p]=s?[g,l,a,i]:[a,i,g,l];return{dPath:`M ${h},${u} A ${t},${t} 0 ${c} ${n} ${$},${p}`}}calcularExpresionCSS(e){let t=e.match(/calc\(\s*([\d.]+)deg\s*\/\s*\(\s*(\d+)\s*-\s*(\d+)\s*\)\s*\)/);if(t){let r=parseFloat(t[1]),s=parseInt(t[2])-parseInt(t[3]);if(!isNaN(r)&&!isNaN(s)&&s!==0)return r/s}return 0}},w={};w={resize:e=>{let t=document.querySelector(e);if(!t){console.error(`Not found: ${e}`);return}new ResizeObserver(r=>{for(let s of r){let{width:o}=s.contentRect,n=t.querySelectorAll(".gravity-spot");n?n.forEach(c=>{getComputedStyle(c).getPropertyValue("--o-force");let a=o/500;c.style.setProperty("--o-force-ratio",`${a}`)}):console.error("No gravity-spot found")}}).observe(t)}},customElements.get("o-progress")||customElements.define("o-progress",E),customElements.get("o-arc")||customElements.define("o-arc",C),window.Orbit=w})();
