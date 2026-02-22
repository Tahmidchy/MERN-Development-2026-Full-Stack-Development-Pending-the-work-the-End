/*
TODO: Now we are going to learn about String Concatenation in JavaScript. String Concatenation is the process of combining two or more strings together to form a new string. In JavaScript, we can concatenate strings using the + operator or the template literals.
*/

// Using + operator for String Concatenation
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log("Full Name using + operator: " + fullName); // Output: John Doe

// Using template literals for String Concatenation
var fullNameTemplate = `${firstName} ${lastName}`;
console.log("Full Name using template literals: " + fullNameTemplate); // Output: John Doe