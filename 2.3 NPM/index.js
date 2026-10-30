/*var generateName = require("sillyname");
var sillyname = generateName();

console.log(` My name is : ${sillyname}.`);*/

import generateName from "sillyname";
var sillyname = generateName();

console.log(` My name is : ${sillyname}`);

// SuperHero Section task 

import {randomSuperhero} from 'superheroes';

const name = randomSuperhero();
console.log(`I am ${name}!`);


/*
TODO: Important Note:Angela Yu's solution for the Superheroes section might not work directly due to version updates in the package. When I encountered errors, I read the latest documentation and updated the code accordingly, and now it works perfectly!If you encounter any issues with this code in the future, it's likely due to a newer package version. Be sure to check the official documentation to update your syntax.Happy Coding! 🚀
*/