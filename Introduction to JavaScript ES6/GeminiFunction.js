/*
TODO: My personal Agent Give me a function coding challenge, Question is: you have a function named dreamCountry i get a input of a country name and return a string that says "My dream country is [country name]". If the input is empty or not a string, return "Please provide a valid country name." Write the function in JavaScript.
*/

// Function to return a string about the dream country
function dreamCountry(country) {
    if (typeof country !== 'string' || country.trim() === '') {
        return "Please provide a valid country name.";
    }
    return `My dream country is ${country}.`;
}
// Test cases
console.log(dreamCountry("Switzerland")); // Output: My dream country is Switzerland.
console.log(dreamCountry("")); // Output: Please provide a valid country name.
console.log(dreamCountry(123)); // Output: Please provide a valid country name.

// Quizes checking by Gemini

let company = "Google ";
console.log(company.trim()); // Output: "Google"