# String Formatting

- [String Formatting](#string-formatting)
  - [Format String Layout](#format-string-layout)
    - [Argument Index](#argument-index)
    - [Flags](#flags)
      - [Alternative Forms](#alternative-forms)
    - [Width](#width)
    - [Precision](#precision)
    - [Conversion](#conversion)

## Format String Layout

`%[argument_index$][flags][width][.precision]conversion`

All items in brackets are optional

### Argument Index

The argument index is a decimal integer followed by a dollar sign that represents the index of that item in the argument list.

``` java
String s = String.format("%1$s, %2$s, %1$s", "Home", "Sweet");
out.println(s); // Home, Sweet, Home
```

### Flags

Flags is a list of characters that specify options for the formatted string

| Flag | Works With                                  | Description                                                                         |
| ---- | ------------------------------------------- | ----------------------------------------------------------------------------------- |
| `-`  | All conversions                             | Left-justifies the result                                                           |
| `#`  | See [Alternative Forms](#alternative-forms) | See [Alternative Forms](#alternative-forms)                                         |
| `+`  | Integral & Floating Types                   | The result will always include a sign (`+` for positive, `-` for negative)          |
| ` `  | Integral & Floating Types                   | The result will have a leading space for positive values                            |
| `0`  | Integral & Floating Types                   | The result will be padded with `0` instead of a space                               |
| `,`  | Integral & Floating Types                   | The result will use the local-specific grouping separators (`,` in the US)          |
| `(`  | Integral & Floating Types                   | The result will enclose negative numbers in parenthesis, removing the negative sign |

#### Alternative Forms

`#` will cause the conversion to use an "alternate form." This depends on the conversion:

| Specifier                   | Description                                       |
| --------------------------- | ------------------------------------------------- |
| Hexadecimal (`%x` / `%X`)   | Prepends `0x` or `0X`                             |
| Octal (`%o`)                | Prepends a `0`                                    |
| Floating Point (`%f`, `%e`) | Forces a decimal point                            |
| Scientific Notation (`%g`)  | Forces a decimal point and removes trailing zeros |

### Width

The width specifies what the minimum length of the output must be. It defaults to spaces and will pad on the left side. If the `0` flag is provided it will be padded with `0`s and if the `-` flag is provided it will pad towards the right.

### Precision

Precision is the maximum amount of characters the output can be.

| Data Type                                       | Description                                                                                                                      |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Floating Point Numbers (`%f`, `%e`, `%E`)       | Specifies the number of digits after the decimal point. Will round the decimal, and defaults to showing `6` decimal points       |
| Scientific/General (`%g`, `%G`)                 | Specifies the total number of digits in the resulting magnitude. Will round                                                      |
| Strings (`%s`, `%S`)                            | Specifies the maximum characters to be printed. Will remove characters from the back of the string                               |
| Boolean (`%b`, `&B`)                            | Specifies the maximum characters to be printed from either `true` or `false`. Will remove characters from the back of the string |
| Integers (`%d`, `%o`, `%x`) / Characters (`%c`) | `IllegalFormatPrecisionException`                                                                                                |

### Conversion

Conversion represents the content to be added into the output.

Any conversion that is the uppercase version will insert the output converted to the uppercase version (equivelant to running `String.toUpperCase()`).

| Name                   | Conversion | Description                                                                                                                                               |
| ---------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Boolean                | `%b`, `%B` | If `null` or `false`, will output `false`, otherwise outputs `true`                                                                                       |
| Hash Code              | `%h`, `%H` | If `null`, output `null`, otherwise output the hash code (`Integer.toHexString(arg.hashCode())`)                                                          |
| String                 | `%s`, `%S` | If `null`, output `null`, otherwise output the string (`arg.toString()`)                                                                                  |
| Character              | `%c`, `%C` | The Unicode character provided, will accept number values (that convert into the corresponding character)                                                 |
| Integer                | `%d`       | The decimal integer provided                                                                                                                              |
| Octal                  | `%o`       | The octal integer provided                                                                                                                                |
| Hex                    | `%x`, `%X` | The hexadecimal integer provided                                                                                                                          |
| Scientific Notation    | `%e`, `%E` | The number provded converted into computerized scientific notation (e.x. 10e-20)                                                                          |
| Floating Point         | `%f`       | The floating-point number provided                                                                                                                        |
| General Floating Point | `%g`, `%G` | Either the number covnerted into computerized scientific notation or the floating-point number provided, depends on which one is more compact to the user |
| Percent                | `%%`       | Outputs a single `%` character, similar to `\\`                                                                                                           |
| Newline                | `%n`       | Outputs a newline, similar to `\n`                                                                                                                        |
