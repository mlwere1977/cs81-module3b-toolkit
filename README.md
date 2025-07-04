# 🧮 Math Toolkit Builder

**Author:** Mukwaya Lwere  
**Class:** CS 81 JavaScript  
**Assignment:** Module 3B – Math Toolkit Builder  
**Date:** July 3, 2025

---

## 📘 Overview

This project is a specially created JavaScript math toolkit intended to investigate code reuse, logic structuring, and function creation. It contains a number of straightforward but effective functions that carry out standard mathematical operations. Starting with a fundamental function and progressively growing the toolkit while recording forecasts, findings, and reflections was the aim.

---

## 🔧 Functions Included

| Function        | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `doubleNumber(n)` | Returns twice the input number.                                             |
| `square(n)`       | Returns the square of the input number.                                     |
| `isEven(n)`       | Returns `true` if the number is even, otherwise `false`.                   |
| `isOdd(n)`        | Returns `true` if the number is odd, otherwise `false`.                    |
| `multiply(a, b)`  | Returns the product of two numbers.                                         |
| `add(a, b)`       | Returns the sum of two numbers.                                             |
| `divide(a, b)`    | Returns the result of dividing `a` by `b`, with error handling for zero.    |
| `modulo(a, b)`    | Returns the remainder after dividing `a` by `b`.                            |

---

## 📂 File Structure

- `math.js` – Contains all the function definitions.
- `PREDICTIONS.md` – Written expectations for each function’s behavior.
- `RESULTS.md` – Actual test results after running the functions.
- `REFLECTION.md` – Personal insights and takeaways from the project.

---

## 🧠 Learning Goals

- Write clear, reusable JavaScript functions as you practice.
- Forecast and evaluate the behavior of functions.
- Address edge cases, such as division by zero.
- Consider applications in the real world and logical patterns.

---

## 🌍 Real-World Applications

This set of tools could be used as the basis for:

- Online calculators or form-validators; tools for data processing  
- Platforms for education that teach the fundamentals of programming logic  
- In more extensive JavaScript projects, utility libraries

---

## ✅ How to Use

1. The repository should be cloned.
2. Launch `math.js` in a JavaScript-compatible environment (such as the browser console or Node.js).
3. To view the outcome, call any function with the proper parameters.

For Example:
```javascript
console.log(square(4)); // Output: 16
console.log(isEven(7)); // Output: false