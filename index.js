var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;
player1 = document.querySelector(".img1");
player1.setAttribute("src", "images/dice" + randomNumber1+".png");
player2 = document.querySelector(".img2");
player2.setAttribute("src", "images/dice" + randomNumber2+".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins 🏆";
}else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
}else{
    document.querySelector("h1").textContent = "Player 2 Wins 🏆";
}