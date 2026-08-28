# Autoboxing/Unboxing

- [Autoboxing/Unboxing](#autoboxingunboxing)
  - [Autoboxing](#autoboxing)
    - [Common Uses](#common-uses)
  - [Unboxing](#unboxing)
    - [Common Uses](#common-uses-1)
  - [Common Errors](#common-errors)
    - [`==` Schenanigans](#-schenanigans)
    - [`Integer` and `Float`](#integer-and-float)

## Autoboxing

Java will convert primitives to objects when necessary:

``` java
int x = 42;
Integer boxed = x;  // compiler converts: Integer.valueOf(42)

List<Integer> list = new ArrayList<>();
list.add(5);
```

### Common Uses

* `Lists` cannot hold any primitives, so Java converts added primitives to their object form when you call `list.add()`.
* If a primitive is passed into a function that expects a wrapper, the primitive is autoboxed into the wrapper.

## Unboxing

Unboxing is the opposite, where Java will convert the Object wrappers into their corresponding primitve types:

``` java
Integer wrapped = Integer.valueOf(100);
int raw = wrapped;  // compiler converts: wrapped.intValue()

Integer a = 50;
int result = a + 10; // a is converted to a primitive before addition
```

### Common Uses

* If you do math where both objects are wrapper classes (e.x. `Integer` + `Integer`), both are unboxed into `int`s.
* If you do comparisons where one object is a wrapper and one is a primitive (e.x. `Integer` == `int`), then the `Integer` is unboxed into an `int`.
* If a function expects a primitive and you pass in a wrapper, the wrapper is unboxed into the primitive.

## Common Errors

* `NullPointerException` is thrown when you attempt to autobox a `null` wrapper into a primitive.

### `==` Schenanigans

``` java
Integer a = 200;
Integer b = 200;
System.out.println(a == b);   // false  ← compares object references
System.out.println(a.equals(b)); // true ← compares values
```

As with all objects, only `.equals` will correctly compare if they are equal.

> One thing to take note of is that Java will cache objects from `-128` to `128`, meaning that if you create two `Integer` objects with the same value in that range at runtime, they will occupy the same memory address, causing `==` to return true.

### `Integer` and `Float`

``` java
var f = new ArrayList<Float>();
f.add( 3 );
System.out.print( f.get(0) );
```

This code will produce an error because `3` is autoboxed into an `Integer`, but you cannot pass an `Integer` into a `Float`. Use `3f` instead so it autoboxes into a `Float`.

Even if the `ArrayList` was of type `Byte` or `Double`, all numbers without suffixes will autobox to `Integer`s.