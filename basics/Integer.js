"use strict";

// Import
const NumberType = require("./NumberType");

// Integer class definition
class Integer extends NumberType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    val = super.call(val);

    if(val === undefined) return;
      
    return Number.isInteger(val) ? val : parseInt(val);
  }
}
// Simple toString function override
Integer.prototype.toString = function toString() { return "Integer" }

// Export
module.exports = Integer;
