# Classes & Objects

- [Classes \& Objects](#classes--objects)
  - [Definitions](#definitions)
  - [Access Modifiers](#access-modifiers)
  - [Abstract Classes](#abstract-classes)
  - [Final classes](#final-classes)

## Definitions

* **Overriding** - When a child class defines the same function as the parent class, with the exact same name as the parent function and the exact same parameters. When the function is called from an object definining the child class, the child function will be called
* **Overloading** - When a class defines a function with the same name and different parameters. A child class may also overload a function, defining the same function as the parent but with different parameters.
* **Encapsulation** - When you declare variables of a class `private` and provide access to that variable using `getters` and `setters`.

## Access Modifiers

* `public` is accessable from anywhere in the program.
* `private` is only accessable from within the class itself.
* `protected` is only accessible within the same package and by subclasses in other packages.
* `default` is accessible within the package that it is in.

| Modifier    | Same Class | Same Package | Subclass (Different Package) | World (Different Package) |
| ----------- | ---------- | ------------ | ---------------------------- | ------------------------- |
| `public`    | Yes        | Yes          | Yes                          | Yes                       |
| `private`   | Yes        | No           | No                           | No                        |
| `protected` | Yes        | Yes          | Yes                          | No                        |
| `default`   | Yes        | Yes          | No                           | No                        |

* Top-Level classes can only be `public` or `default`.
* Classes nested within another class can be all four.
* When overriding a method, you cannot reduce visibility.
* All interface methods are `public` by default, and interface variables are `public static final`.

## Abstract Classes

Abstract classes (defined as `abstract class Dog`) **cannot** be instatiated:

``` java
abstract class Element { /* implementation */ }

Element e = new Element(); // error! cannot instatiate abstract class
```

Abstract classes can define abstract functions, which have the signature but no body.
Any non-abstract class that extends the abstract class **must** provide the code for any abstract methods.

Unlike interyou can also create non-abstract methods within an abstract class, .

## Final classes

If a class has `final` added to it, then the class cannot be extended by other classes:

``` java
final class Element { /* implementation */ }

class HTMLElement extends Element { /* implementation */ } // error! can't extend from a final class.
```

