# Generics

- [Generics](#generics)
  - [Generic Classes](#generic-classes)
  - [Generic Methods](#generic-methods)
  - [Bounded Generics](#bounded-generics)
  - [Wildcards](#wildcards)
    - [Upper Bounded Wildcards](#upper-bounded-wildcards)
    - [Lower Bounded Wildcards](#lower-bounded-wildcards)
    - [Variable Declaration Wildcards](#variable-declaration-wildcards)
  - [Type Erasure](#type-erasure)
  - [Static Generics](#static-generics)

## Generic Classes

You can define a generic class by placing the generic in the brackets after the class name:

``` java
public class Box<T> {
    private T item;
    public void set(T item) { this.item = item; }
    public T get() { return item; }
}
```

This will accept a box of any object type `T`.

## Generic Methods

You can define a generic method by placing the generic in brackets before the return type:

``` java
public static <E> void printArray(E[] elements) {
    for (E element : elements) {
        System.out.println(element);
    }
}
```

In this case, the class that the `printArray` function belongs to does not need to define `E`.

## Bounded Generics

To restrict a generic, you can restrict it to a family of classes

* `<T extends Number>` - Will accept a `Number` **or** any of it's children.
* `<T extends Comparable<T>>` - Will accept any objects that implements `Comparable` (**Even though Comparable is an interface, you still must use `extends`.**)
* `<T extends Comparable<T> & Serializable>` - Will accept any objects that implement both `Comparable` and `Serializable`. (**When using `&`, classes must come before any interfaces**)

## Wildcards

Wildcards are used when you want to use any type within a function. They can **only** be used in functions, not in classes.

``` java
class Box<?> { /* implementation */ } // error! cannot use wildcard ? on a class

private static void printlist(List<?> list){
    System.out.println(list);
} // legal, will allow a list with any type.
```

### Upper Bounded Wildcards

Upper bounded wildcards (defined as `<? extends Number>`) will only allow objects that extend from that class or the class itself. 

``` java
private static double sum(List<? extends Number> list) {
    double sum = 0.0;
    for (Number i : list)
        sum += i.doubleValue();
    return sum;
}
```

Here, only classes that extend `Number` are allowed, like `Integer`, `Double`, or `Float`.

### Lower Bounded Wildcards

Lower bounded wildcards (defined as `<? super Integer>`) will only allow objects that are parents of that class or the class itself. 

``` java
private static double sum(List<? super Integer> list) {
    double sum = 0.0;
    for (Number i : list)
        sum += i.doubleValue();
    return sum;
}
```

Here, only classes that are parents of `Integer` will be allowed, like `Number`.

### Variable Declaration Wildcards

You can use wildcards when declaring a variable:

``` java
List<? extends Number> myNumbers; // Takes any class that extends Number
myNumbers = new ArrayList<Integer>();
myNumbers = new ArrayList<Double>();
```

## Type Erasure

In Java, generics are only used to check for errors. Later in the compiler lifecycle, all instances of generics are replaced with their bound (which is usually `Object`) and the compiler will insert casts where needed.

Because of this:

* You cannot create an object of type `T` (`new T()`).
* You cannot create an array of type `T` (`new T[10]`)
* You cannot use primitive data types with generics.
* You cannot overload a function that only differs by the generic type (cannot have `sum(List<Double> list)` and `sum(List<Integer> list)`, as both `Integer` and `Double` will be erased to `Objects`).

## Static Generics

`static` methods cannot use generics defined by their class as that generic will be tied to the class instance.
