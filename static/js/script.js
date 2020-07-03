
var jsQuestions = [
  {
    title: 'Who invented JavaScript?',
    choices: ["Douglas Crockford","Sheryl Sandberg","Brendan Eich"],
    answer: 'Brendan Eich'
  },
  {
    title: 'Which one of these is a JavaScript package manager?',
    choices: ["Node.js","TypeScript","npm"],
    answer: "npm"
  },
  {
    title: 'Which tool can you use to ensure code quality?',
    choices: ["Angular","jQuery","RequireJS","ESLint"],
    answer: "ESlint"
  },
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses'
  }
  // etc.
];

function jsQuizLandingPage() {
  
}


var questionField = document.getElementById("question");
var answerField = document.getElementById("answer");
var myQuestions = questions;

var timeEl = document.querySelector("#time-remaining");
var mainEl = document.getElementById("main");



// var secondsLeft = myQuestions.length*15;


// function displayQuestion(i) {
//   questionField.innerText = myQuestions[i].question;
// }

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    // alert("Hi");

    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      // sendMessage();
    }

  }, 1000);
}



// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }


setTime();
i = 0;
