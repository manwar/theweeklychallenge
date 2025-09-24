---
title: "Perl: Unary Operator"
date: 2025-09-24T00:00:00+00:00
description: "Discussion about the unary operator in Perl."
type: post
image: images/blog/unary-operator.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

The unary `+` operator in `Perl` has a very specific and important purpose but it's quite different from it's behavior in languages like `JavaScript`.

In `Perl`, it's not a numeric conversion operator.

It's primary technical aspect is `context disambiguation`.

<br>

### **Enforcing Scalar Context**

<br>

`Perl` has a fundamental concept of context: `scalar context` and `list context`.

The result of an operation can change dramatically depending on the context it's evaluated in.

The unary `+` operator is used to force an `expression` to be interpreted in `scalar context`.

This is most commonly needed when you have a function or an operator that expects a scalar argument but the argument you're providing is ambiguous and could be interpreted as a list.

This is the most frequent use case for unary `+` operator in `Modern Perl` code.

<br>

```perl
my %hash = ( key => 'value' );
```

<br>

Now if we do this, then `{...}` is interpreted as an anonymous hash reference constructor and creates a key named `'HASH(0x...)'`.

<br>

```perl
$hash{shift} = 'new_value';
```

<br>

However, using unary `+` operator forces the contents of `{...}` to be evaluated in `scalar context`.

This tells `Perl` that `{...}` is a code block whose result is the key.

<br>

### **Why is this necessary?**

<br>

The `{...}` after a `$` sigil (`$hash{...}`) is ambiguous. It can be either:

<br>

```
a) A block returning an expression for the key (scalar context wanted).
b) An anonymous hash reference constructor e.g. $var = { a => 1 }.
```

<br>

The unary `+` resolves the ambiguity by signaling that what follows is an `expression`, not a `hash reference`.

<br>

```perl
use Data::Dumper;

sub bad {
    my %hash;
    $hash{ shift } = 'value';   # Ambiguous
    return \%hash;
}

sub good {
    my %hash;
    $hash{ +shift } = 'value';  # Unambiguous
    return \%hash;
}

print Dumper(bad('key'));       # { 'shift' => 'value' };
print Dumper(good('key'));      # { 'key'   => 'value' };
```

<br>

### **What unary + operator is NOT in Perl?**

<br>

It's critical to understand that `Perl`'s unary `+` operator does not convert data types.

<br>

```
a) It does not convert a string to a number.
b) It does not have any mathematical effect on numbers.
```

<br>

```perl
my $string = "123abc";
my $number = +$string;     # This does NOT convert the string to 123!
print $number;             # Still prints "123abc"

my $num = 5;
my $result = +$num;        # $result is just 5. The + is a no-op here.
```

<br>

If you need to convert a string to a number, you would typically just use the string in a `numeric context` (like a mathematical operation) and `Perl` will do the conversion for you.

<br>

```perl
my $string = "123abc";
my $number = 0 + $string;  # Numeric context
print $number;             # Now prints "123"
```

<br>

### **Ambiguous blocks with map**

<br>

The `map` function takes either a block `{...}` or an `expression`.

The parser has to figure out which one you're using.

<br>

```perl
map { $_ * 2 } @array;     # the braces are a block for map
```

<br>

This is also clear - no braces, just an `expression`.

<br>

```perl
map $_ * 2, @array;        # no braces, just an expression
```

<br>

The ambiguity arises when you want to use a `complex expression` that includes `a dereference` or another `block`.

<br>

### **More Examples**

<br>

```perl
my @nums = (1, 2, 3);

my @wrong = map  ($_ => $_ * 2), @nums;    # ('0')
my @right = map +($_ => $_ * 2), @nums;    # [(1,2,2,4,3,6)
```

<br>

The `map ($_ => $_ * 2), @nums` is parsed differently than you might expect.

In **Perl**, `map EXPR, LIST` expects a single expression.

The parentheses here `( $_ => $_ * 2 )` don’t behave as a `list`.

Instead, `Perl` interprets it as the first element of `map` being a void context, which evaluates to `0`.

Whereas in `map +($_ => $_ * 2), @nums`, the unary `+` operator forces the parentheses to be treated as a `list expression` not a `block` or `ambiguous expression`.

Now `map` sees the correct list `($_ => $_ * 2)` for each element of `@nums`.

Here's one more example:

<br>

```perl
my @names = ('Joe','Blog');

my @refs_block = map {{ name => $_ }} @names;   # ({'name' => 'Joe'}, {'name' => 'Blog'})
my @refs_plus  = map +{ name => $_ }, @names;   # ({'name' => 'Joe'}, {'name' => 'Blog'})
```

<br>

The unary `+` operator applies to what follows immediately, it's saying `"treat the next token as the start of an expression"`

It's purely syntactic at runtime, the unary `+` operator has no effect on the value.

<br>

```perl
my $href = +{ key => 'value' };  # Same as { key => 'value' }
```

<br>

This pattern appears with other functions that take `blocks` or `expressions`, like `grep`.

<br>

```perl
grep +{ $_->{active} }->{value}, @users;
```

<br>

If your expression doesn't contain `ambiguous braces` then you don't need the unary `+` operator.

These are fine without unary `+` operator.

<br>

```perl
map $_->{name}, @array_of_hashrefs;          # No braces at all
map $some_hash{$_}, @keys;                   # No ambiguous braces
map [ $_->{x}, $_->{y} ], @points;           # Square brackets are unambiguous
```

<br>

With `map`, unary `+` operator serves as a syntactic disambiguator that tells `Perl` to interpret `{...}` as a `hash reference` constructor (an expression) rather than as a `map` block.

It's a crucial tool for writing correct `Perl` code when you need to return `hash references` or other `brace-delimited` constructs from `map`.

***

<br>

`Happy Hacking !!!`
