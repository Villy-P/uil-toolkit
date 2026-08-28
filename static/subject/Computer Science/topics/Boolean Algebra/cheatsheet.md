# Boolean Algebra

- [Boolean Algebra](#boolean-algebra)
  - [Truth Tables](#truth-tables)
    - [Not](#not)
    - [And](#and)
    - [Or](#or)
    - [Exclusive Or / Xor](#exclusive-or--xor)

| Operation          | Formal Logic   | Code (Bitwise) | Code (Logical) | Gate                                   |
| ------------------ | -------------- | -------------- | -------------- | -------------------------------------- |
| Not                | ¬P / P&#x0305; | `~P`           | `!P`           | ![not](/assets/booleanalgebra/not.png) |
| And                | P ∧ Q          | `P & Q`        | `P && Q`       | ![and](/assets/booleanalgebra/and.png) |
| Or                 | P ∨ Q          | `P \| Q`       | `P \|\| Q`     | ![or](/assets/booleanalgebra/or.png)   |
| Exclusive Or / Xor | P ⊕ Q / P ⊻ Q  | `P ^ Q`        | None           | ![xor](/assets/booleanalgebra/xor.png) |

## Truth Tables

### Not

| `P`   | `!P`  |
| ----- | ----- |
| False | True  |
| True  | False |

### And

| `P`   | `Q`   | `P & Q` |
| ----- | ----- | ------- |
| False | False | False   |
| False | True  | False   |
| True  | False | False   |
| True  | True  | True    |

### Or

| `P`   | `Q`   | `P \| Q` |
| ----- | ----- | -------- |
| False | False | False    |
| False | True  | True     |
| True  | False | True     |
| True  | True  | True     |

### Exclusive Or / Xor

| `P`   | `Q`   | `P ^ Q` |
| ----- | ----- | ------- |
| False | False | True    |
| False | True  | False   |
| True  | False | False   |
| True  | True  | True    |
