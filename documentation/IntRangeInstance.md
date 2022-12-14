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

* [**IntRangeInstance**](#intrangeinstance)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# IntRangeInstance

A class returned from [`IntRange`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/IntRange.md)  
it accepts and converts all values [`Integer`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/Integer.md) can parse that are within a defined range (inclusive)

<br/>

**Syntax:** &nbsp; `new IntRangeInstance()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { IntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (IntRange(0, 5));

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
const { IntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (IntRange(0, 5));

// Log result of call()
console.log(validator.call(4));
```

**Output:**

```
4
```

<br/>

```js
// Imports
const { IntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (IntRange(0, 5));

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
const { IntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (IntRange(0, 5));

// Log result of call()
console.log(validator.call({ "This is": "an object" }));
```

**Output:**

```
undefined
```

---

<br/><br/><br/>

# Methods

<br/>

## `.call`

The function called to convert and/or validate a value into a [`Number`](https://javascript.info/number) with no floating point

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
const { IntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (IntRange(0, 5));

// Log result of call()
console.log(validator.call(4));
```

**Output:**

```
4
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
const { IntRange } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new (IntRange(0, 5)).toString());
```

**Output:**

```
IntRange
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
