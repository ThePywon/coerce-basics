"use strict";

// Import
const { SchemaType } = require("@protagonists/coerce");
const util = require("util");

// FunctionType class definition
class FunctionType extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    if(typeof val === "function") {
      if(!util.inspect((val.prototype||val)
         .constructor).startsWith("[class"))
        return val;
    }
  }
}
// Simple toString function override
FunctionType.prototype.toString = function toString() { return "Function" }

// Export
module.exports = FunctionType;
