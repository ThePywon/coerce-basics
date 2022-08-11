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

* [**Any**](#any)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>
  
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# Any

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts all values but [`undefined`](https://javascript.info/types#the-undefined-value), [`null`](https://javascript.info/types#the-null-value) or [`NaN`](https://javascript.info/number#tests-isfinite-and-isnan) without applying any conversion

<br/>

**Syntax:** &nbsp; `new Any()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { Any } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new Any();

// Log result of conversion
console.log(validator.call("Any value"));
```

**Output:**

```
Any value
```

<br/>

**Code:**

```js
// Imports
const { Any } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new Any();

// Log result of conversion
console.log(validator.call(null));
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
const { StringType, IntRange, DateType, Any } = require("@protagonists/coerce-basics");

// Create schema 'Person'
const Person = new Schema({
  name: StringType,
  age: IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: DateType,
  friends: [StringType],
  otherInfo: Any
});

// Create object using 'Person' model
const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: [ "Steve", "Carl", "Meep" ],
  otherInfo: "Single"
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
  otherInfo: 'Single'
}
```

---

<br/><br/><br/>

# Methods

Some methods  inherited from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md) are not mentionned

<br/>

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
const { Any } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new Any().toString());
```

**Output:**

```
Any
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
