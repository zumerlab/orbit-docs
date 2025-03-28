import { l as languages } from "../../index-bkac8M6P.js";
import { e as extend, i as insertBefore } from "../../language-DPYOfXzt.js";
import "./clike.js";
var sol = languages.sol = languages.solidity = extend("clike", {
  "class-name": {
    pattern: /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[$\w]+/,
    lookbehind: true
  },
  "keyword": /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
  "operator": /=>|->|:=|=:|--|\+\+|\*\*|&&|\|\||>>=?|<<=?|[%&|^!=<>/*+-]=?|[~?]/
});
insertBefore(sol, "keyword", {
  "builtin": /\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
});
insertBefore(sol, "number", {
  "version": {
    pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/,
    lookbehind: true,
    alias: "number"
  }
});
//# sourceMappingURL=solidity.js.map
