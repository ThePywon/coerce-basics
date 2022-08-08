"use strict";

// Import
const { SchemaType } = require("@protagonists/coerce");

// BooleanType class definition
class BooleanType extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) { return val === undefined ? undefined : !!val }
}
// Simple toString function override
BooleanType.prototype.toString = function toString() { return "Boolean" }

// Export
module.exports = BooleanType;
