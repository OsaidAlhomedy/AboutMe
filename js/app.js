'use strict';

// it is just a comment

let score=0;

function fivQues(){
  alert('Answer the next 5 questions with yes/no or y/n ...');

  let ownerLocation = prompt('Do i live in Amman ?');
  ownerLocation = ownerLocation.toLowerCase();
  if( ownerLocation === 'yes' || ownerLocation === 'y') {

    // console.log("No I live in Ma'an");
    alert("No I live in Ma'an");

  }else{

    // console.log("correct I live in Ma'an");
    alert("correct I live in Ma'an");
    score++;

  }


  let ownerHobby = prompt('Do I like video games ?');
  ownerHobby = ownerHobby.toLowerCase();
  if( ownerHobby === 'yes' || ownerHobby === 'y') {

    // console.log('You bet, I love video games');
    alert('You bet, I love video games');
    score++;

  }else{

    // console.log('Really, I thought you know me more 😭');
    alert('Really, I thought you know me more 😭');
  }

  let ownerPet = prompt('Do I have any pets ?');
  ownerPet = ownerPet.toLowerCase();
  if( ownerPet === 'yes' || ownerPet === 'y') {

    // console.log('Correct, I have a cat names Blacky, I love this guy');
    alert('Correct, I have a cat names Blacky, I love this guy');
    score++;

  }else{

    // console.log('Wrong answer, my cat Blacky would be mad at you &#58587 ');
    alert('Wrong answer, my cat Blacky would be mad at you 😺 ');

  }

  let ownerCar = prompt('Do i have a car ?');
  ownerCar = ownerCar.toLowerCase();
  if( ownerCar === 'yes' || ownerCar === 'y') {

    // console.log('Correct, I have a Mitsubishi Galant 2.0 2006 car');
    alert('Correct, I have a Mitsubishi Galant 2.0 2006 car');
    score++;

  }else{

    // console.log('Wrong answer, I have a Mitsubishi Galant 2.0 2006 car, VROOM VROOM my friend :D ');
    alert('Wrong answer, I have a Mitsubishi Galant 2.0 2006 car, VROOM VROOM my friend :D ');

  }

  let ownerEyes = prompt('Do I wear glasses ?');
  ownerEyes = ownerEyes.toLowerCase();
  if( ownerEyes === 'yes' || ownerEyes === 'y') {

    // console.log('Correct, I wear glasses because im short sight');
    alert('Correct, I wear glasses because im short sighted');
    score++;

  }else{

    // console.log('Wrong answer, I wear glasses because im short sighted');
    alert('Wrong answer, I wear glasses because im short sighted');

  }

  let userName = localStorage.getItem('username');
  document.getElementById('h1').innerHTML = `You have finished the quiz ${userName}`;
}


function numGussGame(){
  alert('Now we will play a guessing game');
  const rightNum = 7 ;

  for(let i = 1; i<= 4 ; i++){

    let guessNum = prompt('Try to guess the number, HINT: the number is between 0-10');
    guessNum = Number(guessNum);

    if(guessNum === rightNum){
      alert('You guessed right');
      score++;
      break;
    }else if (guessNum < rightNum){
      alert('You are lower than the number');
    }else if (guessNum > rightNum){
      alert('you are higher than the number');
    }

    if(i === 4){
      alert(`You exhausted your attempts, the right answer is ${rightNum}`);

    }

  }
}

function guessColor(){

  const colorArr = ['black','red','white'];

  guessGame:

  for(let i = 1; i<= 6 ; i++){

    let guessColor = prompt('Try to guess my favorite color ?').toLowerCase();

    for(let index = 0 ; index < colorArr.length; index++ ){
      if(guessColor === colorArr[index]){
        alert('You guessed right');
        score++;
        break guessGame;
      }
    }
  }

  alert(`The correct answers are ${colorArr}`);
}

fivQues();

numGussGame();

guessColor();

alert(`your score is ${score}`);

