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

* [**NumberType**](#numbertype)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# NumberType

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts all valid [`Number`](https://javascript.info/number)   
It tries to convert anything else into one

<br/>

**Syntax:** &nbsp; `new NumberType()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { NumberType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new NumberType();

// Log result of call()
console.log(validator.call(12.56));
```

**Output:**

```
12.56
```

<br/>

**Code:**

```js
// Imports
const { NumberType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new NumberType();

// Log result of call()
console.log(validator.call(-24));
```

**Output:**

```
-24
```

<br/>

**Code:**

```js
// Imports
const { NumberType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new NumberType();

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
const { NumberType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new NumberType();

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
const { StringType, Integer, NumberType } = require("@protagonists/coerce-basics");

// Create schema 'Country'
const Country = new Schema({
  name: StringType,
  cities: Integer,
  avgPopulation: NumberType
});

// Coerce object with schema
const someFictionnalPlace = Country({
  name: "somewhere",
  cities: 5,
  avgPopulation 37857.125
});

// Log result of call()
console.log(someFictionnalPlace);
```

**Ouput:**

```
{
  name: 'somewhere',
  cities: 5,
  avgPopulation: 37857.125
}
```

---

<br/><br/><br/>

# Methods

<br/>

## `.call`

The function called to convert and/or validate a value to [`Number`](https://javascript.info/number)

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
const { NumberType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new NumberType();

// Log result of call()
console.log(validator.call(-34.235));
```

**Output:**

```
-34.235
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
const { NumberType } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new NumberType().toString());
```

**Output:**

```
Number
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
