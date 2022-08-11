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

* [**StringType**](#stringtype)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# StringType

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts all [`String`](https://javascript.info/string) and tries to convert everything else into one

<br/>

**Syntax:** &nbsp; `new StringType()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { StringType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new StringType();

// Log result of call()
console.log(validator.call("Hello World!"));
```

**Output:**

```
Hello World!
```

<br/>

**Code:**

```js
// Imports
const { StringType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new StringType();

// Create a random object
const obj = { "ThisIs": "AnObject" };
obj.toString = function toString() { return "Hello World!" };

// Log result of call()
console.log(validator.call(obj));
```

**Output:**

```
Hello World!
```

<br/>

**Code:**

```js
// Imports
const { Schema } = require("@protagonists/coerce");
const { StringType, IntRange, DateType } = require("@protagonists/coerce-basics");

// Create schema 'Person'
const Person = new Schema({
  name: StringType
  age: IntRange(0, 200),
  birthday: DateType,  
  friends: [StringType]
});

// Coerce object with schema
const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: [ "Steve", "Carl", "Meep" ]
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
  friends: [ 'Steve', 'Carla', 'Meep' ]
}
```

---

<br/><br/><br/>

# Methods

<br/>

## `.call`

The function called to convert and/or validate any value to [`String`](https://javascript.info/string)

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**Function**](https://javascript.info/function-basics)

<br/>

### **Example**

**Code:**

```js
// Imports
const { StringType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new StringType();

// Log result of call()
console.log(validator.call("Some String"));
```

**Output:**

```
Some String
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
const { StringType } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new StringType().toString());
```

**Output:**

```
String
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
