---
name: "1207. Unique Number of Occurrences"
difficulty: "Easy"
is_active: true
is_repository_only: false
platform: "Leetcode"
language: "Python"
thumbnail_URL: ""
dev_date: {
  start: "2024-01-18",
  end: "2024-01-18"
}
---
# 1207. Unique Number of Occurrences

PROBLEM LINK: [Leetcode](https://leetcode.com/problems/unique-number-of-occurrences/)

## Problem Statement

Given an array of integers `arr`, return true if the number of occurrences of each value in the array is unique or false otherwise.

**Example 1:**

> Input: `arr = [1,2,2,1,1,3]`  
Output: `true`  
Explanation: `The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.`

**Example 2:**

> Input: `arr = [1,2]`  
Output: `false`  

**Example 3:**

> Input: `arr = [-3,0,1,-3,1,1,1,-3,10,0]`  
Output: `true`

**Constraints:**

- `1 <= arr.length <= 1000`
- `-1000 <= arr[i] <= 1000`

## Solution

```python
from collections import Counter

class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        count_dict = Counter(arr)
        count_set = set(count_dict.values())
        return len(count_dict) == len(count_set)
```

## Explanation

This Python code defines a class `Solution` with a method `uniqueOccurrences`. The method takes a list of integers `arr` as input and returns a boolean value.

Here's how it works:

- `count_dict = Counter(arr)`: This line uses the `Counter` class from the `collections` module to create a dictionary. The keys of this dictionary are the unique elements from the list `arr`, and the corresponding values are the counts of these elements in `arr`.

- `count_set = set(count_dict.values())`: This line creates a set from the values of `count_dict`. Since a set only contains unique elements, any duplicate counts will be removed.

- `return len(count_dict) == len(count_set)`: This line checks if the number of unique elements in `arr` (which is the length of `count_dict`) is equal to the number of unique counts (which is the length of `count_set`). If these lengths are equal, it means that each unique element in `arr` appears a unique number of times, so the method returns `True`. Otherwise, it returns `False`.
