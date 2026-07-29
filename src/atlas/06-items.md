---
title: Items
order: 6
description: Items in Aera
---

Items are declarations that introduce names into a module. They define thetop-level components of a program, such as functions, types, constants, and other declarations.

## Functions

Functions are defined using the `fn` keyword. 

```aera
# function syntax
fn function_name(param1: type, param2: type) -> return_type {
    function block
}

# example of a simple function
fn count(n: int32) -> unit { # unit type returns nothing
    for i in 0..n {
        println(i)
    }
}
```

Functions are first-class constructs in Aera, meaning they can be passed like any other value:

```aera
fn greet(name: string) -> string {
    "Hello, " + name + "!"
}

print(greet("Annie")) # output: Hello, Annie!
```

### Main

Aera provides the `main` function which represents the entry point for code execution.

```aera
fn main() {
    println("Hello world!") # implictly returns the unit type ()
}
```

### Recursion

Aera supports recursion, allowing functions to call themselves.

```aera
fn factorial(n: int32) -> int32 {
    if n <= 1 {
        1 
    } 
    else {
        n * factorial(n - 1)
    }               
}
```

## Const

A const item is similar to a let statement, with the difference being that the value is known at compile time.

To declare a const item, you use the `const` keyword:

```aera
const PI: float64 = 3.14
```

Const items are immutable, you cannot use the `mut` keyword on them, or it will result in a compilation error.

## Module

A module declaration defines the name of the current module.

### Syntax

```aera
module Name
```

### Notes

- A module can only have one module declaration.
- The module name must be unique within the program.

## Use

A use declaration makes names from another module available in the current module.

### Syntax

```aera
use module
```

## Struct

A struct declaration introduces a new struct type into the current module.

### Syntax

```aera
struct Name {
    field: Type
    field: Type
}
```

## Variant

A variant declaration introduces a new variant type and its constructors into the current module.

### Syntax

```aera
variant Name {
    Constructor
    Constructor(Type)
    Constructor(field: Type)
}
```