<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/coerce">coerce-basics</a></h1>
 
[![npm version](https://img.shields.io/npm/v/@protagonists/coerce-basics)](https://npmjs.com/package/@protagonists/coerce-basics)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/coerce-basics)](https://npmjs.com/package/@protagonists/coerce-basics)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/coerce-basics)](https://github.com/ThePywon/coerce-basics)
 
</div>


# About

A package to get you started with [`@protagonists/coerce`](https://www.npmjs.com/package/@protagonists/coerce)!

---

<br/><br/><br/>


# Table of content

* [**RangeInstance**](#rangeinstance)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# RangeInstance

A class returned from [`Range`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/Range.md)  
it accepts and converts all values [`NumberType`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/NumberType.md) can parse that are within a defined range (inclusive)

<br/>

**Syntax:** &nbsp; `new RangeInstance()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { Range } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (Range(0, 5));

// Log result of call()
console.log(validator.call(1234567890));
```

**Output:**

```
undefined
```

<br/>

```js
// Imports
const { Range } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (Range(0, 5));

// Log result of call()
console.log(validator.call(4.451));
```

**Output:**

```
4.451
```

<br/>

```js
// Imports
const { Range } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (Range(0, 5));

// Log result of call()
console.log(validator.call("5 is within the range yes"));
```

**Output:**

```
5
```

<br/>

```js
// Imports
const { Range } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (IntRange(0, 5));

// Log result of call()
console.log(validator.call({ "This is": "an object" }));
```

**Output:**

```
undefined
```

<br/>

**Code:**

```js
// Imports
const { Schema } = require("@protagonists/coerce");
const { StringType, Byte, Range } = require("@protagonists/coerce-basics");

// Create schema 'Color'
const Color = new Schema({
  name: StringType,
  red: Byte,
  green: Byte,
  blue: Byte,
  alpha: Range(0, 1)
});

// Coerce object with schema
const favColor = Person({
  name: "Blue",
  red: 0,
  green: 128,
  blue: 255,
  alpha: 1
});

// Log result
console.log(favColor);
```

**Ouput:**

```
{ name: 'Blue', red: 0, green: 128, blue: 255, alpha: 1 }
```

---

<br/><br/><br/>

# Methods

<br/>

## `.call`

The function called to convert a value into a [`Number`](https://javascript.info/number) and/or validate a value

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**Number**](https://javascript.info/number)

<br/>

### **Example**

**Code:**

```js
// Imports
const { Range } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (Range(0, 5));

// Log result of call()
console.log(validator.call(4.15));
```

**Output:**

```
4.15
```

<br/><br/>

<a id="tostring"></a>

## `.toString` &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)

A function used to convert this object into a string format

<br/>

**Syntax:** &nbsp; `.toString()`

<br/>

**Returns:** &nbsp; [**String**](https://javascript.info/string)

<br/>

### **Example**

**Code:**

```js
// Imports
const { Range } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new (Range(0, 5)).toString());
```

**Output:**

```
Range
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
