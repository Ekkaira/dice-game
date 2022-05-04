var randomNumber1 = Math.floor(Math.random() * 6) + 1; //number between 1 - 6 for player 1
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //image between dice1.png - dice6.png


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //number between 1 - 6 for player 2
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //image between dice1.png - dice6.png

	// if player 1 wins
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "🚩Player One Wins!"
}
	//if player 2 wins
	 else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").innerHTML = "Player Two Wins!🚩"
}	
	//draw
	else {
	document.querySelector("h1").innerHTML = "Draw!😃"
};



//reload button
document.querySelector(".reloadButton").addEventListener("click", function(){
	document.location.reload();
  })