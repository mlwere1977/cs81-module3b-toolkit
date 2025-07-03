// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 3 Assignment 3B: Math Toolkit Builder
// Date: 07/03/2025

// Doubles the input number — multiplies it by 2
function doubleNumber(number) {
  return number * 2;
}

// Returns the square of a number — multiplies it by itself
function square(number) {
  return number * number;
}

// Checks if a number is even — returns true if divisible by 2
function isEven(number) {
  return number % 2 === 0;
}

// Checks if a number is odd — returns true if not divisible by 2
function isOdd(number) {
  return number % 2 !== 0;
}

// Multiplies two numbers and returns the result
function multiply(num1, num2) {
  return num1 * num2;
}

// Adds two numbers together and returns the sum
function add(num1, num2) {
  return num1 + num2;
}

// Divides one number by another — handles division by zero gracefully
function divide(numerator, denominator) {
  if (denominator === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return numerator / denominator;
}

// Returns the remainder after dividing one number by another
function modulo(dividend, divisor) {
  return dividend % divisor;
}