/*
TODO: Now we are testing on find() method, and reduce() method. we have a variable called number which is an array of salary of number
*/

// Using find() method to find the first salary greater than 1000

let interviewsCompanyList = [
    {name: "Meta", salary: 5000},
    {name: "Google", salary: 4500},
    {name: "Amazon", salary: 4000},
    {name: "Microsoft", salary: 3500},
    {name: "Apple", salary: 3000}
];
let highSalaryCompany = interviewsCompanyList.find(company => company.salary > 4000);
console.log(highSalaryCompany); // Output: {name: "Meta", salary: 5000}

// Using reduce() method to calculate the total salary of all companies
let totalSalary = interviewsCompanyList.reduce((total, company) => total + company.salary, 0);
console.log("Total Salary:", totalSalary); // Output: Total Salary: 20000