var numberOfButtons = document.querySelectorAll(".btn").length;

document.querySelector(".btn").addEventListener("click", function(){
  var buttonInnerHTML = this.innerHTML;
  refresh(buttonInnerHTML);
  sound(buttonInnerHTML);
})

function sound(){
  var dice = new Audio("sounds/dice.mp3");
  dice.play();
}

function refresh(){



// FOR PLAYER 1
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomDiceImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageSource);


// FOR PLAYER 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImageSource2)


// THE IF AND ELSE STATEMENT TO INTERPRETE THE RESULT
if (randomNumber > randomNumber2){
  document.querySelector(".refresh").innerHTML = "PLAYER 1 WINS 👨‍🦰"
} else if (randomNumber2 > randomNumber) {
  document.querySelector(".refresh").innerHTML = "PLAYER 2 WINS 👩"
} else {
  document.querySelector(".refresh").innerHTML = "👨DRAW👩"

}

}
