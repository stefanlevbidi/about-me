"use strict";

let question1 = confirm("Do you have a dog")
console.log(question1)

if(question1 == true) {
    console.log("Let's get ready to RUMBLE!")
}else {
    console.log("Ah well")
}

let colour = prompt("What is your favourite color?")

switch(colour) {
case "red":
    console.log("Your favourite color was red");
    break;
case "green":
    console.log("Nice, Good, choice");
    break;
default:
    console.log("Pretty sure that color doesn't exist. Have you thought about red or green?");
}