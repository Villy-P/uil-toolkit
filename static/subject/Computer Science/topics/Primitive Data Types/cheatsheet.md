# Primitives Cheatsheet

- [Primitives Cheatsheet](#primitives-cheatsheet)
  - [Primitive Types](#primitive-types)
  - [Assignment Compatibility Chart](#assignment-compatibility-chart)
  - [Integer Division](#integer-division)
  - [Modulus](#modulus)
  - [Number Suffixes](#number-suffixes)
  - [Default Values](#default-values)
  - [Links](#links)

## Primitive Types

| Name      | Bits | Signed | Range                                                    |
| --------- | ---- | ------ | -------------------------------------------------------- |
| `boolean` | `8`  | `No`   | `false` or `true`                                        |
| `byte`    | `8`  | `Yes`  | `-128` to `127`                                          |
| `char`    | `16` | `No`   | `0` to `65535`                                           |
| `short`   | `16` | `Yes`  | `-32768` to `32767`                                      |
| `int`     | `32` | `Yes`  | `-2147483648` to `2147483647`                            |
| `long`    | `64` | `Yes`  | `-9223372036854775808` to `9223372036854775807`          |
| `float`   | `32` |        | `1.40239846e-45` to `3.40282347e+38`                     |
| `double`  | `64` |        | `4.94065645841246544e-324` to `1.79769313486231570e+308` |

## Assignment Compatibility Chart

| From/To | `byte`      | `char`      | `short`     | `int`       | `long`      |
| ------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| `byte`  | Assignable  | Cast Needed | Cast Needed | Cast Needed | Cast Needed |
| `char`  | Cast Needed | Assignable  | Cast Needed | Cast Needed | Cast Needed |
| `short` | Assignable  | Cast Needed | Assignable  | Cast Needed | Cast Needed |
| `int`   | Assignable  | Assignable  | Assignable  | Assignable  | Cast Needed |
| `long`  | Assignable  | Assignable  | Assignable  | Assignable  | Assignable  |


## Integer Division

- Division between two `number` values (`byte`, `short`, `int`, `long`) will truncate the decimal.
- Division between a decimal value (`float`, `double`) and a `number` value will produce a decimal.

``` java
2 / 3 = 0
16 / 5 = 3
8 / 4 = 2
-10 / 7 = -1
2.0 / 3 = 0.6666
16 / 5. = 3.2
(double) 1 / 6 = 0.1666
9d / 4 = 2.25
```

## Modulus

- `%` symbol takes the remainder
- It will always take the sign of the first number
- If the first number is less then the second, it will return the first

``` java
16 % 2 == 0;
-8 % 3 == -2
8 % 3 == 2
2 % 5 == 2
x % 2 == 0;  // Is x even?
x % 3 != 0;  // Is x NOT a multiple of 3
```

## Number Suffixes

Certain Data types have suffixes that specify what type they are.
**Not using these may cause errors**

``` java
long l = 12345L;
float f = 100.123f;
double d = 9876.12345d;
```

## Default Values

If no value is specified, the types will default to:

| Data Type              | Default Value |
| ---------------------- | ------------- |
| `byte`, `short`, `int` | `0`           |
| `float`                | `0f`          |
| `double`               | `0d`          |
| `long`                 | `0L`          |
| `char`                 | `'\u0000'`    |
| `Object`               | `null`        |
| `boolean`              | `false`       |

## Links

- [Official Primitives Guide](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)
- [W3 Schools Data Types Guide](https://www.w3schools.com/java/java_data_types.asp)
