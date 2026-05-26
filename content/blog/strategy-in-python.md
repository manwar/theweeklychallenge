---
title: "Strategy in Python"
date: 2026-05-26T00:00:00+00:00
description: "Implement Strategy design design in Python."
type: post
image: images/blog/strategy-in-python.jpg
author: Mohammad Sajid Anwar
tags: ["python", "design pattern"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

My formal introduction to `Python` was about `two years` ago when I took some courses by `LinkedIn Learnings`. Since I don't use `Python` on a daily basis, I tend to forget things. Luckliy, participating in [**The Weekly Challenge**](https://theweeklychallenge.org) helps me keep my skills sharp.

A few days ago, I published a blog post about [**Strategy Design Pattern in Perl**](https://theweeklychallenge.org/blog/strategy-design-pattern), and I received a lot of positive feedback. Last night, I started thinking: why not re-create the same concept in `Python`? As I was preparing for that post, an idea popped into my head: why not expand the project to cover design patterns in their entirety?

Hang on, what if I rewrote, [**Design Patterns in Modern Perl**](https://perlschool.com/books/design-patterns/) for `Python`.

It's a good idea, but there is one challenge: I am already working on my second book which focuses on `DBIx::Class` and is about `60%-70%` finished. I can't start another project until that one is complete.

That said, I assume there would be a demand for a book that explores these patterns using `Modern Python`.

The premise would remain the same as the original `Perl` book, but it would leverage all the latest `Python` features.

I am presenting a \"flavour\" of that makeover in this blog post using my original `Perl` post as the foundation.

> The Strategy design pattern is a behavioural design pattern that allows behaviour to be selected dynamically at runtime.

The main objective is to create concrete for each behaviour.

Traditionally, in `OOP`, you define an `interface` and implement `concrete` class for each strategy.

In `Python`, normally you use `abc` module to define an `Abstract Base Class`.

But why creating `abstract` class?

Don't we need an `interface`?

Let's get the basic define first.

> `Interface:` A completely empty contract. It contains only method signatures but no data (state) and no implementation code. A class implements an interface.

> `Abstract Class:` A partially written class. It can have method signatures, but it can also have concrete ethods and member variables. It cannot be instantiated on its own. A class extends inherits from) an abstract class.

`Python` does not have a built-in `interface` keyword. Instead, `Python` uses the `abc` module to do dual roles for both concepts.

For example:

**Interface**

```python
from abc import ABC, abstractmethod

class FormatterStrategy(ABC):
    @abstractmethod
    def format(self, text: str) -> str:
        pass
```

**Abstract Class**

```python
from abc import ABC, abstractmethod

class FormatterStrategy(ABC):
    def strip(self, text: str) -> str:
        return text.strip()

    @abstractmethod
    def format(self, text: str) -> str:
        pass
```

Here is the same example from the post in `Perl`, re-written in `Python`.

```python
class TextFormatter:
    def __init__(self, strategy: str):
        self.strategy = strategy

    def publish(self, text: str) -> str:
        if self.strategy.lower() == "upper":
            return text.upper()
        elif self.strategy.lower() == "lower":
            return text.lower()
        return text

if __name__ == "__main__":
    upper_case = TextFormatter(strategy="upper")
    lower_case = TextFormatter(strategy="lower")

    text = "IpHonE"
    assert upper_case.publish(text) == "IPHONE"
    assert lower_case.publish(text) == "iphone"
    print("Initial tests passed successfully!")
```

Same issue, if we want to add another strategy then we would violate `Open/Closed Principle (OCP)`, one of the five `SOLID` code design principles.

Like below:

```python
class TextFormatter:
    def __init__(self, strategy: str):
        self.strategy = strategy

    def publish(self, text: str) -> str:
        if self.strategy.lower() == "upper":
            return text.upper()
        elif self.strategy.lower() == "lower":
            return text.lower()
        elif self.strategy.lower() == "camel":
            if len(text) >= 2:
                return text[0].lower() + text[1].upper() + text[2:].lower()
            return text
        return text

if __name__ == "__main__":
    upper_case = TextFormatter(strategy="upper")
    lower_case = TextFormatter(strategy="lower")
    camel_case = TextFormatter(strategy="camel")

    text = "IpHonE"
    assert upper_case.publish(text) == "IPHONE"
    assert lower_case.publish(text) == "iphone"
    assert camel_case.publish(text) == "iPhone"
    print("Extended conditional tests passed successfully!")
```

To avoid that we can implement the `Strategy` design pattern. For this we would create an `interface` and three `concrete class` using `abc` module as below:

```python
from abc import ABC, abstractmethod

class FormatterStrategy(ABC):
    @abstractmethod
    def format(self, text: str) -> str:
        pass

class UpperCaseFormatter(FormatterStrategy):
    def format(self, text: str) -> str:
        return text.upper()

class LowerCaseFormatter(FormatterStrategy):
    def format(self, text: str) -> str:
        return text.lower()

class CamelCaseFormatter(FormatterStrategy):
    def format(self, text: str) -> str:
        return text[0].lower() + text[1].upper() + text[2:].lower()

class TextFormatter:
    def __init__(self, strategy: FormatterStrategy):
        self.strategy = strategy

    def publish(self, text: str) -> str:
        return self.strategy.format(text)

if __name__ == "__main__":
    upper_case = TextFormatter(strategy=UpperCaseFormatter())
    lower_case = TextFormatter(strategy=LowerCaseFormatter())
    camel_case = TextFormatter(strategy=CamelCaseFormatter())

    text = "IpHonE"
    assert upper_case.publish(text) == "IPHONE"
    assert lower_case.publish(text) == "iphone"
    assert camel_case.publish(text) == "iPhone"
    print("OOP Strategy tests passed successfully!")
```

So far, `Perl` and `Python` shares the same ground.

Now comes the `Python` magic, type-hinted `Callable` object.

In `Python`, functions are first-class citizens. When a design pattern dictates an object that contains exactly one method, `Python` brain will try to replace the entire class with `Callable`.

So the above example becomes this now:

```perl
from typing import Callable

FormatterStrategy = Callable[[str], str]

def upper_case_formatter(text: str) -> str:
    return text.upper()

def lower_case_formatter(text: str) -> str:
    return text.lower()

def camel_case_formatter(text: str) -> str:
    if len(text) >= 2:
        return text[0].lower() + text[1].upper() + text[2:].lower()
    return text

class TextFormatter:
    def __init__(self, strategy: FormatterStrategy):
        self.strategy = strategy

    def publish(self, text: str) -> str:
        return self.strategy(text)

if __name__ == "__main__":
    upper_case = TextFormatter(strategy=upper_case_formatter)
    lower_case = TextFormatter(strategy=lower_case_formatter)
    camel_case = TextFormatter(strategy=camel_case_formatter)

    text = "IpHonE"
    assert upper_case.publish(text) == "IPHONE"
    assert lower_case.publish(text) == "iphone"
    assert camel_case.publish(text) == "iPhone"
    print("Functional Modern Python Strategy tests passed!")
```

Here, we declare that our strategy is simply any function or lambda that matches a specific signature `(str -> str)`.

There is more in offer, so stay back.

`Python 3.8` introduced something called `typing.Protocol (Structural Subtyping)`.

Instead of explicitly inheriting from an `Abstract Base Class`, a `Protocol` lets you define an interface implicitly via `"duck typing"`.

If a class has a `format` method matching the signature, `Python`'s type checkers accept it as implementing the interface, no inheritance required!

A `Protocol` is simply a tool used to design a custom interface. It doesn't matter if your application needs rigid, predictable logic or abstract, it easily flexes to handle both.

Now the above example becomes this:

```python
from typing import Protocol

class FormatterStrategy(Protocol):
    def format(self, text: str) -> str:
        """Any object with this exact method signature fits the protocol."""
        ...

class UpperCaseFormatter:
    def format(self, text: str) -> str:
        return text.upper()

class LowerCaseFormatter:
    def format(self, text: str) -> str:
        return text.lower()

class CamelCaseFormatter:
    def format(self, text: str) -> str:
        if len(text) >= 2:
            return text[0].lower() + text[1].upper() + text[2:].lower()
        return text

class TextFormatter:
    def __init__(self, strategy: FormatterStrategy):
        self.strategy = strategy

    def publish(self, text: str) -> str:
        return self.strategy.format(text)

if __name__ == "__main__":
    upper_case = TextFormatter(strategy=UpperCaseFormatter())
    lower_case = TextFormatter(strategy=LowerCaseFormatter())
    camel_case = TextFormatter(strategy=CamelCaseFormatter())

    text = "IpHonE"
    assert upper_case.publish(text) == "IPHONE"
    assert lower_case.publish(text) == "iphone"
    assert camel_case.publish(text) == "iPhone"
    print("Protocol-based Strategy tests passed!")
```

Nice, but think of a situation, if I want `format` to handle `integer` as well, then the above code would break.

`Python` has something called `generics` which allows you to create function that works with many different data types.

To use generics, you need `Python 3.12+`.

```python
from typing import Protocol

class FormatterStrategy[T](Protocol):
    def format(self, data: T) -> T:
        """Any object with a format method matching the generic type parameter T fits this protocol."""
        ...

class UpperCaseFormatter:
    def format(self, text: str) -> str:
        return text.upper()

class LowerCaseFormatter:
    def format(self, text: str) -> str:
        return text.lower()

class CamelCaseFormatter:
    def format(self, text: str) -> str:
        if len(text) >= 2:
            return text[0].lower() + text[1].upper() + text[2:].lower()
        return text

class MultiplierFormatter:
    def __init__(self, factor: float):
        self.factor = factor

    def format(self, number: float) -> float:
        return number * self.factor

class DataFormatter[T]:
    def __init__(self, strategy: FormatterStrategy[T]):
        self.strategy = strategy

    def publish(self, data: T) -> T:
        return self.strategy.format(data)

if __name__ == "__main__":
    upper_case = DataFormatter(strategy=UpperCaseFormatter())
    lower_case = DataFormatter(strategy=LowerCaseFormatter())
    camel_case = DataFormatter(strategy=CamelCaseFormatter())

    text = "IpHonE"
    assert upper_case.publish(text) == "IPHONE"
    assert lower_case.publish(text) == "iphone"
    assert camel_case.publish(text) == "iPhone"
    print("String generic protocol tests passed!")

    double_multiplier = DataFormatter(strategy=MultiplierFormatter(factor=2.0))
    number = 4.0
    assert double_multiplier.publish(number) == 8.0
    print("Numeric generic protocol tests passed!")
```

If you noticed, we created context class `DataFormatter` instead of `TextFormatter` and it can handle both text and number data.

That was too much to handle in one post, I need a break now.

***

<br>

`Happy Hacking !!!`
