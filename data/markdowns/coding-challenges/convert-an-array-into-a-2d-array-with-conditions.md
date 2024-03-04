---
id: "03eea441-8696-40de-8937-770d4e74d92e"
dir: "coding-challenges"
slug: "convert-an-array-into-a-2d-array-with-conditions"
name: "Convert an Array Into a 2D Array With Conditions"
platform: "LeetCode"
difficulty: "medium"
languages_used: ["python"]
version: "1.0"
---

# Convert an Array Into a 2D Array With Conditions

## Problem Statement

You are given an integer array `nums`. You need to create a 2D array from `nums` satisfying the following conditions:

- The 2D array should contain **only** the elements of the array `nums`.
- Each row in the 2D array contains **distinct** integers.
- The number of rows in the 2D array should be **minimal**.

Return the resulting _array_. If there are multiple answers, return any of them.

**Note**: that the 2D array can have a different number of elements on each row.

**Example 1:**

> **Input**: `nums = [1,3,4,1,2,3,1]`  
> **Output**: `[[1,3,4,2],[1,3],[1]]`  
> **Explanation**: `We can create a 2D array that contains the following rows:`
>
> - `[1,3,4,2]`
> - `[1,3]`
> - `[1]`
>
> `All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer. It can be shown that we cannot have less than 3 rows in a valid array.`

**Example 2:**

> **Input**: `nums = [1,2,3,4]`  
> **Output**: `[[4,3,2,1]]`  
> **Explanation**: `All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.`

**Constraints:**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= nums.length`

## Solution

### Python

```python
class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        nums.sort(reverse=True)
        rows = []
        for num in nums:
            found = False
            for row in rows:
                if num not in row:
                    row.append(num)
                    found = True
                    break
            if not found:
                rows.append([num])
        return rows
```

## Explanation — Python

This Python code defines a class `Solution` with a method `findMatrix`. The method is designed to organize a list of integers (`nums`) into a list of lists (`rows`), where each sublist (or row) contains unique numbers. The numbers are added to the sublists in descending order.

Here's a step-by-step explanation of the code:

1. The method takes one argument: `nums`, which is a list of integers.
2. The list `nums` is sorted in descending order using the `sort(reverse=True)` method.
3. An empty list `rows` is initialized. This list will eventually contain the sublists (or rows) of unique numbers.
4. A `for` loop is used to iterate through each number in `nums`. For each number, a `found` flag is set to `False`.
5. Inside the `for` loop, another `for` loop is used to iterate through each row in `rows`. If the current number is not in the current row, it is appended to the row, the `found` flag is set to `True`, and the inner loop is broken.
6. If the `found` flag is still `False` after checking all existing rows, it means the number is not in any row. In this case, a new row is created with this number and appended to `rows`.
7. After all numbers in `nums` have been processed, `rows` is returned as the result.

Take note, this algorithm has a time complexity of O(n^2) due to the nested loops, where n is the length of the list `nums`. The space complexity is O(n) as it uses a list `rows` to store the result.

## Acknowledgement

This problem is a LeetCode problem. The original problem can be found at [here](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/).
