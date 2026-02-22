/*
TODO: Control statements using if-else
*/

var height = 180; // in centimeters
if (height > 200) {
    console.log("You are tall!");
} else {
    console.log("You are not that tall.");
}
// TODO: Create a Love Score Calculator 

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log("Your love score is " + loveScore + "%");
if (loveScore > 70) {
    console.log("You love each other like Kanye loves Kanye.");
} else {
    console.log("You go together like oil and water.");
}