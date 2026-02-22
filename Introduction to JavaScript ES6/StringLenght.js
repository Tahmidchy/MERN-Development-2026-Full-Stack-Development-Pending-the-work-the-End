/*
TODO: Now we are testing the string length in JavaScript. The length property of a string returns the number of characters in the string, including spaces and special characters. We can use this property to find out how long a string is.
*/

// Using length property to find the length of a string
var myString = "Hello, World!";
var stringLength = myString.length;
console.log("The length of the string is: " + stringLength); // Output: 13

// Another example with spaces and special characters
var anotherString = "JavaScript is fun! @2024";
var anotherStringLength = anotherString.length;
console.log("The length of the another string is: " + anotherStringLength); // Output: 29

// Twitter calaculator for counting characters in a tweet how many characters are left for a tweet if the maximum limit is 280 characters
var tweet = "This is a sample tweet to demonstrate the character count in Twitter.";
var maxTweetLength = 280;
var remainingCharacters = maxTweetLength - tweet.length;
console.log("Remaining characters for the tweet: " + remainingCharacters); // Output: 221