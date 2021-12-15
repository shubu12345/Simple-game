 // Generating a random number from 1 - 6
 var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 var imageDice1 = "dice" + randomNumber1 + ".png"; // attaching images to image1
 var imageSouce1 = "images/" + imageDice1; // image is attch to source

 // set a image with new image
 var image1 = document.querySelectorAll("img") [0];
 image1.setAttribute("src", imageSouce1);

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 var imageDice2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img") [1].setAttribute("src", imageDice2);
 

 
 // player 1 wins
 if(randomNumber1 > randomNumber2)
 {
     document.querySelector("h1").innerHTML = "Player 1 Wins";
 }
 // player 2 wins
 else if(randomNumber2 > randomNumber1)
 {
     document.querySelector("h1").innerHTML = "Player 2 Wins";
 }

 // match tie
 else {
     document.querySelector("h1").innerHTML = "match tie😁";
 }