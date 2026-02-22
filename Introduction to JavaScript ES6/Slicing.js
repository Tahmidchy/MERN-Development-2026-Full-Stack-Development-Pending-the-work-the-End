/*
TODO: Now we are testing String Slicing in JavaScript. String slicing is the process of extracting a portion of a string based on specified indices. In JavaScript, we can use the slice() method to perform string slicing. The slice() method takes two parameters: the starting index and the ending index (optional). If the ending index is not provided, it will slice until the end of the string.
*/

// Using slice() method to extract a portion of a string

var myString = "Hello, World!";

// Extracting "Hello" from the string
var slicedString1 = myString.slice(0, 5);
console.log("Sliced String 1: " + slicedString1); // Output: Hello

// Now we are using Slice method to extract from the the twitter calaculator for counting characters in a tweet how many characters are left for a tweet if the maximum limit is 280 characters

var tweet = "This is a sample tweet to demonstrate the character count in Twitter.";
var tweeterCharacterLimit = tweet.slice(0, tweet.length);
var remainingCharacters = 280 - tweeterCharacterLimit.length;
console.log("Remaining characters for the tweet: " + remainingCharacters); // Output: 221