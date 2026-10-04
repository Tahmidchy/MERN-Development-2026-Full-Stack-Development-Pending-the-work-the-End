/*
Player 1 and Player 2 will roll a dice and the player with the higher number wins. If both players roll the same number, it is a draw.
*/

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomImageSource1 = "images/" + randomDiceImage1;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

/*
Player 1 and Player 2 will roll a dice and the player with the higher number wins. If both players roll the same number, it is a draw.
*/

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


/*
Now we are create a program which player are winner or draw. If player 1 wins, the heading will change to "Player 1 Wins!" and if player 2 wins, the heading will change to "Player 2 Wins!". If it is a draw, the heading will change to "Draw!".
*/

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩Draw!";
}