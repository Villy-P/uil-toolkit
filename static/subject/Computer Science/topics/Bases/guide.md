# Number Bases

## Table of Contents

- [Number Bases](#number-bases)
  - [Table of Contents](#table-of-contents)
  - [What is a base?](#what-is-a-base)
  - [Reading Base Numbers](#reading-base-numbers)
    - [Bases bigger than 10](#bases-bigger-than-10)
  - [Converting Between Bases](#converting-between-bases)
    - [Converting Backwards](#converting-backwards)
    - [Converting Using Java](#converting-using-java)
  - [Using Bases in Java](#using-bases-in-java)
  - [Negative Numbers](#negative-numbers)

## What is a base?

Number bases are different ways we can represent numbers.
In our everyday life, we use base `10` to represent numbers, like in our math classes or in conversation.
A base can be written using a subscript after the number, for example `1110101₂` or `10,968₁₀`.
Computers use base `2`, otherwise known as binary for representing their data.
Other important bases to know are bases `8`, `10`, and `16`.

## Reading Base Numbers

In order to read a number (e.x. `11101011₂`), we need to assign a number to each place, such as how we have the ones and tens place for base `10`:

| 1   | 1   | 1   | 0   | 1   | 0   | 1   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |

The pattern for reading the bases is to start from one on the rightmost side, then keep multiplying it by the base number (in this case `2`, till you get to the leftmost value).

In this scenario, if there is a `1` in a space, we add that number to the total.
Since there is a `1` in the space of `128`, `64`, `32`, `8`, `2`, and `1`, we add all these up to get:

`128 + 64 + 32 + 8 + 2 + 1 = 235`

Therefore, `11101011₂` in base `10` is `235`.

For other bases, such as base 8, we can do the same thing (e.x. `0631₈`):

| 0   | 6   | 3   | 1   |
| --- | --- | --- | --- |
| 512 | 64  | 8   | 1   |

Again, we start at one for the rightmost digit, then multiply by the base (`8`) going leftward.

Since we have numbers bigger than one, we can multiply the number by the digit, so there are `6 64`'s, `3 8`'s, and `1 1`.
We can add all these up to get:

`64(6) + 8(3) + 1 = 409`.

Therefore, `0631₈` in base `10` is `409`.

### Bases bigger than 10

If there is a base bigger than 10, such as base `16`, we cannot say that there are `15` of a digit, because that number has two digits.
Instead, we use letters to represent them:

`A: 10, B: 11, C: 12, D: 13, E: 14, F: 15`.

So, if there we have `15` in base `10`, then that would be `F` in base `16`

## Converting Between Bases

Normally on the UIL test, the very first question will always be a base question.
Usually they would have you do math, and the numbers are in different bases.
One way to do this is to convert each number to base `10`, then do the math, then convert back into the bases of the answers, and see which one is right, but with certain bases, we can quickly convert between them.

For example, base `2`. We can convert that easily to any base that is a power of `2`, such as `4`, `8`, or `16`.

Lets try and convert `11101011₂` to base `16`. In order to that, you must first create `blocks`, and to get the block size, we can use `log₂(16)`, where the subscript is the base we are working with, and the number in parenthesis is the base we need to convert to.

`log₂(16) = 4`, so we will be working with blocks of size `4`.

Split the number into blocks of size `4`, starting from the left. With `11101011₂` we get two blocks: `1110` and `1011`.

Convert each of those into base `10`, then combine them, and you have your number in base `16`:

`1110` in base `10` is `14` or `E` (remember that `14` has two digits, so we have to convert it into a letter)
`1011` in base `10` is `11` or `B`.

So, `11101011₂` in base `16` is `EB`.

### Converting Backwards

If we wish to convert `EB` back into base `2`, we can do that by once again using a block method.
The formula this time will be `²√16`, were the superscript is the base we are going to, and the number within the square root symbol is our current base.
Again, we need blocks of size `²√16 = 4`, so we take each character of `EB` (`E` and `B`), and convert them into base `2`, then make sure they have a block size of `4`.

`E` in base `2` is `1110`, and `B` in base `2` is `1011`, so we have our original number of `11101011`.

Make sure that if the number you get is of length `4`.
If not, you can pad the left with `0's`.

### Converting Using Java

Java has a few methods to help you convert between bases, most notably `Integer.toString`:

``` java
Integer.toString(100, 2);
```

This will convert the number `100` to base `2`, and return a string.

You can also use `Integer.toBinaryString`, which takes in your base `10` number and outputs the binary

## Using Bases in Java

In Java, basic numbers are read in as base `10`, but you can also use prefixes for numbers to represent them as certain bases:

| Base | Prefix | Example              |
| ---- | ------ | -------------------- |
| `2`  | `0b`   | `int i = 0b010 // 2` |
| `8`  | `0`    | `int i = 010 // 8`   |
| `16` | `0x`   | `int i = 0xA // 10`  |

## Negative Numbers

In order to use negative numbers, we use somethings called `twos compilment` and make the values `signed`.
We take the leftmost value and make it negative, so the range changes from `0 to 256` to `-128 to 127`.
By default, all primitives are `signed` in Java
