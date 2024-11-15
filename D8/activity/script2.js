// script2.js

// Activity: Exploring ES6 Features

// Objective: Practice using ES6 features to enhance your JavaScript code.

// Instructions:
// 1. Create an HTML file with a heading that says "ES6 Features".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using ES6 features. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Use arrow functions to calculate the square of a given number and log the result to the console.
//    b. Use template literals to create a welcome message that includes the name and age of a person.
//    c. Use destructuring to extract the first and last name from a person object and log them to the console.
//    d. Use the spread operator to merge two arrays into a single array.
//    e. Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.
//    f. Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate ES6 features to accomplish the given task.

// Good luck!



// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num) => num * num;
console.log("Square of 5 is:", square(5));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = "Bilbo";
const age = 30;
const welcomeMessage = `Hello ${name}, welcome! You are ${age} years old.`;
console.log(welcomeMessage);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
    firstName: "Thorin",
    lastName: "Oakenshield",
    age: 25
};
const { firstName, lastName } = person;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const calculateArea = (length = 1, width = 1) => length * width;
console.log("Area with no arguments (default):", calculateArea());
console.log("Area with arguments (5, 10):", calculateArea(5, 10));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Smaug", 28);
person1.introduce();
