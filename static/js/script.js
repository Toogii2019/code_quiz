
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

function resetPage() {
  answerField.innerHTML = "";
  startQuizButton.textContent = "Start Quiz";
  var subTitle = document.getElementById("quiz");
  subTitle.innerHTML = "";
}

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
  }
  var questionEl = document.createElement("h5");
  questionEl.textContent = myQuestions[index].title;
  questionEl.setAttribute("class", "questions");
  questionField.innerHTML = "";
  questionField.appendChild(questionEl);
  // Displaying Answers
  displayAnswers(index);
}


function quizLandingPage() {
  resetPage();
  var subTitle = document.getElementById("quiz");
  var h3 = document.createElement("h3")
  h3.innerText = `${quizTypeVar} quiz`;
  subTitle.innerHTML = "";
  subTitle.appendChild(h3);
  var h5 = document.createElement("h5");
  h5.innerText = `Number of Questions: ${myQuestions.length}`;
  subTitle.appendChild(h5);
  var h5 = document.createElement("h5");
  h5.innerText = `Time: ${myQuestions.length*15} seconds`;
  subTitle.appendChild(h5);
}

function playQuiz(event) {
  displayQuiz(index);
  index++;
}

index = 0;
var startQuizButton = document.getElementById("start-next");
startQuizButton.addEventListener("click", playQuiz);

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

var quizTypeVar = "Javascript";
var quizTypeEl = document.getElementById("quiz-types");
quizTypeEl.addEventListener("click", function (event) {
  var element = event.target;
  
  console.log(element.textContent);
  if (element.matches("li")) {
    switch(element.textContent.split(" ")[0]) {
      case "HTML":
        myQuestions = htmlQuestions;
        alert(myQuestions[0].title);
        quizTypeVar = "HTML";
        quizLandingPage();
        break;
      case "JS":
        myQuestions = jsQuestions;
        alert(myQuestions[0].title)
        quizTypeVar = "Javascript";
        quizLandingPage();
        break;
      case "CSS":
        myQuestions = cssQuestions;
        alert(myQuestions[0].title)
        quizTypeVar = "CSS";
        quizLandingPage();

        break;
      default:
        break;
    }
  } 
})

quizLandingPage();



// setTime();
// i = 0;
