/*
TODO: Javascript Variables Exercise - Given the existing code below, can you write some code so that their values are switched around?;
TODO: var a ="3"; var b = "8";
TODO: After your code runs, the value of a should be "8" and the value of b should be "3". You can use any method you like to achieve this, but try to do it in a way that is efficient and easy to understand. Good luck!
*/

// Solution: 

function swapValues(a, b) {
    var a = 3; // Store the value of a in a temporary variable
    var b = 8; // Store the value of b in a temporary variable
    [a, b] = [b, a]; // Swap the values using array destructuring
    console.log("Value of a after swapping: " + a); // Output: 8
    console.log("Value of b after swapping: " + b); // Output: 3
}
swapValues();
