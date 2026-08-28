# Math Cheatsheet

- [Math Cheatsheet](#math-cheatsheet)
  - [Constants](#constants)
  - [Functions](#functions)
  - [Change of Base for Logarithms](#change-of-base-for-logarithms)
  - [NaN](#nan)
    - [Properties](#properties)
    - [Producing NaN](#producing-nan)
  - [Function Examples](#function-examples)
  - [Random in range](#random-in-range)
  - [Links](#links)

The `Math` class does **not** need to be imported

## Constants

All constants are `doubles`

| Constant  | Value |
| --------- | ----- |
| `Math.PI` | `π`   |
| `Math.E`  | `E`   |

## Functions

> Functions with a type of `number` accept types `double`, `float`, `int`, `long`
> Functions with a type of `integer` accept types `int`, `long`
> The return type will match the parameter type

| Function Name      | Parameters                | Return                                                 |
| ------------------ | ------------------------- | ------------------------------------------------------ |
| `Math.abs() *`     | `number a`                | `number`: Absolute Value                               |
| `Math.pow()`       | `double a`, `double b`    | `double`: `a` to the power of `b`                      |
| `Math.sqrt()`      | `double a`                | `double`: The square root of `a`                       |
| `Math.cbrt()`      | `double a`                | `double`: The cube root of `a`                         |
| `Math.min()`       | `number a`, `number b`    | `number`: Smallest number between `a` and `b`          |
| `Math.max()`       | `number a`, `number b`    | `number`: Largest number between `a` and `b`           |
| `Math.sin()`       | `double a` **in radians** | `double`: trigonometric sine of an angle               |
| `Math.cos()`       | `double a` **in radians** | `double`: trigonometric cosine of an angle             |
| `Math.tan()`       | `double a` **in radians** | `double`: trigonometric tangent of an angle            |
| `Math.toRadians()` | `double a` **in degrees** | `double`: Converts degrees to radians                  |
| `Math.hypot()`     | `double a`, `double b`    | `double`: Hypotenuse of a triangle (`sqrt(x^2 + y^2)`) |
| `Math.floor()`     | `double a`                | `double`: Rounds `a` down                              |
| `Math.ceil()`      | `double a`                | `double`: Rounds `a` up to the nearest whole number    |
| `Math.round()`     | `double a`                | `long`: `a` rounded to the nearest whole number        |
| `Math.round()`     | `float a`                 | `int`: `a` rounded to the nearest whole number         |
| `Math.random()`    |                           | `double`: Random number in the range `0 <= x < 1`      |
| `Math.floorDiv()`  | `integer a`, `integer b`  | `int`: Performs Division, then floors the value        |
| `Math.exp()`       | `double a`                | `double`: Returns `e^a`                                |
| `Math.log()`       | `double a`                | `double`: Returns the **natural logarithm** of `a`     |
| `Math.log10()`     | `double a`                | `double`: Returns the base 10 logarithm of `a`         |

## Change of Base for Logarithms

- To find the logarithm with a custom base, use the change-of-base formula
- `log_b(a)` = `ln(a)/ln(b)`

``` java
public static double logBase(double value, double base) {
    return Math.log(value) / Math.log(base);
}
```

## NaN

`NaN` is a special value defined for the floating point classes `Double` and `Float`.

### Properties

* `NaN` is not equal to anything (`NaN` == `NaN` will return `false`)
* Any arithmetic involving `NaN` will return `NaN` (`NaN` + 4 will return `NaN`)
* You can check if something is `NaN` by doing `Double.isNan()`, `Float.isNan()`, or `x != x`

### Producing NaN

Usually, NaN is produced when doing a mathematical operation that would produce `undefined` or `DNE`.
Here are ways NaN can occur from mathematical operations.

* **Indeterminate Forms** like `0.0 / 0.0`
* **Complex Numbers** like `Math.sqrt(-1)`
* **Invalid Logarithm** like `Math.log(-10)`
* **Infinity Math** like `Infinity - Infinity`

## Function Examples

``` java
Math.abs(-3) = 3;
Math.pow(7, 2) = 49.0;
Math.sqrt(64) = 8.0;
Math.cbrt(64) = 4.0;
Math.min(2, 4) = 2;
Math.max(2, 4) = 4;
Math.sin(0) = 0.0;
Math.cos(Math.PI) = -1.0;
Math.tan(0) = 0.0;
Math.toRadians(90) = 1.5707;
Math.hypot(3, -4) = 5.0;
Math.floor(4.8) = 4.0;
Math.ceil(4.8) = 5.0;
Math.round(4.5) = 5;
```

## Random in range

``` java
// Returns a number between min (inclusive) and max (inclusive)
public static int randInRange(int min, int max) {
    return (int)(Math.random() * ((max - min) + 1)) + min;
}
```

## Links

- [Math Class Documentation](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html)
