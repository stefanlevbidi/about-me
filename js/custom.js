"use strict";

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})


let question1 = confirm("Hello stranger,ready for adventure?");

if (question1 == true) {
  alert("Greaaaaaaat!");
} else {
  alert("Well.... while you're here, we will carry on haahaa");
}

let colour = prompt("What is your favourite colour?");

switch (colour.toLowerCase()) {
  case "purple":
    alert("I know you chose purple, because I'm smart");
    break;
  case "grey":
    alert("Great color but... are you really that sad?");
    break;
  default:
    alert(
      "Really? are you making up colors now? let's try purple or gray"
    );
}
let question2 = confirm("Do you like football?");
if (question2 == true) {
  alert("I don't !");
} else {
  alert("You should!");
}
let question3 = confirm("Do you like  riding a bike?");
if (question3 == true) {
  alert("Cool... I wish aswell but I've never had one");
} else {
  alert("You should learn!");
}
let question4 = confirm("Have you ever been in Liverpool?");
if (question4 == true) {
  alert("Then why did you leave,ha?");
} else {
  alert("Up to you... but you won't find a better city!");
}
function guessQuestion() {
	let guessQuestion = prompt("what number between 10 and 30 am i thinking at, you can have 4 guesses . ");
	let attempts = 4
	while (attempts > 0) { // if incorrect
	  if (guessQuestion > 13) {
		alert("try lower " + attempts + " attempts left ");
		--attempts
		guessQuestion = prompt("what number between 10 and 30 am i thinking of?");
	  } else if (guessQuestion < 13) {
		alert("try a higher number " + attempts + " attempts left ");
		--attempts
		guessQuestion = prompt("what number between 10 and 30 am i thinking of?");
	  } else if (guessQuestion == 13) { // if correct
		  console.log("nice, thats my number ");
		  attempts = 0
	  }
	}
  }
guessQuestion();
  
  function guessQuest(){

	let question = prompt("What do you train in the gym?");
  
  let answers = ["chest","back","legs","arms","shoulders"];
  let attempts = 5;
  
  while(attempts > 0) {
	for(let i = 0; i < answers.length; i++) {
	  if(question == answers[i]){
		alert("Great, that's a great exercise")
		attempts = 0;
	  }
	}
	if(attempts > 0) {
	  question = prompt("C'mon, you can think of a better exercise, try again")
	  attempts--;
	}
  }
   }
   guessQuest();


   function guessQuest1(){

	let question = prompt("Guess my favourite country: Spain, Italy, Romania, Germany, Austria, Switzerland");
  
  let answers = ["spain","italy","romania","germany","austria", "switzerland"];
  let attempts = 6;
  
  while(attempts > 0) {
	for(let i = 0; i < answers.length; i++) {
	  if(question == answers[i]){
		alert("Great, I love this country")
		attempts = 0;
	  }
	}
	if(attempts > 0) {
	  question = prompt("C'mon, you can think of a better country")
	  attempts--;
	}
  }
   }

   guessQuest1();
