//JS-ARRUWFUNCTION TASK IS !!!DONE!!!

// Task 1
//Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => {
  return `Hello, ${name}`;
};
console.log(greet("Dalal"));

//Task 2
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(1, 2));

//Task 3
// Q3) Write a simple arrow function that squares a number.

const numSquare = (num3) => {
  return num3 ** 2;
};

console.log(numSquare(3));

//Challenge
// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const sqrarray = [];
const array = [2, 3, 6];
array.forEach((num) => {
  sqrarray.push(num ** 2);
});

console.log(sqrarray);

//challancge by the instructor
//return the smallest number in the array
const numbers = [7, 2, 3, 5, 9, 6, 12, 9];
let max = numbers[0];

numbers.forEach((num) => {
  if (max > num) {
    max = num;
  }
});
console.log(max);
