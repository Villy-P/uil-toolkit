# Strings Cheatsheet

- [Strings Cheatsheet](#strings-cheatsheet)
  - [String Basics](#string-basics)
  - [String Indexes](#string-indexes)
  - [Important Functions](#important-functions)
  - [Function Examples](#function-examples)
  - [Conversions](#conversions)
  - [Links](#links)

## String Basics

Strings are **immutable** (cannot change)
Strings are **objects** (not primatives)

``` javascript
// Creation
String s = "Hello, World!";
s = "Change the value";
String s = new String("Hello, World");
// Concatination
s = s + "Addition";
```

## String Indexes

Indexes start at `0`

| String | H   | e   | l   | l   | o   |
| ------ | --- | --- | --- | --- | --- |
| Index  | 0   | 1   | 2   | 3   | 4   |

## Important Functions

| Function Name                      | Parameter List                                                                                                                                                     | Return                                                                                                                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `s.length()`                       |                                                                                                                                                                    | `int`: the length of the string                                                                                                                                                                                |
| `s.substring()`                    | `int start`: Start index of your substring <br> `int end` End index of your substring                                                                              | `String`: A substring of `s` from indecies `start` to `end - 1`                                                                                                                                                |
| `s.substring()`                    | `int start`: Start index of your substring                                                                                                                         | `String`: A substring for index `start` to the end of the string                                                                                                                                               |
| `s.indexOf()`                      | `String str`: String to search for within the string                                                                                                               | `int`: if `str` is found inside `s`, then it gives the index where it is found, if not returns `-1`                                                                                                            |
| `s.indexOf()`                      | `String str`: String to search for within the string <br> `int i`: Index to start your search                                                                      | `int`: if `str` is found inside `s` after index `i`, then it gives the index where it is found, if not returns `-1`                                                                                            |
| `s.lastIndexOf()`                  | `String str`: String to search for within the string                                                                                                               | `int`: if `str` is found within `s`, it gives the index of the last occurence of that `str`, otherwise returns `-1`                                                                                            |
| `s.charAt()`                       | `int i`: Index in the string                                                                                                                                       | `char`: Returns the character at index `i`                                                                                                                                                                     |
| `s.compareTo()`                    | `String str`: String to compare to                                                                                                                                 | `int`: returns the ASCII difference between the first different characters going left to right. If the strings are equal returns `0`. If one string is prefix of the other, returns the difference in lengths. |
| `s.equals()`                       | `String other`: String to compare to                                                                                                                               | `boolean`: `true` if they are equal to one another, `false` otherwise. **Do NOT use ==**                                                                                                                       |
| `s.equalsIgnoreCase()`             | `String other`: String to compare to                                                                                                                               | `boolean`: `true` if they are equal to one another, ignoring whether or not the letters are uppercase / lowercase, `false` otherwise. **Do NOT use ==**                                                        |
| `s.split()`                        | `String regex`: String to split by                                                                                                                                 | `String[]`: Array with the string broken up by the regex                                                                                                                                                       |
| `s.contains()`                     | `String str`: String to check against                                                                                                                              | `boolean`: Whether or not `str` appears within `s`                                                                                                                                                             |
| `s.startsWith()`                   | `String str`: String to check against                                                                                                                              | `boolean`: Whether or not `s` starts with `str`                                                                                                                                                                |
| `s.endsWith()`                     | `String str`: String to check against                                                                                                                              | `boolean`: Whether or not `s` ends with `str`                                                                                                                                                                  |
| `s.repeat()`                       | `int n`: Number of times to repeat the String`                                                                                                                     | `String`: String containing `n` copies of `s`                                                                                                                                                                  |
| `s.strip()`                        |                                                                                                                                                                    | `String`: `s` that has all trailing or leading whitespace                                                                                                                                                      |
| `s.stripLeading()`                 |                                                                                                                                                                    | `String`: `s` that has all leading whitespace                                                                                                                                                                  |
| `s.stripTrailing()`                |                                                                                                                                                                    | `String`: `s` that has all trailing whitespace                                                                                                                                                                 |
| `s.toCharArray()`                  |                                                                                                                                                                    | `char[]`: Character array of all the characters in the string                                                                                                                                                  |
| `s.replace()` / `s.replaceFirst()` | Both paramters allow use of regex <br> `String a` or `char a`: String to search for in `s` <br> `String b` or `char b`: String to replace the first instance with. | `String`: String with the first instance of `a` replaced with `b`                                                                                                                                              |
| `s.replaceAll()`                   | Both paramters allow use of regex <br> `String a` or `char a`: String to search for in `s` <br> `String b` or `char b`: String to replace each instance with.      | `String`: String with all instance of `a` replaced with `b`                                                                                                                                                    |
| `s.matches()`                      | `String regex`: Regular Expression to check against                                                                                                                | `boolean`: If String `s` is valid for regex `regex`                                                                                                                                                            |
| `s.toUpperCase()`                  |                                                                                                                                                                    | `String`: `s` with all characters converted to uppercase                                                                                                                                                       |
| `s.toLowerCase()`                  |                                                                                                                                                                    | `String`: `s` with all characters covnerted to lowercase                                                                                                                                                       |
| `s.isEmpty()`                      |                                                                                                                                                                    | `boolean`: `true` if `s.length()` is `0`, otherwise `false`                                                                                                                                                    |
| `s.isBlank()`                      |                                                                                                                                                                    | `boolean`: `true` if `s.strip().length()` is `0`, otherwise `false`                                                                                                                                            |

## Function Examples

``` java
String s = "Hello";

out.println(s.length());            // Prints out 5
out.println(s.substring(2, 4));     // Prints out ll
out.println(s.substring(1));        // Prints out ello
out.println(s.indexOf("ll"));       // Prints out 2
out.println(s.indexOf("ellooo"));   // Prints out -1
out.println(s.indexOf("He", 3));    // Prints out -1
out.println(s.lastIndexOf("l"));    // Prints out 3
out.println(s.charAt(3));           // Prints out 3
out.println(s.compareTo("Hello"));  // Prints out 0
out.println(s.equals("Hello"));     // Prints out true
out.println(s.equals("hello"));     // Prints out true
out.println(s == "Hello");          // Prints out false
out.println(s.split("e"));          // Prints out ["H", "llo"]
out.println(s.split(""));           // Prints out ["H", "e", "l", "l", "o"]
out.println(s.contains("ll"));      // Prints out true
out.println(s.startsWith("He"));    // Prints out true
out.println(s.endsWith("lo"));      // Prints out true
out.println(s.repeat(3));           // Prints out HelloHelloHello
out.println(s.toCharArray());       // Prints out ['H', 'e', 'l', 'l', 'o']
out.println(s.replace("ll", "oo")); // Prints out Heooo
out.println(s.matches(".+"));       // Prints out true
out.println(s.toUpperCase());       // Prints out HELLO
out.println(s.toLowerCase());       // Prints out hello
```

## Conversions

``` java
String s;
i + "";              // Any number (i) to String
s.charAt(0);         // String to char
Integer.parseInt(s); // String to int
Integer.valueOf(s);  // String to Integer (class)
String.valueOf(x);   // Any primitive (x) to String
```

## Links

- [Official Strings Documentation](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/String.html)
- [W3 Schools String Reference](https://www.w3schools.com/java/java_ref_string.asp)
- [W3 Schools String Guide](https://www.w3schools.com/java/java_strings.asp)
