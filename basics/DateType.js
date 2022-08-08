"use strict";

// Import
const { SchemaType } = require("@protagonists/coerce");

// DateType class definition
class DateType extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    const result = new Date(val);
    if(!isNaN(result))
      return result;
  }
}
// Simple toString function override
DateType.prototype.toString = function toString() { return "Date" }

// Export
module.exports = DateType;
