
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
  QuizButton.textContent = "Start Quiz";
  var subTitle = document.getElementById("quiz");
  subTitle.innerHTML = "";
}

function checkAnswer(index) {
  answer = document.getElementsByClassName("answer");
  for (i=0;i<answer.length;i++) {
    
    if (answer[i].checked) {
      if (answer[i].parentElement.textContent === myQuestions[index-1].answer) {
        currentScore += scoreIncrementStep;
        scoreEl.innerText = currentScore;
        
      }
    }
  }
  
}

function endQuiz() {
  resetPage();
  var iniTials = document.createElement("input");
  iniTials.id = "initials-input";
  iniTials.name = "initials-input";
  iniTials.type = "text";
  iniTials.placeholder = "Your Initials";
  iniTials.setAttribute("class", "center");
  var scoreContainer = document.createElement("div");
  scoreContainer.type = "number";
  scoreContainer.textContent = `Your Score: ${currentScore}`;
  questionField.appendChild(iniTials);
  answerField.appendChild(scoreContainer);
  QuizButton.textContent = "Submit";
  QuizButton.type = "submit";
  QuizButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var playerNameInput = document.querySelector("#initials-input");
    console.log(playerNameInput.value.trim());
    if (playerNameInput) {
      console.log(playerNameInput.value);
    }
    else {
      alert("Enter Your Initials and click Submit");
    }
  })
  return;

}

function displayAnswers(index) {
  answerField.innerHTML = "";
  var quizForm = document.createElement("form");
  quizForm.role = "form";
  quizForm.id="quizfrom";

  myQuestions[index].choices.forEach(function(item, i) {
    var answerLabel = document.createElement("label");
    answerLabel.setAttribute("class", "radiocontainer");
    answerLabel.name = "quiz";
    var answerInput = document.createElement("input");
    answerInput.type = "radio";
    answerInput.name = "answer" + i;
    answerInput.setAttribute("class", "answer");
    answerInput.id = "answer" + i;
    answerLabel.textContent = item;
    answerLabel.appendChild(answerInput);
    quizForm.appendChild(answerLabel);
  }
  )
  answerField.appendChild(quizForm);
  return;
}

function displayQuiz(index) {
  if (index > (myQuestions.length-1)) {
    endQuiz();
    return;
  }
  else if (index == 0) {
    QuizButton.textContent = "Next";
  }
  var questionNumEl = document.createElement("h3");
  questionNumEl.textContent = `Question ${index+1} out of ${myQuestions.length}`
  
  var questionEl = document.createElement("p");
  questionEl.textContent = myQuestions[index].title;
  questionField.innerHTML = "";
  questionField.appendChild(questionNumEl);
  questionField.appendChild(questionEl);
  questionField.setAttribute("class", "left");
  // Displaying Answers
  displayAnswers(index);
}


function quizLandingPage(index) {
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
  if (index > 0) {
    checkAnswer(index);
  }
  displayQuiz(index);
  index++;
}




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
  
  if (element.matches("li")) {
    switch(element.textContent.split(" ")[0]) {
      case "HTML":
        myQuestions = htmlQuestions;
        alert(myQuestions[0].title);
        quizTypeVar = "HTML";
        index = 0;
        quizLandingPage();
        break;
      case "JS":
        myQuestions = jsQuestions;
        alert(myQuestions[0].title)
        quizTypeVar = "Javascript";
        index = 0;
        quizLandingPage();
        break;
      case "CSS":
        myQuestions = cssQuestions;
        alert(myQuestions[0].title)
        index = 0;
        quizTypeVar = "CSS";
        quizLandingPage();

        break;
      default:
        break;
    }
  } 
})




index = 0;
var QuizButton = document.getElementById("start-next-finish");
QuizButton.addEventListener("click", playQuiz);

var myQuestions = jsQuestions;
var questionField = document.getElementById("quiz");
var answerField = document.getElementById("answers");
var timeEl = document.querySelector("#time");
var scoreEl = document.querySelector("#score");

var currentScore = 0;
var highestScore = 100;
var scoreIncrementStep = Math.floor(highestScore/myQuestions.length);
var answer;
quizLandingPage(0);

// setTime();
// i = 0;
