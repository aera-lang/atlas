---
title: Introduction
order: 0
description: About the Aera language.
---

Aera is an expression-oriented programming language designed with clarity and simplicity in mind. Its goal is to be a suitable alternative language for developing interactive applications (i.e., games and graphical interfaces).

## Motivation

In these spaces, programmers tend to reach for system-level languages like C++ and C. These languages are performant, but that performance comes at the cost of safety and usability.

Modern languages like Rust and Zig fix many of C++ and C's shortcomings, but introduce their own complexity, like borrow checking and explicit allocators. These features make it harder to express ideas as code without fighting the language first.

Other languages used in these spaces, like C# and Lua, trade performance for simplicity. C# in particular forces you into an inheritance-based object model, even when the problem you're solving doesn't fit into classes and hierarchies.

Odin and Jai have gained traction in the last couple of years, but they're still verbose, and closer to alternatives for C++ and C than to C# or Lua.

So where's the alternative to C# or Lua? A language simple enough to be expressive, structured enough to build systems that last, and clear enough that what you write is what you get.

That language is Aera. 

## Why Aera?

### Expression-oriented
- Everything is an expression. 
- Code evaluates to values, including control flow.

### Algebraic effects
- Effects separate what your code does from how it's handled.
- They resume where they're raised, unlike exceptions, which unwind the stack.

### Effect system
- Side effects, like I/O and mutation, are visible in a function's signature.
- Nothing hides state behind an innocent-looking call.

### Transparent by design
- Behaviour is visible, not hidden.
- Explicit over implicit.

> **Note**
>
> Note that documentation may not reflect the current state of the language, as the language is still evolving.