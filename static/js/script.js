
const jsQuestions = [
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


const htmlQuestions = [
  {
    title: 'Who invented HTML?',
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

const cssQuestions = [
  {
    title: 'Who invented CSS?',
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

function displayAnswers(index) {
  answerField.innerHTML = "";
  myQuestions[index].choices.forEach(function(item, i) {
  var answerEl = document.createElement("p");
  answerEl.textContent = item;
  answerEl.setAttribute("class", "answers");
  answerField.appendChild(answerEl);
})
}

function displayQuiz(index) {
  if (index == myQuestions.length) {
    return;
  }
  else if (index == 0) {
    startQuizButton.textContent = "Next";
    var questionEl = document.createElement("h5");
    questionEl.textContent = myQuestions[index].title;
    questionEl.setAttribute("class", "questions");
    questionField.innerHTML = "";
    questionField.appendChild(questionEl);
    // Displaying Answers
    displayAnswers(index);
  }
  else {
    questionField.textContent = myQuestions[index].title;
    displayAnswers();
  }
}


function QuizLandingPage() {
  var subTitle = document.getElementById("quiz");
  var h3 = document.createElement("h3")
  h3.innerText = "Javascript Quiz";
  subTitle.appendChild(h3);
}

function playQuiz(event) {
  index = 0;
  displayQuiz(index);
}

//Events
var startQuizButton = document.getElementById("start-next");
startQuizButton.addEventListener("click", playQuiz);
// var nextButton = document.getElementById("next");
// nextButton.addEventListener("click", playQuiz);


var myQuestions = jsQuestions;
var questionField = document.getElementById("quiz");
var answerField = document.getElementById("answers");
var timeEl = document.querySelector("#time");



// var secondsLeft = myQuestions.length*15;


// function displayQuestion(i) {
//   questionField.innerText = myQuestions[i].question;
// }

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     // alert("Hi");

//     timeEl.textContent = secondsLeft;

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       // sendMessage();
//     }

//   }, 1000);
// }


var quizType = document.getElementById("quiz-types");
quizType.addEventListener("click", function (event) {
  var element = event.target;
  
  console.log(element.textContent);
  if (element.matches("li")) {
    switch(element.textContent.split(" ")[0]) {
      case "HTML":
        myQuestions = htmlQuestions;
        alert(myQuestions[0].title)

        break;
      case "JS":
        myQuestions = jsQuestions;
        alert(myQuestions[0].title)


        break;
      case "CSS":
        myQuestions = cssQuestions;
        alert(myQuestions[0].title)

        break;
      default:
        break;
    }
  } 
})

QuizLandingPage();



// setTime();
// i = 0;
