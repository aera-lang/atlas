---
title: Modules
order: 7
description: Modules in Aera
---

A module, at its simplest, is a file. The name of the module is the name of the file minus the extension:

```aera
person.aera # is the Person module
```

> **Note**
>
> Renaming a file changes its module name, and will break every local importer. Eventually, Aera will have an LSP which will rewrite all call sites automatically, but for now, this is an accepted trade-off that will make development simpler.


## Using Modules

The `use` keyword allows you to import a module:

```aera
use std/io

fn greet(name: string) { 
    io::println(name)
}
```
### Module Paths

`/` walks from the package root through directories to locate a module's entry point.

> **Note**
>
> This is NOT virtual, it always corresponds to an actual file on disk.

### Accessing Items

`::` is the access operator in Aera and allows you to reach into a module to grab item(s). For example:

```aera
use std/io::{print}

fn greet(name: string) { 
    print(name)
}
```

This grabs the `print` function from `io`, which is part of the standard library.

## Organzing Modules

Aera uses sibling entry files to organize its data as opposed to folders. Using the above example, say we organized the library like so:

```
src/
└── math/
    └── vector.aera
```
For the math folder, we would have a file with the name corresponding to the folder. In this case, it would be math.aera:

```
src/
├── math.aera
└── math/
    └── vector.aera
```
And in math.aera:

```aera
module math
pub use vector::{abs, dot}
```

This allows you to see a folder's public surface without having to open it.

While the `/` operator corresponds to an actual file on disk to locate a modules entry point, the public path stays stable across reorganization as entry files re-export the declared module name rather than by internal file location.

## No Nested Modules

You can't declare a module inside of another module:

```aera
# Not allowed
module name1 {
    module name2 { ... }
}
```

Nesting modules like this tends to invite the same over-engineering that OOP-style namespacing encourages. Aera's sibling entry file pattern (see [Organizing Modules](#organizing-modules)) already gives you a way to structure larger modules without needing nested declarations to do it.