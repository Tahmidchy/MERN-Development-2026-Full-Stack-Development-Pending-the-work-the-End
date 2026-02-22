/*
TODO: Function Part-1,Creating simple function
*/
// function declaration


function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
// function expression
const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // Output: 20
// arrow function
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6