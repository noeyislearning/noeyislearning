---
id: "7f9662ac-f8d3-410d-a11a-dff5ac6aaedc"
dir: "coding-challenges"
slug: "longest-increasing-subsequence"
name: "Longest Increasing Subsequence"
platform: "LeetCode"
difficulty: "medium"
languages_used: ["python"]
version: "1.0"
---

# Longest Increasing Subsequence

## Problem Statement

You are given a **0-indexed** array `nums` consisting of positive integers.

**Example 1:**

> **Input**: `nums = [10,9,2,5,3,7,101,18]`  
> **Output**: `4`  
> **Explanation**: `The longest increasing subsequence is [2,3,7,101], therefore the length is 4.`

**Example 2:**

> **Input**: `nums = [0,1,0,3,2,3]`  
> **Output**: `4`

**Example 2:**

> **Input**: `nums = [7,7,7,7,7,7,7]`  
> **Output**: `1`

**Constraints:**

- `1 <= nums.length <= 2500`
- `104 <= nums[i] <= 104`

## Solution

### Python

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0

        piles = []
        for num in nums:
            pile_idx = self.binary_search(piles, num)
            if pile_idx == len(piles):
                piles.append(num)
            else:
                piles[pile_idx] = num

        return len(piles)

    def binary_search(self, piles, target):
        left, right = 0, len(piles) - 1

        while left <= right:
            mid = left + (right - left) // 2
            if piles[mid] == target:
                return mid
            elif piles[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return left
```

## Explanation — Python

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

## Acknowledgement

This problem is taken from LeetCode. The original problem can be found [here](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/).
