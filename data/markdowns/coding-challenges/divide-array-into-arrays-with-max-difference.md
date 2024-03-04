---
id: "f37f4334-2ece-4f56-a896-fc1b4fc2f081"
dir: "coding-challenges"
slug: "divide-array-into-arrays-with-max-difference"
name: "Divide Array Into Arrays With Max Difference"
platform: "LeetCode"
difficulty: "medium"
languages_used: ["python"]
version: "1.0"
---

# Divide Array Into Arrays With Max Difference

## Problem Statement

You are given an integer array `nums` of size `n` and a positive integer `k`.

Divide the array into one or more arrays of size `3` satisfying the following conditions:

- **Each** element of `nums` should be in **exactly** one array.
- The difference between **any** two elements in one array is less than or equal to `k`.

Return *a 2D array containing all the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.*

**Example 1:**

> **Input**: `nums = [1,3,4,8,7,9,3,5,1], k = 2`  
> **Output**: `[[1,1,3],[3,4,5],[7,8,9]]`  
> **Explanation**: `We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9]. The difference between any two elements in each array is less than or equal to 2.`  
> `Note that the order of elements is not important.`

**Example 2:**

> **Input**: `nums = [1,3,3,2,7,3], k = 3`  
> **Output**: `[]`  
> **Explanation**: `It is not possible to divide the array satisfying all the conditions.`

**Constraints:**

- `n == nums.length`
- `1 <= n <= 105`
- `n` is a multiple of `3`.
- `1 <= nums[i] <= 105`
- `1 <= k <= 105`

## Solution

### Python

```python
class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        nums.sort()
        res = []
        for i in range(0, len(nums), 3):
            if nums[i + 2] - nums[i] <= k:
                res.append([nums[i], nums[i + 1], nums[i + 2]])
            else:
                return []
        return res
```

## Explanation — Python

This Python code defines a method `divideArray` inside a class `Solution`. The method takes a list of integers (`nums`) and an integer (`k`) as input and returns a list of lists.

Here's a step-by-step explanation of what the method does:

1. `nums.sort()`: This line sorts the input list `nums` in ascending order.
2. `res = []`: This line initializes an empty list `res` which will be used to store the result.
3. `for i in range(0, len(nums), 3)`: This line starts a for loop that iterates over the indices of `nums` in steps of 3. This is because the method is grouping the numbers in `nums` into groups of 3.
4. `if nums[i + 2] - nums[i] <= k`: This line checks if the difference between the current number and the number two positions ahead in the sorted list is less than or equal to `k`. If it is, it means the three numbers can form a valid group, and the code proceeds to the next line. If not, it returns an empty list, indicating that it's not possible to divide the array as required.
5. `res.append([nums[i], nums[i + 1], nums[i + 2]])`: This line adds the current group of three numbers to the result list `res`.
6. `return res`: Finally, the method returns the result list `res`, which contains all the valid groups of three numbers.

This method assumes that the length of `nums` is a multiple of 3. If it's not, the code will raise an `IndexError` when it tries to access `nums[i + 2]` for the last group. You might want to add a check at the beginning of the method to handle this case.

## Acknowledgement

This problem is taken from LeetCode. The original problem can be found [here](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/).
