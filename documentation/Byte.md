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

* [**Byte**](#byte)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# Byte

A [`IntRangeInstance`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/IntRangeInstance.md) class with a range of 0 to 255 (inclusive)  
It accepts and converts all values [`Integer`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/Integer.md) can parse that are within a defined range of 0 to 255 (inclusive)


<br/>

**Syntax:** &nbsp; `new Byte()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { Byte } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new Byte();

// Log result of call()
console.log(validator.call(12));
```

**Output:**

```
12
```

<br/>

**Code:**

```js
// Imports
const { Byte } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new Byte();

// Log result of call()
console.log(validator.call("69 haha funny number"));
```

**Output:**

```
69
```

<br/>

**Code:**

```js
// Imports
const { Byte } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new Byte();

// Log result of call()
console.log(validator.call(999));
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
const favColor = Color({
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

Some methods from this class are inherited from [`IntRange`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/IntRange.md)  
Check it out for more info on this class's methods

<br/>

### **Example**

**Code:**

```js
// Imports
const { Byte } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new Byte();

// Log result of call()
console.log(validator.call("55"));
```

**Output:**

```
55
```

<br/><br/>

<a id="tostring"></a>

## `.toString` &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)

A function used to convert this object into a string format

<br/>

**Syntax:** &nbsp; `toString()`

<br/>

**Returns:** &nbsp; [**String**](https://javascript.info/string)

<br/>

### **Example**

**Code:**

```js
// Imports
const { Byte } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new Byte().toString());
```

**Output:**

```
Byte
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
