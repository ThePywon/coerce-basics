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

* [**BigIntRangeInstance**](#bigintrangeinstance)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# BigIntRangeInstance

A class returned from [`BigIntRange`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/BigIntRange.md)  
it accepts and converts all values [`BigIntRange`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/BigIntRange.md) can parse that are within a defined range (inclusive)

<br/>

**Syntax:** &nbsp; `new BigIntRangeInstance()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { BigIntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (BigIntRange(0, 5));

// Log result of call()
console.log(validator.call(123456789012345678901234567890n));
```

**Output:**

```
undefined
```

<br/>

```js
// Imports
const { BigIntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (BigIntRange(0, 5));

// Log result of call()
console.log(validator.call(4));
```

**Output:**

```
4n
```

<br/>

```js
// Imports
const { BigIntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (BigIntRange(0, 5));

// Log result of call()
console.log(validator.call("5 is within the range yes"));
```

**Output:**

```
5n
```

<br/>

```js
// Imports
const { BigIntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (BigIntRange(0, 5));

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

The function called to convert and/or validate a value to [`BigInt`](https://javascript.info/types#bigint-type)

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**BigInt**](https://javascript.info/types#bigint-type)

<br/>

### **Example**

**Code:**

```js
// Imports
const { BigIntRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (BigIntRange(0, 5));

// Log result of call()
console.log(validator.call(4));
```

**Output:**

```
4n
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
const { BigIntRange } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new (BigIntRange(0, 5)).toString());
```

**Output:**

```
BigIntRange
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
