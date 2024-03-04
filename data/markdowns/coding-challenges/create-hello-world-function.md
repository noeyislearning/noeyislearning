---
id: "1b23771c7-af21-4268-aa83-6f4317652205"
dir: "coding-challenges"
slug: "create-hello-world-function"
name: "Create Hello World Function"
platform: "LeetCode"
difficulty: "easy"
languages_used: ["JS", "Typescript"]
version: "1.0"
---

# Create Hello World Function

## Problem Statement

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

**Example 1:**

> **Input**: `args = []`  
> **Output**: `"Hello World"`  
> **Explanation**:  
> `const f = createHelloWorld();`  
> `f(); // "Hello World"`
>
> `The function returned by createHelloWorld should always return "Hello World".`

**Example 2:**

> **Input**: `args = [{},null,42]`  
> **Output**: `"Hello World"`  
> **Explanation**:  
> `const f = createHelloWorld();`  
> `f({}, null, 42); // "Hello World"`
>
> `Any arguments could be passed to the function but it should still always return "Hello World".`

**Constraints:**

- `0 <= args.length <= 10`

## Solutions

## JavaScript

```javascript
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World"
  }
}
```

## Explanation — JavaScript

This is a JavaScript function declaration. The function `createHelloWorld` is a higher-order function, which means it returns another function when it's called.

Here's a breakdown of the code:

1. `var createHelloWorld = function () {...}`: This is a function declaration. The function is named createHelloWorld. It doesn't take any arguments.
2. `return function (...args) {}`: This is the function that createHelloWorld returns when it's called. This returned function is an anonymous function (a function without a name) that takes any number of arguments (...args). The ... is the spread operator, which in this context is used to gather all arguments passed to the function into an array named args.

## TypeScript

```typescript
function createHelloWorld(): () => string {
  return function (): string {
    return "Hello World"
  }
}
```

## Explanation — TypeScript

This is a TypeScript function declaration. The function `createHelloWorld` is a higher-order function, which means it returns another function when it's called.

Here's a breakdown of the code:

1. `function createHelloWorld(): () => string {...}`: This is a function declaration. The function is named createHelloWorld. It doesn't take any arguments and returns a function that takes no arguments and returns a string.

2. `return function (): string {...}`: This is the function that createHelloWorld returns when it's called. This returned function is an anonymous function (a function without a name) that takes no arguments and returns a string.

## Acknowledgements

This problem was taken from LeetCode. The problem link can be found [here](https://leetcode.com/problems/create-hello-world-function/).
