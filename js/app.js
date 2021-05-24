'use strict';


alert('Answer the next 5 questions with yes/no or y/n ...');

let ownerLocation = prompt('Do i live in Amman ?');
ownerLocation = ownerLocation.toLowerCase();
if( ownerLocation === 'yes' || ownerLocation === 'y') {

  // console.log("No I live in Ma'an");
  alert("No I live in Ma'an");

}else{

  // console.log("correct I live in Ma'an");
  alert("correct I live in Ma'an");

}


let ownerHobby = prompt('Do I like video games ?');
ownerHobby = ownerHobby.toLowerCase();
if( ownerHobby === 'yes' || ownerHobby === 'y') {

  // console.log('You bet, I love video games');
  alert('You bet, I love video games');

}else{

  // console.log('Really, I thought you know me more 😭');
  alert('Really, I thought you know me more 😭');
}

let ownerPet = prompt('Do I have any pets ?');
ownerPet = ownerPet.toLowerCase();
if( ownerPet === 'yes' || ownerPet === 'y') {

  // console.log('Correct, I have a cat names Blacky, I love this guy');
  alert('Correct, I have a cat names Blacky, I love this guy');

}else{

  // console.log('Wrong answer, my cat Blacky would be mad at you &#58587 ');
  alert('Wrong answer, my cat Blacky would be mad at you 😺 ');

}

let ownerCar = prompt('Do i have a car ?');
ownerCar = ownerCar.toLowerCase();
if( ownerCar === 'yes' || ownerCar === 'y') {

  // console.log('Correct, I have a Mitsubishi Galant 2.0 2006 car');
  alert('Correct, I have a Mitsubishi Galant 2.0 2006 car');

}else{

  // console.log('Wrong answer, I have a Mitsubishi Galant 2.0 2006 car, VROOM VROOM my friend :D ');
  alert('Wrong answer, I have a Mitsubishi Galant 2.0 2006 car, VROOM VROOM my friend :D ');

}

let ownerEyes = prompt('Do I wear glasses ?');
ownerEyes = ownerEyes.toLowerCase();
if( ownerEyes === 'yes' || ownerEyes === 'y') {

  // console.log('Correct, I wear glasses because im short sight');
  alert('Correct, I wear glasses because im short sighted');

}else{

  // console.log('Wrong answer, I wear glasses because im short sighted');
  alert('Wrong answer, I wear glasses because im short sighted');

}

let userName = localStorage.getItem("username")
document.getElementById("h1").innerHTML = `You have finished the quiz ${userName}`
