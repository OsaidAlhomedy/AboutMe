'use strict';

let userName = prompt('please enter your name');

alert('Welcome to my site ' + userName );

localStorage.setItem("username",userName);