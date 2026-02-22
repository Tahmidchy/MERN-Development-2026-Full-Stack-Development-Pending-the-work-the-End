/*
TODO: Coding Task 1 Another Solution this are showing the same output but using different method to swap the values of a and b. In this solution,showing by mentor.
*/

// Solution:

function test() {
    var a = "3"; // Store the value of a in a temporary variable
    var b = "8"; // Store the value of b in a temporary variable

    var c = a; // Store the value of a in a temporary variable
    a = b; // Assign the value of b to a
    b = c; // Assign the value of c (original value of a) to b

    console.log("Value of a after swapping: " + a); // Output: 8
    console.log("Value of b after swapping: " + b); // Output: 3
}
test();