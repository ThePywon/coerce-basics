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

* [**BooleanType**](#booleantype)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# BooleanType

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts all values but [`undefined`](https://javascript.info/types#the-undefined-value), [`null`](https://javascript.info/types#the-null-value) or [`NaN`](https://javascript.info/number#tests-isfinite-and-isnan)  
It converts everything into a [`Boolean`](https://javascript.info/types#boolean-logical-type) using the default javascript conversion system

<br/>

**Syntax:** &nbsp; `new BooleanType()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { BooleanType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BooleanType();

// Log result of call()
console.log(validator.call(null));
```

**Output:**

```
false
```

<br/>

**Code:**

```js
// Imports
const { BooleanType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BooleanType();

// Log result of call()
console.log(validator.call(12));
```

**Output:**

```
true
```

<br/>

**Code:**

```js
// Imports
const { BooleanType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BooleanType();

// Log result of call()
console.log(validator.call( {} ));
```

**Output:**

```
true
```

<br/>

**Code:**

```js
// Imports
const { BooleanType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BooleanType();

// Log result of call()
console.log(validator.call(""));
```

**Output:**

```
false
```

<br/>

**Code:**

```js
// Imports
const { Schema } = require("@protagonists/coerce");
const { StringType, IntRange, DateType, BooleanType } = require("@protagonists/coerce-basics");

// Create schema 'Person'
const Person = new Schema({
  name: StringType,
  age: IntRange(0, 200),
  birthday: DateType,
  friends: [StringType],
  male: BooleanType
});

// Create object with 'Person' model
const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: [ "Steve", "Carl", "Meep" ],
  male: "yes"
});

// Log result
console.log(John);
```

**Ouput:**

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carla', 'Meep' ],
  male: true
}
```

---

<br/><br/><br/>

# Methods

<br/>

## `.call`

The function called to convert any value into a [`Boolean`](https://javascript.info/types#boolean-logical-type)

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**Boolean**](https://javascript.info/types#boolean-logical-type)

<br/>

### **Example**

**Code:**

```js
// Imports
const { BooleanType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BooleanType();

// Log result of call()
console.log(validator.call("A truthy value"));
```

**Output:**

```
true
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
const { BooleanType } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new BooleanType().toString());
```

**Output:**

```
Boolean
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
