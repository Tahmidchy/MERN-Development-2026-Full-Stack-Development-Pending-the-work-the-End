/*
TODO: Now we are testing uppercase and lowercase in JavaScript. The toUpperCase() method converts a string to uppercase letters, while the toLowerCase() method converts a string to lowercase letters. These methods are useful for standardizing the case of strings or for performing case-insensitive comparisons.
*/

// Using toUpperCase() method
var myString = "Hello, World!";
var upperCaseString = myString.toUpperCase();
console.log("Uppercase String: " + upperCaseString); // Output: HELLO, WORLD!
// Using toLowerCase() method
var lowerCaseString = myString.toLowerCase();
console.log("Lowercase String: " + lowerCaseString); // Output: hello, world!

/*
TODO: Now We are Start Our Test 
TODO: 1: Create a var that store the name that users enters.
TODO: 2: Capitalize the first letter of their name a) islolated the first letter b) Turn the first letter to uppercase c) Isolate the rest of the name d) change the rest of the name to lower case e) Concatenate the capitalized first letter with the rest of the name
TODO: 3: we use to capitalize version of their name to greet then using console.log
*/

// Step 1: Create a variable to store the user's name
var userName = "A T M Mustafa Masud"
// Step 2: Capitalize the first letter of the user's name
var firstLetter = userName.charAt(0);
var capitalizedFirstLetter = firstLetter.toUpperCase();
var restOfName = userName.slice(1, userName.length);
var lowerCaseRestOfName = restOfName.toLowerCase();
var capitalizedUserName = capitalizedFirstLetter + lowerCaseRestOfName;
// Step 3: Greet the user using the capitalized version of their name
console.log("Hello, " + capitalizedUserName + "! Welcome to JavaScript programming!");
