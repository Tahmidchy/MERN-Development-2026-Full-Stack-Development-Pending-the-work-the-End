/*
TODO: In here Data types in JavaScript Concept understand MERN Development course. In JavaScript, there are several data types that are used to store and manipulate different kinds of values. The main data types in JavaScript include:
1. Primitive Data Types:
   - String: Represents a sequence of characters. Example: "Hello, World!"
   - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
    - Boolean: Represents a logical value that can be either true or false. Example: true, false    
    - Null: Represents the intentional absence of any object value. Example: null
    - Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
    - Symbol: Represents a unique and immutable value that can be used as a key for object properties. Example: Symbol('description')
2. Non-Primitive Data Types:
   - Object: Represents a collection of key-value pairs. Objects can contain properties and methods. Example: { name: "Alice", age: 30 }
   - Array: Represents an ordered list of values. Arrays can contain elements of any data type. Example: [1, "hello", true]
   - Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }
Understanding these data types is crucial for effective programming in JavaScript, as they allow you to store and manipulate data in various ways. Each data type has its own set of properties and methods that can be used to perform operations on the values they hold.
*/

// Example of using different data types in JavaScript

// String
var name = "Alice";
console.log("Name: " + name);
// Number
var age = 30;
console.log("Age: " + age);
// Boolean
var isStudent = true;
console.log("Is Student: " + isStudent);
// Null
var address = null;
console.log("Address: " + address);
// Undefined
var phoneNumber;
console.log("Phone Number: " + phoneNumber);
// Symbol
var uniqueId = Symbol('id');
console.log("Unique ID: " + uniqueId);
// Object
var person = {
    name: "Bob",    
    age: 25
};
console.log("Person: " + JSON.stringify(person));
// Array
var colors = ["red", "green", "blue"];
console.log("Colors: " + colors);
// Function
function greet() {
    console.log("Hello!");
}
greet();
