/*
TODO: Now we are testing on filter method. 
*/

let companies = [
    {name: "Local Startup", category: "Technology", start: 2010, end: 2020},
    {name: "Global Tech", category: "Technology", start: 2000, end: 2021},
    {name: "Retail Giant", category: "Retail", start: 1995, end: 2018},
    {name: "Finance Corp", category: "Finance", start: 1980, end: 2010},
    {name: "Health Solutions", category: "Healthcare", start: 2005, end: 2022}
];
// Using filter method to get companies in the Technology category
let techCompanies = companies.filter(company => company.category === "Technology");
console.log(techCompanies);
// Output: [
//   {name: "Local Startup", category: "Technology", start: 2010, end: 2020},
//   {name: "Global Tech", category: "Technology", start: 2000, end: 2021}
// ]

// TODO: Using filter method you have salary list can you filter which salary is greater than 3000.

let salariesList = [2500, 3200, 4500, 2800, 5000];
let highSalaries = salariesList.filter(salary => salary > 3000);
console.log("High salaries:", highSalaries); // Output: [3200, 4500, 5000]