import { l as languages } from "../../index-bkac8M6P.js";
languages.brainfuck = {
  "pointer": {
    pattern: /<|>/,
    alias: "keyword"
  },
  "increment": {
    pattern: /\+/,
    alias: "inserted"
  },
  "decrement": {
    pattern: /-/,
    alias: "deleted"
  },
  "branching": {
    pattern: /[[\]]/,
    alias: "important"
  },
  "operator": /[.,]/,
  "comment": /\S+/
};
//# sourceMappingURL=brainfuck.js.map
