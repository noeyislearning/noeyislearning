---
id: "a42ca910-6c08-454e-9582-047f33a8e2db"
dir: "coding-challenges"
slug: "counter"
name: "Counter"
platform: "LeetCode"
difficulty: "easy"
languages_used: ["JS", "Typescript"]
version: "1.0"
---

# Counter

## Problem Statement

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

**Example 1:**

> Input:  
> `n = 10`  
> `["call","call","call"]`
> Output: `[10,11,12]`  
> Explanation:  
> `counter() = 10 // The first time counter() is called, it returns n.`  
> `counter() = 11 // Returns 1 more than the previous time.` > `counter() = 12 // Returns 1 more than the previous time.`

**Example 2:**

> Input:  
> `n = -2`  
> `["call","call","call","call","call"]`  
> Output: `[-2,-1,0,1,2]`  
> Explanation: `counter() initially returns -2. Then increases after each sebsequent call.`

**Constraints:**

- `-1000 <= n <= 1000`
- `1 <= calls.length <= 1000`
- `calls[i]` is either `"call"` or `"get"`

## Solutions

### JavaScript

```javascript
var createCounter = function (n) {
  return function () {
    return n++
  }
}
```

## Explanation — JavaScript

This JavaScript code defines a function `createCounter` that takes one argument `n`. This function returns another function that, when called, increments `n` and returns its value.

Here's a breakdown:

1. `var createCounter = function (n) {...}`: This is a function declaration. The function is named `createCounter` and it takes one argument `n`.
2. `return function () {...}`: This is the function that `createCounter` returns when it's called. This returned function is an anonymous function (a function without a name) that doesn't take any arguments.
3. `return n++`: This is the body of the returned function. It increments `n` by 1 (using the `++` operator) and then returns the value of `n`. Note that because `n++` is used, the increment happens after the value of `n` is returned.

### TypeScript

```typescript
function createCounter(n: number): () => number {
  return function (): number {
    return n++
  }
}
```

## Explanation — TypeScript

This is a TypeScript function declaration. The function `createCounter` takes one argument `n` of type `number` and returns another function that, when called, increments `n` and returns its value.

Here's a breakdown:

1. `function createCounter(n: number): () => number {...}`: This is a function declaration. The function is named `createCounter` and it takes one argument `n` of type `number`. It returns another function that doesn't take any arguments and returns a value of type `number`.
2. `return function (): number {...}`: This is the function that `createCounter` returns when it's called. This returned function is an anonymous function (a function without a name) that doesn't take any arguments and returns a value of type `number`.
3. `return n++`: This is the body of the returned function. It increments `n` by 1 (using the `++` operator) and then returns the value of `n`. Note that because `n++` is used, the increment happens after the value of `n` is returned.

## Note

The `++` operator is used to increment the value of `n` by 1. It's a shorthand for `n = n + 1`. The `++` operator can be used before or after the variable it's applied to. When used before the variable (as in `++n`), it increments the value of `n` and then returns the new value. When used after the variable (as in `n++`), it returns the current value of `n` and then increments it. In this case, the returned value is the current value of `n` before it's incremented.

## Acknowledgements

This problem was taken from LeetCode. The original problem can be found [here](https://leetcode.com/problems/counter/)
