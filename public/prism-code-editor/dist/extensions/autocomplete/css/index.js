import { getClosestToken } from "../../../utils/index.js";
import { a as getLineStart } from "../../../local-VpqO7_GV.js";
import { f as findWords } from "../../../utils-BwjmoXco.js";
import { h as htmlTags } from "../../../data-CCzVscJt.js";
const toCompletions = (prefix, icon, values) => {
  return values.split(",").map(
    (val) => val.includes("(") ? { label: prefix + val.slice(0, -2), icon: "function", insert: prefix + val, tabStops: [val.length + prefix.length - 1] } : { label: prefix + val, icon }
  );
};
const cssValues = /* @__PURE__ */ toCompletions("", "enum", "aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,transparent,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen,unset,initial,revert,revert-layer,pre,pre-wrap,white-space,linear,ease,ease-in,ease-in-out,ease-out,center,flex-end,flex-start,space-around,space-between,stretch,start,end,normal,baseline,first baseline,last baseline,space-evenly,safe,unsafe,self-start,self-end,auto,left,right,legacy,save,unsave,alternate,alternate-reverse,backwards,both,forwards,infinite,none,reverse,paused,running,hidden,visible,fixed,local,scroll,multiply,screen,overlay,darken,lighten,color-dodge,color-burn,hard-light,soft-light,difference,exclusion,hue,saturation,color,luminosity,bottom,top,contain,cover,collapse,separate,fill,repeat,round,space,url(),clone,slice,inset,border-box,content-box,always,avoid,avoid-column,avoid-page,column,page,rect(),evenodd,nonzero,linearRGB,sRGB,balance,all,strict,content,size,layout,style,paint,attr(),counter(),icon,alias,all-scroll,cell,col-resize,context-menu,copy,crosshair,default,e-resize,ew-resize,grab,grabbing,help,move,ne-resize,nesw-resize,no-drop,not-allowed,n-resize,ns-resize,nw-resize,nwse-resize,pointer,progress,row-resize,se-resize,s-resize,sw-resize,text,vertical-text,wait,w-resize,zoom-in,zoom-out,ltr,rtl,block,contents,flex,flexbox,flow-root,grid,inline,inline-block,inline-flex,inline-flexbox,inline-table,list-item,ruby,ruby-base,ruby-base-container,ruby-text,ruby-text-container,run-in,table,table-caption,table-cell,table-column,table-column-group,table-footer-group,table-header-group,table-row,table-row-group,hide,show,accumulate,new,blur(),brightness(),contrast(),drop-shadow(),grayscale(),hue-rotate(),invert,opacity(),saturate(),sepia(),column-reverse,row,row-reverse,nowrap,wrap,wrap-reverse,inline-end,inline-start,100,200,300,400,500,600,700,800,900,bold,bolder,caption,italic,large,larger,lighter,medium,menu,message-box,oblique,small,small-caps,small-caption,smaller,status-bar,x-large,x-small,xx-large,xx-small,condensed,expanded,extra-condensed,extra-expanded,narrower,semi-condensed,semi-expanded,ultra-condensed,ultra-expanded,wider,weight,annotation(),character-variant(),historical-forms,ornaments(),styleset(),stylistic(),swash(),all-petite-caps,all-small-caps,petite-caps,titling-caps,unicase,full-width,jis04,jis78,jis83,jis90,proportional-width,simplified,traditional,additional-ligatures,common-ligatures,contextual,discretionary-ligatures,historical-ligatures,no-additional-ligatures,no-common-ligatures,no-contextual,no-discretionary-ligatures,no-historical-ligatures,diagonal-fractions,lining-nums,oldstyle-nums,ordinal,proportional-nums,slashed-zero,stacked-fractions,tabular-nums,sub,super,span,min-content,max-content,minmax(),dense,subgrid,fit-content,manual,flip,from-image,crisp-edges,optimizeQuality,optimizeSpeed,pixelated,active,disabled,inactive,isolate,loose,anywhere,armenian,circle,decimal,decimal-leading-zero,disc,georgian,inside,lower-alpha,lower-greek,lower-latin,lower-roman,outside,square,symbols(),upper-alpha,upper-latin,upper-roman,alpha,luminance,path(),current,root,scale-down,break-word,markers,stroke,painted,visibleFill,visiblePainted,visibleStroke,absolute,relative,static,sticky,horizontal,vertical,distribute-letter,distribute-space,line-edge,after,before,smooth,mandatory,proximity,margin-box,crispEdges,geometricPrecision,format(),butt,bevel,miter,additive,alphabetic,cyclic,extends,numeric,symbolic,justify,middle,dashed,dotted,double,line-through,overline,solid,underline,wavy,distribute,distribute-all-lines,inter-cluster,inter-ideograph,inter-word,kashida,newspaper,sideways,sideways-right,upright,clip,ellipsis,optimizeLegibility,capitalize,lowercase,uppercase,above,below,cross-slide-x,cross-slide-y,double-tap-zoom,manipulation,pan-x,pan-y,pinch-zoom,matrix(),matrix3d(),perspective(),rotate(),rotate3d(),rotateX(),rotateY(),rotateZ(),scale(),scale3d(),scaleX(),scaleY(),scaleZ(),skew(),skewX(),skewY(),translate(),translate3d(),translateX(),translateY(),translateZ(),flat,preserve-3d,bidi-override,embed,isolate-override,plaintext,text-bottom,text-top,scroll-position,break-all,keep-all,horizontal-tb,sideways-lr,sideways-rl,vertical-lr,vertical-rl,inherit,single,multiple,inline-axis,block-axis,bar,underscore,inline-size,emoji,unicode,in-flow,compact,padding-box,economy,exact,thin,stable,pretty,fill-box,stroke-box,view-box,discard,preserve,preserve-breaks,preserve-spaces,break-spaces,true,false,calc(),min(),max(),clamp(),mod(),rem(),sin(),cos(),asin(),acos(),atan(),atan2(),pow(),sqrt(),hypot(),log(),exp(),abs(),sign(),rgb(),hsl(),hwb(),lch(),oklch(),lab(),oklab(),color-mix(),linear-gradient(),radial-gradient(),conic-gradient(),repeating-linear-gradient(),repeating-radial-gradient(),repeating-conic-gradient(),image-set(),cross-fade(),counters(),ellipse(),xywh(),polygon(),shape(),env(),var(),cubic-bezier(),steps(),view(),anchor(),anchor-size()");
const atRules = /* @__PURE__ */ toCompletions("@", "keyword", "charset,counter-style,font-face,font-feature-values,import,keyframes,layer,media,namespace,page,property,supports,container,scope,position-try,starting-style,view-transition");
const pseudoClasses = /* @__PURE__ */ toCompletions(":", "function", "active,any-link,checked,corner-present,decrement,default,disabled,double-button,empty,enabled,end,first,first-child,first-of-type,focus,fullscreen,future,horizontal,host,host-context(),hover,increment,indeterminate,in-range,invalid,lang(),last-child,last-of-type,left,link,matches(),no-button,not(),nth-child(),nth-last-child(),nth-last-of-type(),nth-of-type(),only-child,only-of-type,optional,out-of-range,past,read-only,read-write,required,right,root,scope,single-button,start,target,valid,vertical,visited,window-inactive,current,blank,defined,dir(),focus-visible,focus-within,has(),is(),local-link,paused,placeholder-shown,playing,target-within,user-invalid,user-valid,where(),picture-in-picture");
const pseudoElements = /* @__PURE__ */ toCompletions("::", "function", "after,backdrop,before,content,cue,cue-region,first-letter,first-line,selection,shadow,target-text,grammar-error,marker,part(),placeholder,slotted(),spelling-error,view-transition,view-transition-group,view-transition-image-pair,view-transition-new,view-transition-old");
const hasStyleRules = ["container", "supports", "layer", "media", "scope"];
const atRule = /@([\w-]*)(?!\w|-)(?:[^;{"']|"(?:\\[^]|[^\\\n"])*"|'(?:\\[^]|[^\\\n'])*')*$/;
const tagNames = Object.keys(htmlTags).map((tag) => ({ label: tag, icon: "keyword" }));
const getCSSProperties = () => {
  if (!properties) {
    properties = [];
    const style = document.body.style;
    const seen = /* @__PURE__ */ new Set();
    for (let key in style) {
      if (typeof style[key] == "string" && !/-|^moz|^webkit/i.test(key)) {
        key = key.replace(/[A-Z]/g, (char) => "-" + char.toLowerCase());
        if (!seen.has(key)) {
          seen.add(key);
          properties.push({
            label: key,
            icon: "property",
            insert: key + ": ;",
            tabStops: [key.length + 2]
          });
        }
      }
    }
  }
  return properties;
};
const cssCompletion = (classes, variables) => {
  return (context, editor) => {
    let before = context.before;
    let pos = context.pos;
    let matcher = editor.extensions.matchBrackets;
    let from = context.lineBefore.search(/[\w-]*$/) + getLineStart(before, pos);
    let options;
    let currentStatement = before.slice(Math.max(...["{", "}", ";"].map((c) => before.lastIndexOf(c) + 1))).trimStart();
    if (getClosestToken(editor, ".comment,.string", 0, 0, pos))
      return;
    if (getClosestToken(editor, ".tag", 0, 0, pos)) {
      options = currentStatement.includes(":") ? cssValues : getCSSProperties();
    } else {
      const atRuleMatch = atRule.exec(before);
      if (atRuleMatch) {
        if (atRuleMatch.index + atRuleMatch[1].length + 2 > pos) {
          from--;
          options = atRules;
        }
      } else if (matcher) {
        let { brackets, pairs } = matcher;
        let i = 0;
        let bracket;
        let inSelector = true;
        let charBefore = before[from - 1];
        for (; bracket = brackets[i]; i++) {
          if (bracket[3] == "{" && bracket[1] < pos && brackets[pairs[i]]?.[5] > pos && !hasStyleRules.includes(before.slice(0, bracket[1]).match(atRule)?.[1])) {
            inSelector = "&+>~:.#[".includes(currentStatement[0]);
            break;
          }
        }
        if (inSelector) {
          if (!/\[[^\]]*$/.test(currentStatement)) {
            if (charBefore == ":") {
              if (before[from - 2] == ":") {
                from -= 2;
                options = pseudoElements;
              } else {
                from--;
                options = pseudoClasses;
              }
            } else if (charBefore == ".") {
              options = findWords(
                context,
                editor,
                (type) => type == "selector" || type == "class",
                /.+/g,
                classes,
                true
              ).map((name) => ({ label: name, icon: "keyword" }));
              from--;
            } else if (charBefore != "#")
              options = tagNames;
          }
        } else {
          options = findWords(
            context,
            editor,
            (type) => type == "variable",
            /.+/g,
            variables,
            true
          ).map((name) => ({
            label: name
          }));
          options.push(...currentStatement.includes(":") ? cssValues : getCSSProperties());
        }
      }
    }
    if (options && (from < pos || context.explicit)) {
      return {
        from,
        options
      };
    }
  };
};
let properties;
export {
  atRules,
  cssCompletion,
  cssValues,
  getCSSProperties,
  pseudoClasses,
  pseudoElements
};
//# sourceMappingURL=index.js.map
