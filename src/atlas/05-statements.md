---
title: Statements
order: 5
description: Statements in Aera.
---

Variables in Aera are named values that are immutable by default, with optional type declarations.

## Declaration

Variables are declared in Aera using the `let` keyword. 

```aera
let num: int32 = 5 # immutable, CANNOT be changed once assigned
num = 4 # NOT allowed
```

Variables are immutable by default in Aera. This means that once a variable has been assigned, the value stored at its memory location cannot be changed.

## Mutability

To make a variable mutable, the `mut` keyword must be used after the `let` keyword.

```aera
let mut num: int32 = 5 # mutable, CAN be changed once assigned
num = 4 # NOW allowed
```

## Scope

Aera uses lexical (block) scope. A variable is only accessible within the block ({ … }) in which it is declared.

### Shadowing

A local variable can shadow a variable from an outer scope:

```aera
let x: int32 = 5
{
    let x: int32 = 10  # shadows outer x
    println(x)         # prints 10
}
println(x)             # prints 5
```

### Lifetime

Variables are typically created when their block is entered and destroyed when the block exits.

## Naming Conventions

Variables in Aera must start with a letter (`a–z` or `A–Z`) or underscore (`_`), followed by any alphanumeric character or underscore.

The reserved words in Aera are:
`fn, let, mut, const, pub, if, else, for, while, loop, match, break, return, module, use, struct, variant, in, as`

These words **cannot** be used as variable names.

> **Note**
>
> This may change in future releases.

Variable names are recommended to use `snake_case` to follow Aera’s style.

## Initialization

In Aera, a variable must be initialized at the time of declaration:

```aera
let x: int32             # valid, type declared but no initial value
let y = 0                # valid, type inferred from expression
let z: float64 = 3.14    # valid, explicit type and initialization
```

If a variable is **declared without an initializer**, it will result in a **compilation error**.

## Type Annotations

Variables can have explicit types or rely on type inference.

```aera
let num: int32 = 5   # explicit type
let num2 = 10        # type inferred
```
