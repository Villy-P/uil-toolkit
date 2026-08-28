# Operator Precedence

- [Operator Precedence](#operator-precedence)
  - [Precedence Acronym \& Table](#precedence-acronym--table)
  - [Increment and Decrement](#increment-and-decrement)
  - [Unary Logical NOT](#unary-logical-not)
  - [Unary Bitwise NOT](#unary-bitwise-not)
  - [Casting](#casting)
  - [Shift](#shift)
  - [`instanceof`](#instanceof)
  - [Ternary](#ternary)
  - [Assignment](#assignment)
  - [Lambda](#lambda)
  - [Switch](#switch)

## Precedence Acronym & Table

Remember the acronym **POUCMA SHREAXOR LOTAL**:

> Associativity means which part of the operation comes first.
> For example, subtraction is left-to-right, meaning the left number is subtracted from the right.
> Assignments are right-to-left, meaning the left value is set to the right expression.

| Level | Name           | Operator(s)                                                    | Description                                                                                                                                      | Associativity                                            |
| ----- | -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| 15    | Parenthesis    | `()`  <br> `[]`  <br> `new`  <br> `.`  <br> `::`               | parenthesis <br> array access <br> object creation <br> member access <br> method reference                                                      | left-to-right                                            |
| 14    | Other Unary    | `++` <br> `--` <br> `!` <br> `~` <br> `++` <br> `--`           | unary post-increment <br> unary post-decrement <br> unary logical NOT <br> unary bitwise NOT <br> unary post-increment <br> unary post-decrement | left-to-right (first two) <br> right-to-left (last four) |
| 13    | Casting        | `(type)`                                                       | cast                                                                                                                                             | right-to-left                                            |
| 12    | Multiplication | `*` <br> `/` <br> `%`                                          | multiplication <br> division <br> modulo (remainder)                                                                                             | left-to-right                                            |
| 11    | Addition       | `+` <br> `-`                                                   | addition <br> subtraction                                                                                                                        | left-to-right                                            |
| 10    | Shift          | `>>` <br> `<<` <br> `>>>`                                      | shift                                                                                                                                            | left-to-right                                            |
| 9     | Relations      | `< <=` <br> `> >=` <br> `instanceof`                           | relational                                                                                                                                       | left-to-right                                            |
| 8     | Equality       | `==` <br> `!=`                                                 | equality                                                                                                                                         | left-to-right                                            |
| 7     | Bitwise AND    | `&`                                                            | bitwise AND                                                                                                                                      | left-to-right                                            |
| 6     | Bitwise XOR    | `^`                                                            | bitwise XOR                                                                                                                                      | left-to-right                                            |
| 5     | Bitwise OR     | `\|`                                                           | bitwise OR                                                                                                                                       | left-to-right                                            |
| 4     | Logical AND    | `&&`                                                           | logical AND                                                                                                                                      | left-to-right                                            |
| 3     | Logical OR     | `\|\|`                                                         | logical OR                                                                                                                                       | left-to-right                                            |
| 2     | Ternary        | `?:`                                                           | ternary                                                                                                                                          | left-to-right                                            |
| 1     | Assignment     | `= += -=` <br> `*= /= %=` <br> `&= ^= \|=` <br> `<<= >>= >>>=` | assignment                                                                                                                                       | right-to-left                                            |
| 0     | Lambda         | `->`                                                           | lambda/switch expression                                                                                                                         | right-to-left                                            |

## Increment and Decrement

## Unary Logical NOT

## Unary Bitwise NOT

## Casting

## Shift

## `instanceof`

## Ternary

## Assignment

## Lambda

## Switch
