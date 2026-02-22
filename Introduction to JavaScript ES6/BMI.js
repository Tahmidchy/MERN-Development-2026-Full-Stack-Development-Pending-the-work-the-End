/*
TODO: Now we are going to testing our BMI calculator. We will be using the following test cases:
1. weight = 70 kg, height = 1.75 m (Expected BMI: 22.86)
*/

// Function to calculate BMI
function calculateBMI(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number' || weight <= 0 || height <= 0) {
        return "Please provide valid weight and height.";
    }
    const bmi = weight / (height * height);
    return `Your BMI is ${bmi.toFixed(2)}.`;
}
// Test case 1
console.log(calculateBMI(70, 1.75)); // Output: Your BMI is 22.86.
// Additional test cases
console.log(calculateBMI(0, 1.75)); // Output: Please provide valid weight and height.
console.log(calculateBMI(70, 0)); // Output: Please provide valid weight and height.
console.log(calculateBMI(-70, 1.75)); // Output: Please provide valid weight and height.
console.log(calculateBMI(70, -1.75)); // Output: Please provide valid weight and height.
console.log(calculateBMI("seventy", 1.75)); // Output: Please provide valid weight and height.
console.log(calculateBMI(70, "one point seventy five")); // Output: Please provide valid weight and height.