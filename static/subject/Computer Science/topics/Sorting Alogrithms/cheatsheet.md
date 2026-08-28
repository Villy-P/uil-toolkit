# Sorting Algorithms

- [Sorting Algorithms](#sorting-algorithms)
  - [Big O Table](#big-o-table)
  - [Insertion Sort](#insertion-sort)
    - [Implementation](#implementation)
    - [Steps](#steps)
    - [Time Complexity](#time-complexity)

## Big O Table

| Algorithm      | Best Case   | Average Case | Worst Case  | Space Complexity |
| -------------- | ----------- | ------------ | ----------- | ---------------- |
| Quicksort      | O(n log(n)) | O(n log(n))  | O(n^2)      | O(log(n))        |
| Mergesort      | O(n log(n)) | O(n log(n))  | O(n log(n)) | O(n)             |
| Heapsort       | O(n)        | O(n log(n))  | O(n log(n)) | O(1)             |
| Bubble Sort    | O(n)        | O(n^2)       | O(n^2)      | O(1)             |
| Insertion Sort | O(n)        | O(n^2)       | O(n^2)      | O(1)             |
| Selection Sort | O(n^2)      | O(n^2)       | O(n^2)      | O(1)             |
| Tree Sort      | O(n log(n)) | O(n log(n))  | O(n^2)      | O(n)             |
| Radix Sort     | O(nk)       | O(nk)        | O(nk)       | O(n + k)         |
| Counting Sort  | O(n + k)    | O(n + k)     | O(n + k)    | O(k)             |

## Insertion Sort

### Implementation

``` java
void sort(int arr[]) {
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
```

### Steps

1. Divide the array into a sorted section (initially just the beginning element) and the unsorted section.
2. Pick the first element in the unsorted section to be your key.
3. Compare the key with the sorted elements from right to left. If an element is larger then the key, shift that element to the right to make space.
4. Once it finds an element smaller then/equal to the key, insert the key into that spot.
5. Repeat until sorted fully.

### Time Complexity

* Best Case: O(n), array is already sorted.
* Average Case: O(n^2)
* Worst Case: O(n^2), array is in reverse order.
* Space Complexity: O(1), sort is done in place.