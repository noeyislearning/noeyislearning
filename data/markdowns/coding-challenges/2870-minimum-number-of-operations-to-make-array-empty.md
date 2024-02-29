---
id: "5c90656a-4f88-4f99-8fb4-87732eac47e0"
dir: "coding-challenges"
slug: "2870-minimum-number-of-operations-to-make-array-empty"
name: "2870. Minimum Number of Operations to Make Array Empty"
platform: "leetcode"
difficulty: "medium"
languages_used: ["python"]
---

# 2870. Minimum Number of Operations to Make Array Empty

PROBLEM LINK: [Leetcode](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/)

## Problem Statement

You are given a **0-indexed** array `nums` consisting of positive integers.

There are two types of operations that you can apply on the array **any** number of times:

- Choose **two** elements with **equal** values and **delete** them from the array.
- Choose **three** elements with **equal** values and **delete** them from the array.

Return *the minimum number of operations required to make the array empty, or `-1` if it is not possible*.

**Example 1:**

> **Input**: `nums = [2,3,3,2,2,4,2,3,4]`  
> **Output**: `4`  
> **Explanation**: `We can apply the following operations to make the array empty:`
>
> - `Apply the first operation on the elements at indices 0 and 3. The resulting array is nums = [3,3,2,4,2,3,4].`
> - `Apply the first operation on the elements at indices 2 and 4. The resulting array is nums = [3,3,4,3,4].`
> - `Apply the second operation on the elements at indices 0, 1, and 3. The resulting array is nums = [4,4].`
> - `Apply the first operation on the elements at indices 0 and 1. The resulting array is nums = [].`

> ` It can be shown that we cannot make the array empty in less than 4 operations.`

**Example 2:**

> **Input**: `nums = [2,1,2,2,3,3]`  
> **Output**: `-1`  
> **Explanation**: `It is impossible to empty the array.`

**Constraints:**

- `2 <= nums.length <= 105`
- `1 <= nums[i] <= 106`

## Solution

```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        from collections import Counter
        mp = Counter(nums)

        count = 0
        for t in mp.values():
            if t == 1:
                return -1
            count += t // 3
            if t % 3:
                count += 1

        return count
```

## Explanation

The provided Python code defines a class `Solution` with a method `minOperations`. This method takes a list of integers (`nums`) as input and returns an integer. The purpose of this method seems to be to calculate the minimum number of operations required based on some criteria, but without more context, it's hard to say exactly what these operations are.

Here's a step-by-step breakdown of the code:

1. `from collections import Counter`: This line imports the `Counter` class from the `collections` module. `Counter` is a dict subclass for counting hashable objects.
2. `mp = Counter(nums)`: This line creates a `Counter` object from the input list `nums`. The `Counter` object `mp` will hold each unique number from `nums` as a key and its count as the corresponding value.
3. `count = 0`: This line initializes a variable `count` to 0. This variable seems to be used to keep track of the total number of operations.
4. The `for` loop iterates over the values in `mp` (i.e., the counts of each unique number in `nums`).
5. Inside the loop, if the count of a number (`t`) is 1, the function returns -1. This suggests that the operation cannot be performed if a number appears only once in `nums`.
6. If `t` is not 1, the code adds `t // 3` to `count`. The `//` operator performs integer (floor) division. This suggests that each operation can process 3 of the same number at a time.
7. If `t` is not a multiple of 3 (i.e., `t % 3` is not 0), the code adds 1 to `count`. This suggests that an additional operation is required to process the remaining numbers.
8. Finally, the function returns `count`, which represents the minimum number of operations required.
