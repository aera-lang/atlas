---
title: Getting Started
order: 1
description: Your first Aera program.
---

This guide walks you through installing Aera and running your first program in the REPL.

## Installation

Aera is early in development. Currently, only the REPL is stable. There are two ways to get it running.

### Build from Source
Clone the repo and build it with `make`:

```bash
git clone https://github.com/aera-lang/aera.git
cd aera
make run
```

This builds and launches the REPL. 

> **Note**
>
> There's also make interpret FILE=path/to/file.aera, but the interpreter path is far less stable. You can use it, but expect things not to work perfectly.

### Prebuilt Binary (Windows only)
Prebuilt binaries are available on the [Releases](https://github.com/aera-lang/aera/releases) page. For now, only a Windows binary is provided, so macOS/Linux users should build from source.

Download `aera.exe`, then run it directly:

```bash
./aera.exe
```

Or double-click it in File Explorer.

## Verifying the Installation
Once running, you should see the REPL prompt:

```text
Welcome to Aera 0.0.1
Type 'quit' to exit.

~>
```

## Your First Program
Since only the REPL is stable right now, try Hello World directly in it:

```aera
Welcome to Aera 0.0.1
Type 'quit' to exit.

~> "hello world"
"hello world"
```