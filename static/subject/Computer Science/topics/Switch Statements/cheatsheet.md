# Switch Statements

- [Switch Statements](#switch-statements)
  - [Basic Expression](#basic-expression)
  - [default](#default)
  - [Fall-through](#fall-through)
  - [Stacked Cases](#stacked-cases)
  - [Arrow Syntax](#arrow-syntax)
    - [Assignment](#assignment)
    - [yield](#yield)

## Basic Expression

``` java
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
        break;
}
```

Expression can be of type `int`, `char`, `String`, `byte`, `short`, or `enum`.
Expression can also be any of the corresponding wrapper classes (they will be unboxed).

## default

* `default` will run if all other cases return `false`.
* `default` does not have to be last, it can appear anywhere.

## Fall-through

``` java
int x = 2;
switch (x) {
    case 1:
        System.out.print("one ");
    case 2:
        System.out.print("two ");
    case 3:
        System.out.print("three ");
    default:
        System.out.print("default");
}

// Will return two three default
```

Without `break` statements, the code will continue on to the next cases regardless if the case expression is true.

## Stacked Cases

``` java
switch (x) {
    case 1:
    case 2:
    case 3:
        System.out.print("low");
        break;
    case 4:
    case 5:
        System.out.print("high");
        break;
}
```

`x` being `1`, `2`, or `3` will return `low`, as they all fall through to the same value.

## Arrow Syntax

``` java
switch (expression) {
    case value1 -> // single expression;
    case value2 -> // single expression;
    case value3 -> {
        // multiple expressions
    }
    case value4, value5 -> // single expression
    default    -> // single expression;
}
```

With arrows, each case is it's own expression, and as such there is no fall-through.

### Assignment

``` java
int x = 3;
String result = switch (x) {
    case 1 -> "one";
    case 2 -> "two";
    case 3 -> "three";
    default -> "other";
}; // Needs semicolon!
System.out.print(result); // prints "three"
```

You can use the arrow syntax to assign values to a variable.

### yield

``` java
int x = 2;
String result = switch (x) {
    case 1 -> "one";
    case 2 -> {
        String s = "tw" + "o";
        yield s;
    }
    default -> "other";
};
```

`yield` acts like a return statement for a switch statement.
