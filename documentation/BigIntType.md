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

* [**BigIntType**](#biginttype)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# BigIntType

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts all valid [`BigInt`](https://javascript.info/types#bigint-type)  
It tries to convert everything else into a [`BigInt`](https://javascript.info/types#bigint-type)

<br/>

**Syntax:** &nbsp; `new BigIntType()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { BigIntType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BigIntType();

// Log result of call()
console.log(validator.call(123456789012345678901234567890n));
```

**Output:**

```
123456789012345678901234567890n
```

<br/>

**Code:**

```js
// Imports
const { BigIntType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BigIntType();

// Log result of call()
console.log(validator.call(12));
```

**Output:**

```
12n
```

<br/>

**Code:**

```js
// Imports
const { BigIntType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BigIntType();

// Log result of call()
console.log(validator.call("69 haha funny number"));
```

**Output:**

```
69n
```

<br/>

**Code:**

```js
// Imports
const { BigIntType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BigIntType();

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
const { StringType, IntRange, DateType, BigIntType } = require("@protagonists/coerce-basics");

// Create schema 'Person'
const Person = new Schema({
  name: StringType,
  age: IntRange(0, 200),
  birthday: DateType,
  friends: [StringType],
  ID: BigIntType
});

// Create object with 'Person' model
const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: [ "Steve", "Carl", "Meep" ],
  ID: 9817265120564739
});

// Log result of conversion
console.log(John);
```

**Ouput:**

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carla', 'Meep' ],
  ID: 9817265120564739n
}
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
const { BigIntType } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new BigIntType();

// Log result of call()
console.log(validator.call(1234456789012345678901234567890));
```

**Output:**

```
123456789012345678901234567890n
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
const { BigIntType } = require("@protagonists/coerce-basics");

// Log SchemaType instance's toString() result
console.log(new BigIntType().toString());
```

**Output:**

```
BigInt
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
