---
id: "653a9c5e-8280-4693-b04c-300ffd43f85e"
dir: "coding-challenges"
slug: "number-of-laser-beams-in-a-bank"
name: "Number of Laser Beams in a Bank"
platform: "leetcode"
difficulty: "medium"
languages_used: ["python"]
version: "1.0"
---

# Number of Laser Beams in a Bank

## Problem Statement

Anti-theft security devices are activated inside a bank. You are given a **0-indexed** binary string array `bank` representing the floor plan of the bank, which is an `m x n` 2D matrix. `bank[i]` represents the `ith` row, consisting of `'0'`s and `'1'`s. `'0'` means the cell is empty, while`'1'` means the cell has a security device.

There is **one** laser beam between any **two** security devices **if both** conditions are met:

- The two devices are located on two **different rows**: `r1` and `r2`, where `r1 < r2`.
- For **each** row `i` where `r1 < i < r2`, there are **no security devices** in the `ith` row.

Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return *the total number of laser beams in the bank*.

**Example 1:**

> Input: `bank = ["011001","000000","010100","001000"]`  
> Output: `8`  
> Explanation: `Between each of the following device pairs, there is one beam. In total, there are 8 beams:`
>
> - `bank[0][1] -- bank[2][1]`
> - `bank[0][1] -- bank[2][3]`
> - `bank[0][2] -- bank[2][1]`
> - `bank[0][2] -- bank[2][3]`
> - `bank[0][5] -- bank[2][1]`
> - `bank[0][5] -- bank[2][3]`
> - `bank[2][1] -- bank[3][2]`
> - `bank[2][3] -- bank[3][2]`

> `Note: that there is no beam between any device on the 0th row with any on the 3rd row This is because the 2nd row contains security devices, which breaks the second condition.`

**Example 2:**

> Input: `bank = ["000","111","000"]`  
> Output: `0`
> Explanation: `There does not exist two devices located on two different rows.`

**Constraints:**

- `m == bank.length`
- `n == bank[i].length`
- `1 <= m, n <= 500`
- `bank[i][j]` is either `'0'` or `'1'`.

## Solution

### Python

```python
class Solution(object):
    def numberOfBeams(self, bank):
        prev_row_count = 0
        total = 0

        for row in bank:
            cur_row_count = self.calc(row)
            if cur_row_count == 0:
                continue

            total += cur_row_count * prev_row_count
            prev_row_count = cur_row_count

        return total

    def calc(self, s):
        return sum(int(c) for c in s)
```

## Explanation — Python

The provided Python code is a class `Solution` two methods: `numberOfBeams` and `calc`.

The `numberOfBeams` method takes a list of strings `bank` as input. Each string in `bank` represents a row of characters, where each character is presumably a digit (0-9). The method calculates a total count based on the sum of digits in each row and the sum of digits in the previous row.

The `calc` method is a helper method used by `numberOfBeams`. It takes a string `s` as input, converts each character in the string to an integer, and returns the sum of these integers.

Here's a step-by-step explanation of `numberOfBeams`:

1. Initialize `prev_row_count` and `total` to 0. `prev_row_count` keeps track of the sum of digits in the previous row, and `total` is the final result to return.
2. Iterate over each `row` in `bank`.
3. For each `row`, calculate `cur_row_count` as the sum of its digits by calling `self.calc(row)`.
4. If `cur_row_count` is 0, skip the current iteration and move to the next `row`.
5. Otherwise, add `cur_row_count * prev_row_count` to `total`, and update `prev_row_count` to `cur_row_count`.
6. After iterating over all rows, return `total`.

This code seems to be calculating some kind of cumulative interaction between the rows in `bank`, where the interaction is determined by the product of the sums of digits in consecutive rows.

## Acknowledgement

This problem is taken from LeetCode. The original problem can be found [here](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/).
