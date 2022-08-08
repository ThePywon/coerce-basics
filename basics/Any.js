"use strict";

const { SchemaType } = require("@protagonists/coerce");

class Any extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) { return val }
}
// Simple toString function override
Any.prototype.toString = function toString() { return "Any" }

// Export
module.exports = Any;
