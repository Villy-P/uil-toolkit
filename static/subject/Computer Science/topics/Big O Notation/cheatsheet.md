# BigO Notation Cheatsheet

- [BigO Notation Cheatsheet](#bigo-notation-cheatsheet)
  - [Time Complexities (in order from fastest to slowest)](#time-complexities-in-order-from-fastest-to-slowest)
    - [`O(1)` - Constant Time](#o1---constant-time)
    - [`O(log(n))` - Logarithmic Time](#ologn---logarithmic-time)
    - [`O(n)` - Linear Time](#on---linear-time)
    - [`O(n*log(n))` - Loglinear Time](#onlogn---loglinear-time)
    - [`O(n^2)` - Quadratic Time](#on2---quadratic-time)
    - [`O(2^n)` - Exponential Time](#o2n---exponential-time)
    - [`O(n!)` - Factorial Time](#on---factorial-time)
  - [Links](#links)

BigO Notation is a way to determine how fast a program can run, like sorts and searches.
`n` is the number of items in the dataset.

Each nested for loop adds a power to the complexity. For example, it goes from `n` to `n^2` to `n^3` to `n^4` etc.

Complexities next to each other are added. For example, a `O(n)` algorithm next to a `O(n^2)` algorithm, the final notation is `O(n + n^2)`.

> Two `O(1)` algorithms added together are still `O(1)`

## Time Complexities (in order from fastest to slowest)

![BigO Time Complexity Graph](/assets/bigo.png)

### `O(1)` - Constant Time

This is instant time. This includes things like:

- Math Equations `(10 + 2)`
- Printing
- Accessing elements of an `Array` / `Arraylist`
- Accessing elements of a `HashMap` / `HashSet`

### `O(log(n))` - Logarithmic Time

This is essentially running a `for i loop` from `0 to n` and another `for loop` running from `i to n`. Includes things such as:

- Worst Space Complexity of `Quicksort`

Example:

``` java
for (int i = 0; i < n; i++)
    for (int j = i; j < n; j++)
        System.out.println(i + j);
```

### `O(n)` - Linear Time

A basic `for loop`, where `n` is the number of elements. This includes:

- Looping over an `Array` / `Arraylist`
- Basic Loop search

Example:

``` java
for (int i = 0; i < n; i++)
    System.out.println(i);
```

### `O(n*log(n))` - Loglinear Time

Loglinear time. Includes:

- Best / Average case `Quicksort`
- Best / Average / Worse case `Mergesort`
- Best / Average / Worse case `Heapsort`

### `O(n^2)` - Quadratic Time

Two `for loops`, each looping from `0 to n`. Includes:

- Worst case `Quicksort`
- Average / Worst case `Bubble Sort`
- Average / Worst case `Insertion Sort`
- Best / Average / Worst case `Selection Sort`

Example:

``` java
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        System.out.println(i + j);
```

### `O(2^n)` - Exponential Time

Includes things like:

- Getting Combinations

### `O(n!)` - Factorial Time

Worst time complexity. Includes things like:

- Traveling Salesman Problem

## Links

- [BigO Examples](https://javachallengers.com/big-o-notation-explanation/)
