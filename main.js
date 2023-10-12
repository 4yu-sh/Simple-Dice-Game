var diceForPlayerOne = Math.floor(Math.random()*6)+ 1;
var diceForPlayerTwo = Math.floor(Math.random()*6)+ 1;


console.log("Player One: "+ diceForPlayerOne);
var diceOne = document.querySelector(".dice img.img1");
diceOne.setAttribute("src","images/dice"+diceForPlayerOne+".png");

console.log("Player Two: "+ diceForPlayerTwo);  
var diceTwo = document.querySelector(".dice img.img2");
diceTwo.setAttribute("src","images/dice"+diceForPlayerTwo+".png");

var winnerTitle = document.querySelector(".container h1");

if( diceForPlayerOne > diceForPlayerTwo ){
    winnerTitle.innerText = "🚩Player One Wins!";    
}

else if( diceForPlayerTwo > diceForPlayerOne ){
    winnerTitle.innerText = "Player Two Wins!🚩";
}

else{
    winnerTitle.innerText = "Spin Again :)";
}