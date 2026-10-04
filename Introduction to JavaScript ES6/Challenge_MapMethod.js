/*
TODO: In here we are testing on Map Method. we have a varibale called number which is an array of salary of number
*/

let salaries = [500,800,1200,2500];
// Using map method to increase each salary by 10%
let increasedSalaries = salaries.map(salary => salary * 1.10);
console.log(increasedSalaries); // Output: [550, 880, 1320, 2750]