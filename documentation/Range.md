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



# Range

A function that return a class extending from [`NumberType`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/NumberType.md)  
The returned class accepts and converts all values [`NumberType`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/NumberType.md) can parse that are within a defined range (inclusive)

<br/>

**Syntax:** &nbsp; `Range(min, max)`

|**Parameters**|**Types**|
|-|-|
|`min`|Any|
|`max`|Any|

> Accepted values are all the values [`NumberType`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/NumberType.md) can parse  
> `min` must be equal or smaller than `max`

<br/>

**Returns:** &nbsp; [**RangeInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/RangeInstance.md)

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

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
