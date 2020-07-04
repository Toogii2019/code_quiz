
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
    answer: "ESLint"
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

function updateScoreBoard() {
  var inputNode = document.getElementById("initials-input");
  if (inputNode.value) {
    playerName = inputNode.value;
  }
  else {
    playerName = "Anonymous";
  }
  // console.log("quizButton called with " + currentScore);
  if (localStorage.getItem("player")) {
    currentHighestScore = JSON.parse(localStorage.getItem("player")).score;
  }
  else {
    currentHighestScore = 0;
  }
  if (currentScore > currentHighestScore) {
    today = new Date();
    var player = {
      initial: playerName,
      score: currentScore,
      date: `${today.toDateString()} ${today.toTimeString().split(" ").slice(0, 1).toLocaleString()}`
    }
    localStorage.setItem('player', JSON.stringify(player));
    // console.log(localStorage);
    
    showScoreBoard();
  }

  location.reload();

}


function showScoreBoard() {
  player = JSON.parse(localStorage.getItem('player'));
  if (!player) {
    return;
  }
  initialOnScoreBoard.textContent = player.initial;
  scoreOnScoreBoard.textContent = player.score;  
  dateOnScoreBoard.textContent = player.date;

}

function resetPage() {
  answerField.innerHTML = "";
  QuizButton.textContent = "Start Quiz";
  QuizButton.setAttribute("id", "start-next-finish");
  var subTitle = document.getElementById("quiz");
  subTitle.innerHTML = "";
}
function penaltyApply() {
  if (timeRemaining > 15) {
    timeRemaining -= 15;
  }
  else {
    timeRemaining = 0;
    timerStop = true;
  }
}

function checkAnswer(index) {
  answer = document.getElementsByClassName("quiz-answers");
  for (i=0;i<answer.length;i++) {
    
    if (answer[i].checked) {
      if (answer[i].parentElement.textContent === myQuestions[index-1].answer) {
        currentScore += scoreIncrementStep;
        scoreEl.innerText = currentScore;
        correctAnswerChosen = true;
      }
      else {
        correctAnswerChosen = false;
        penaltyApply();
        return;
      }
      answerChosen = true;
    }
  }
  if (!answerChosen) {
    alert("At least one answer must be chosen!");
  }
}

function endQuiz() {
  endCalled = true;
  resetPage();

  timerStop = true;
  if (timeRemaining < 0) {
    timeRemaining = 0;
  }
  currentScore += timeRemaining/10;
  // console.log("endquiz called with " + currentScore);

  var iniTials = document.createElement("input");
  iniTials.id = "initials-input";
  iniTials.name = "initials-input";
  iniTials.type = "text";
  iniTials.placeholder = "Your Initials";
  iniTials.setAttribute("class", "center");
  var scoreContainer = document.createElement("div");
  scoreContainer.type = "number";
  scoreContainer.textContent = `Your Score: ${currentScore}`;
  var timeRemainingContainer = document.createElement("div");
  timeRemainingContainer.type = "number";
  timeRemainingContainer.textContent = `Time Remaining: ${timeRemaining} (${timeRemaining/10} score)`
  questionField.appendChild(iniTials);
  answerField.appendChild(scoreContainer);
  answerField.appendChild(timeRemainingContainer);
  QuizButton.textContent = "Submit";
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
    answerInput.setAttribute("class", "quiz-answers");
    answerInput.id = "answer" + i;
    answerLabel.textContent = item;
    answerLabel.appendChild(answerInput);
    quizForm.appendChild(answerLabel);
  }
  )
  answerField.appendChild(quizForm);
}

function displayQuiz(index) {
  if (index === myQuestions.length) {
    // console.log("Calling endquiz");
    if (endCalled) {
      // console.log("endcalled is true");
      updateScoreBoard();
    }
    else {
     endQuiz();
     return;
    }
  }
  else if (index === 0) {
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


function quizLandingPage() {
  resetPage();
  index = 0;
  timeRemaining = myQuestions.length*15;;
  timeEl.textContent = timeRemaining;
  QuizButton.setAttribute("id", "start-next-finish");
  var subTitle = document.getElementById("quiz");
  var h3 = document.createElement("h3")
  h3.innerText = `${quizName} quiz`;
  subTitle.innerHTML = "";
  subTitle.appendChild(h3);
  var h5 = document.createElement("h5");
  h5.innerText = `Number of Questions: ${myQuestions.length}`;
  subTitle.appendChild(h5);
  var h5 = document.createElement("h5");
  h5.innerText = `Time: ${myQuestions.length*15} seconds`;
  var penaltyNote = document.createElement("p");
  penaltyNote.textContent = "Penalty: There is a penalty for each wrong answered quesion, you will get -15 seconds from your timer.";
  var rewardNote = document.createElement("p");
  rewardNote.textContent = "Reward: If you manage to complete the quiz before time expires, you will get additional points.";
  var instruction = document.createElement("p");

  instruction.textContent = "Score: The highest score will be updated in the scoreboard.";

  subTitle.appendChild(h5);
  subTitle.appendChild(penaltyNote);
  subTitle.appendChild(rewardNote);
  subTitle.appendChild(instruction);
  return;
}

function setTime() {
  var timerInterval = setInterval(function() {
    if (timerStop === true) {
      clearInterval(timerInterval);
    }
    timeRemaining--;
    // console.log(timeRemaining);

    if(timeRemaining < 0) {
      clearInterval(timerInterval);
      timeEl.textContent = 0;
      if (timerStop === false) {
        endQuiz();
      }
      // sendMessage();
    }
    else{
      timeEl.textContent = timeRemaining;
    }

  }, 1000);
}

function playQuiz(event) {
  if (index > 0) {
    checkAnswer(index);
  }
  else if (index === 0) {
    setTime();
  }
  if (answerChosen) {
    displayQuiz(index);
    index++;
  }
}

var quizName = "Javascript";
var quizTypeEl = document.getElementById("quiz-types");
quizTypeEl.addEventListener("click", function (event) {
  var element = event.target;
  index = 0;
  currentScore = 0;
  if (element.matches("li")) {
    switch(element.textContent.split(" ")[0]) {
      case "HTML":
        myQuestions = htmlQuestions;
        quizName = "HTML";
        quizLandingPage();
        break;
      case "JS":
        myQuestions = jsQuestions;
        quizName = "Javascript";
        quizLandingPage();
        break;
      case "CSS":
        myQuestions = cssQuestions;
        quizName = "CSS";
        quizLandingPage();
        break;
      default:
        break;
    }
  } 
})

var endCalled = false;
var timerStop = false;
var correctAnswerChosen = false;
var answerChosen = true;
var timeRemaining = 0;
var index = 0;
var QuizButton = document.getElementById("start-next-finish");
QuizButton.addEventListener("click", playQuiz);

var myQuestions = jsQuestions;
var questionField = document.getElementById("quiz");
var answerField = document.getElementById("answers");
var timeEl = document.querySelector("#time");
var scoreEl = document.querySelector("#score");

var currentScore = 0;
var highestScore = 100;
var currentHighestScore = 0;
var scoreIncrementStep = Math.floor(highestScore/myQuestions.length);
var answer;
var initialOnScoreBoard = document.getElementById("scoreboard-initial");
// console.log(initialOnScoreBoard);
var scoreOnScoreBoard = document.getElementById("scoreboard-score");
var dateOnScoreBoard = document.getElementById("scoreboard-date");

var quizTypeOnScoreBoard = document.getElementById("scoreboard-date");


showScoreBoard();
quizLandingPage();

// setTime();
// i = 0;
