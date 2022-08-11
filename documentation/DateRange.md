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



# DateRange

A function that return a class extending from [`DateType`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/DateType.md)  
The returned class accepts and converts all values [`DateType`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/DateType.md) can parse that are within a defined range (inclusive)

<br/>

**Syntax:** &nbsp; `DateRange(min, max)`

|**Parameters**|**Types**|
|-|-|
|`min`|Any|
|`max`|Any|

> Accepted values are all the values [`DateType`](https://github.com/ThePywon/coerce-basics/blob/main/documentation/DateType.md) can parse  
> `min` must be equal or smaller than `max`

<br/>

**Returns:** &nbsp; [**DateRangeInstance**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/DateRangeInstance.md)

<br/>

### **Example**

**Code:**

```js
// Imports
const { DateRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (DateRange("1890", "2000"));

// Log result of call()
console.log(validator.call("1893"));
```

**Output:**

```
1893-01-01T00:00:00.000Z
```

<br/>

```js
// Imports
const { DateRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (DateRange("1890", "2000"));

// Log result of call()
console.log(validator.call(new Date("1899")));
```

**Output:**

```
1899-01-01T00:00:00.000Z
```

<br/>

```js
// Imports
const { DateRange } = require("@protagonists/coerce-basics");

// Create SchemaType instance
const validator = new (DateRange("1890", "2000"));

// Log result of call()
console.log(validator.call(new Date("2015")));
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
const { StringType, IntRange, DateRange } = require("@protagonists/coerce-basics");

// Create schema 'Person'
const Person = new Schema({
  name: StringType,
  age: IntRange(0, 200),
  birthday: DateRange("1900", new Date()),
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

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
