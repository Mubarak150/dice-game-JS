//for img 1
randomNumber1 = (Math.floor(Math.random()*6))+ 1;

var imageName = "images/dice" + randomNumber1 + ".png" 

document.querySelector(".img1").src=imageName;

//for img 2
randomNumber2 = (Math.floor(Math.random()*6))+ 1;

var imageName = "images/dice" + randomNumber2 + ".png" 

document.querySelector(".img2").src=imageName;

//who won???
if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 won";  
}

else if (randomNumber2 < randomNumber1) {
    document.querySelector("h1").innerHTML="Player 1 won";  
}

else {
    document.querySelector("h1").innerHTML="It's a draw!!!";  
}