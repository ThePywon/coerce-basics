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

* [**DateType**](#datetype)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



<a id="datetype"></a>

# DateType

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts all valid [`Date`](https://javascript.info/date)  
It tries to convert everything into a valid date

<br/>

**Syntax:** &nbsp; `new DateType()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { DateType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new DateType();

// Log result of call()
console.log(validator.call(new Date("2020")));
```

**Output:**

```
2020-01-01T00:00:00.000Z
```

<br/>

**Code:**

```js
// Imports
const { DateType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new DateType();

// Log result of call()
console.log(validator.call("2020"));
```

**Output:**

```
2020-01-01T00:00:00.000Z
```

<br/>

**Code:**

```js
// Imports
const { DateType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new DateType();

// Log result of call()
console.log(validator.call("Invalid date"));
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
const { StringType, IntRange, DateType } = require("@protagonists/coerce-basics");

// Create schema 'Person'
const Person = new Schema({
  name: StringType,
  age: IntRange(0, Number.MAX_SAFE_INTEGER),
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

The function called to convert and/or validate a value to [`Date`](https://javascript.info/date)

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**Date**](https://javascript.info/date)

<br/>

### **Example**

**Code:**

```js
// Imports
const { DateType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new DateType();

// Log result of call()
console.log(validator.call("1984-02-23"));
```

**Output:**

```
1984-02-23T00:00:00.000Z
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
const { DateType } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new DateType().toString());
```

**Output:**

```
Date
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
