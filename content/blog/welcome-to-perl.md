---
title: "Welcome to Perl"
date: 2025-03-28T00:00:00+00:00
description: "Discussion about the different stages of running a perl script."
type: post
image: images/blog/welcome-to-perl.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/slurp-in-perl" title="Slurp in Perl">
                <img src="/images/blog/slurp-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/scientist-in-perl" title="Scientist in Perl">
                <img src="/images/blog/scientist-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/extraction-in-perl" title="Text Extraction in Perl">
                <img src="/images/blog/extraction-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/subroutine-signatures" title="Subroutine Signatures in Perl">
                <img src="/images/blog/subroutine-signatures-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/perl-regex" title="Perl Regex">
                <img src="/images/blog/perl-regex-mini.png" class="img-fluid rounded-3 border border-3">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/read-large-file" title="Read Large File">
                <img src="/images/blog/read-large-file-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/random-in-perl" title="Random in Perl">
                <img src="/images/blog/random-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
    </div>
</div>

<br>

## Welcome to Perl
***

### [ &nbsp; 1. Introduction](#introduction)
### [ &nbsp; 2. The Shebang](#the-shebang)
### [ &nbsp; 3. Command Interpretation](#command-interpretation)
### [ &nbsp; 4. Interpreter Initialisation](#interpreter-initialisation)
### [ &nbsp; 5. File Handling](#file-handline)
### [ &nbsp; 6. Lexical Analysis](#lexical-analysis)
### [ &nbsp; 7. Bytecode Generation](#bytecode-generation)
### [ &nbsp; 8. Runtime Execution](#runtime-execution)
### [ &nbsp; 9. Output](#output)
### [10. Termination](#termination)
### [11. Returns Control](#returns-control)

<br>

## Introduction
***

Are you new to `Perl`?

If so, I'm pretty sure, you'd want to write your first `Hello World` program in `Perl`.

Here's what it looks like:

<br>

```perl
#!/usr/bin/perl

use v5.38;
say "Hello World!!";
```

<br>

To run the script, use the following commands:

<br>

```perl
$ chmod +x hello-world.pl
$ ./hello-world.pl
Hello World!!
```

<br>

## The Shebang
***

Let me explain the first line in the program, it is very important and plays an important role.

The line `#!/usr/bin/perl` at the beginning of a `Perl` script is called a `shebang` or `hashbang`.

What's the purpose of this line?

It tells the system which interpreter should execute the script.

When you run the script directly e.g. `./hello-world.pl`, the system reads this line and runs `/usr/bin/perl` to interpret the script.

Without it, the shell wouldn’t know whether the file is a `Perl` script, `Bash` script, or something else.

With this `shebang`, you can run the script directly:

<br>

```perl
$ ./hello-world.pl
Hello World!!
```

<br>

Instead of explicitly calling:

<br>

```perl
$ perl hello-world.pl
Hello World!!
```

<br>

The `shebang` also allows us to include command-line options:

<br>

```perl
a) Enables warning: #!/usr/bin/perl -w
b) Enables taint  : #!/usr/bin/perl -T
```

<br>

A better `shebang` i.e. `#!/usr/bin/env perl`.

Why use this?

Some systems may have `Perl` installed in a different locations, such as:

<br>

```perl
a) /usr/local/bin/perl
b) /opt/homebrew/bin/perl on macOS
```

<br>

Using this, `#!/usr/bin/env perl`, we let the `env` command to find `Perl` in the user’s `$PATH`, making the script more portable across different environments.

Thus, a script without a `shebang` must be executed explicitly:

The shebang is a crucial part of making `Perl` scripts self-executable.

<br>

```perl
$ perl hello-world.pl
Hello World!!
```

<br>

But with a `shebang`, you can simply run:

<br>

```perl
$ ./hello-world.pl
Hello World!!
```

<br>

The `shebang` is a crucial part of making `Perl` scripts self-executablle.

Ever wondered what happens when you run a `Perl` script?

Let's go through all the stages before you see the message: `Hello World!!`

<br>

## Command Interpretation
***

The shell parses the command `perl hello-world.pl`.

It checks if `perl` is a valid command by looking it up in the `$PATH` environment variable.

After that, the shell prepares to execute the `Perl` interpreter.

<br>

## Interpreter Initialisation
***

The `Perl` interpreter (`perl`) is loaded into memory.

It initialises its runtime environment, including:

<br>

```perl
a) Setting up memory management.
b) Loading core Perl modules.
c) Parsing command-line arguments, if any.
```

<br>

## File Handling
***

`Perl` opens and reads the file `hello-world.pl`.

If the file doesn’t exist, `Perl` throws an error e.g. `Can't open perl script "hello-world.pl": No such file or directory` and the process stops.

<br>

## Lexical Analysis
***

The source code is broken into tokens.

For example: `say "Hello World!!";` is tokenized into:

<br>

```perl
a) say (built-in function),
b) "Hello World!!" (string literal),
c) ; (statement terminator).
```

<br>

## Bytecode Generation
***

The tokens are parsed into an `Abstract Syntax Tree (AST)`.

`Perl` then checks syntax.

If there are syntax errors, `Perl` reports them and exits.

If successful, `Perl` generates bytecode.

<br>

## Runtime Execution
***

The compiled bytecode is executed line by line:

<br>

```perl
a) Variables are initialized.
b) Functions (e.g., say) are called.
c) System calls (if any) are executed.
d) External modules (if loaded via use or require) are initialized.
```

<br>

## Output
***

Any output from `print`, `say`, or other `I/O` functions is sent to:

<br>

```perl
a) Standard output i.e. STDOUT.
b) Standard error i.e. STDERR.
```

<br>

Buffering may delay output until a newline or buffer flush.

<br>

## Termination
***

The script exits when:

<br>

```perl
a) It reaches the end of the file.
b) An explicit exit or die is encountered.
```

<br>

`Perl` then performs cleanup:

<br>

```perl
a) Closes open file handles.
b) Calls END blocks, if defined.
```

<br>

The interpreter releases memory and exits.

<br>

## Returns Control
***

The shell regains control after `Perl` exits.

The script’s output, if any, is displayed in the terminal.

The shell prompt reappears, waiting for the next command.

<br>

***

`Happy Hacking!!`
