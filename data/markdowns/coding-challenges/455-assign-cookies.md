---
id: "13105bd4-0d97-48cb-8d5b-01abe097c609"
dir: "coding-challenges"
slug: "455-assign-cookies"
name: "455. Assign Cookies"
platform: "LeetCode"
languages_used: ["Python"]
---

# 455. Assign Cookies

PROBLEM LINK: [Leetcode](https://leetcode.com/problems/assign-cookies/)

## Problem Statement

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child `i` has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child `i` will be content. Your goal is to maximize the number of your content children and output the maximum number.

**Example 1:**

> Input: `g = [1,2,3], s = [1,1]`  
> Output: `1`  
> Explanation: `You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content. You need to output 1.`

**Example 2:**

> Input: `g = [1,2], s = [1,2,3]`  
> Output: `2`
> Explanation: `You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. You have 3 cookies and their sizes are big enough to gratify all of the children, You need to output 2.`

**Constraints:**

- `1 <= g.length <= 3 * 104`
- `0 <= s.length <= 3 * 104`
- `1 <= g[i], s[j] <= 231 - 1`

## Solution

Python

```python
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()

        child_i = cookie_j = 0
        while child_i < len(g) and cookie_j < len(s):
            if g[child_i] <= s[cookie_j]:
                child_i += 1
            cookie_j += 1
        return child_i
```

## Explanation

This Python code defines a class `Solution` with a method `findContentChildren.` The method is designed to solve a problem where you are given two lists: `g` representing the greed factor of each child and `s` representing the size of each cookie. The goal is to maximize the number of content children (i.e., a child is content if and only if the cookie size is greater than or equal to the child's greed factor).

Here's a step-by-step explanation of the code:

- The method takes two arguments: `g` and `s`, which are lists of integers. The list `g` represents the greed factor of each child, and `s` represents the size of each cookie.

- Both lists are sorted in ascending order using the `sort()` method. This is done to match the smallest greed factor with the smallest cookie size, then the second smallest, and so on.

- Two pointers `child_i` and `cookie_j` are initialized to 0. These pointers are used to iterate through the lists `g` and `s`.

- A `while` loop is used to iterate through both lists until one of them is exhausted. Inside the loop, if the current child's greed factor is less than or equal to the current cookie's size, the child is content, and we move to the next child (`child_i += 1`). Regardless of whether the child is content or not, we always move to the next cookie (`cookie_j += 1`).

- The loop continues until we've either run out of cookies or all children have been checked. The number of content children is equal to the index of the child pointer `child_i` (since it was incremented each time a child was content), which is returned as the result.

Take note, this algorithm has a time complexity of O(n log n) due to the sorting operation, where n is the length of the longer list. The space complexity is O(1) as it uses a constant amount of space.
