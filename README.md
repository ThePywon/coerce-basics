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

* [**How to use?**](#how-to-use)

> The content below may not correspond to the structure of the objects

* [**`Any`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/Any.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`BigIntType`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/BigIntType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`BitIntRange`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/BigIntRange.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**BitIntRangeInstance**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/BigIntRangeInstance.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`BooleanType`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/BooleanType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`Byte`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/Byte.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`DateType`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/DateType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`DateRange`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/DateRange.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**DateRangeInstance**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/DateRangeInstance.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`Function`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/FunctionType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`Integer`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/Integer.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`IntRange`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/IntRange.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**IntRangeInstance**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/IntRangeInstance.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`Number`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/NumberType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`Range`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/Range.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**RangeInstance**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/RangeInstance.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`RegExpType`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/RegExpType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)
* [**`StringType`**](https://github.com/ThePywon/coerce-basics/blob/main/documentation/StringType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)

---

<br/><br/><br/>

# How to use?

## Description

This package contains a few basic SchemaTypes that try to stay consistent with javascript's existing type conversion  
Those are meant to be an easy way to start using [`@protagonists/coerce`](https://www.npmjs.com/package/@protagonists/coerce)  
All of them of course extends from the [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md) object

<br/>

## Import

### Terminal

> ```sh
> npm install @protagonists/coerce-basics
> ```

<br/>

### Node.js

> ```js
> const Basics = require("@protagonists/coerce-basics");
> ```

<br/>

## Example

### Code:

```js
// Imports
const { Schema } = require("@protagonists/coerce");
const { StringType, IntRange, DateType } = require("@protagonists/coerce-basics");

// Create schema 'Person'
const Person = new Schema({
  name: StringType,
  age: IntRange(0, 200),
  birthday: DateType,
  friends: [StringType]
});

// Coerce object into following the model
const John = new Person({
  name: "John",
  favColor: "Red",
  friends: ["Steve", "Carla", "Meep"],
  kids: 2,
  birthday: "1984",
  age: 37
});

// Log the result
console.log(John);
```

<br/>

### Output:

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carla', 'Meep' ]
}
```

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
