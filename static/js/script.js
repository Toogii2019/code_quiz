
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
    title: 'What does HTML stand for?',
    choices: ["Home Tool Markup Language","Hyper Text Markup Language","Hyperlinks and Text Markup Language"],
    answer: 'Hyper Text Markup Language'
  },
  {
    title: 'Who is making the Web standards?',
    choices: ["The World Wide Web Consortium","Microsoft","Google","Mozilla"],
    answer: "The World Wide Web Consortium"
  },
  {
    title: 'Choose the correct HTML element for the largest heading:',
    choices: ["<h6>","<head>","<h1>","<heading>"],
    answer: "<h1>"
  },
  {
    title: 'What is the correct HTML element for inserting a line break?',
    choices: ["<br>", "<lb>", "<break"],
    answer: '<br>'
  },
  {
    title: 'What is the correct HTML for adding a background color?',
    choices: ["<body bg='yellow'>", "<background>yellow</background>", "<body style='background-color:yellow;'"],
    answer: "<body style='background-color:yellow;'"
  },
  {
    title: 'Choose the correct HTML element to define important text',
    choices: ["<b>", "<i>", "<important>","<strong>"],
    answer: "<strong>"
  },
  {
    title: 'Choose the correct HTML element to define emphasized text',
    choices: ["<italic>", "<em>", "<i>"],
    answer: "<em>"
  },
  {
    title: 'What is the correct HTML for creating a hyperlink?',
    choices: ["<a href='https://www.google.com/'>Google</a>", "<a src='https://www.google.com/'>Google</a>", "<a name='https://www.google.com/'>Google</a>", "<a>https://www.google.com/</a>"],
    answer: "<a href='https://www.google.com/'>Google</a>"
  },
  {
    title: 'Which character is used to indicate an end tag?',
    choices: ["*", "^", "/", "<"],
    answer: "/"
  }
  // etc.
];

const cssQuestions = [
  {
    title: 'What does CSS stand for?',
    choices: ["Creative Style Sheets","Colorful Style Sheet","Computer Style Sheet", "Cascading Style Sheet"],
    answer: 'Cascading Style Sheet'
  },
  {
    title: 'What is the correct HTML for referring to an external style sheet?    ',
    choices: ["<link rel='stylesheet' type='text/css' href='mystyle.css'>","<stylesheet>mystyle.css</stylesheet>","<style src='mystyle.css'"],
    answer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
  },
  {
    title: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    choices: ["In the <head> section","At the end of the document","In the <body< section"],
    answer: "In the <head> section"
  },
  {
    title: 'Which HTML tag is used to define an internal style sheet?    ',
    choices: ["<style>", "<script>", "<css>"],
    answer: '<style>'
  },
  {
    title: 'Which HTML attribute is used to define inline styles?',
    choices: ["styles", "class", "style", "font"],
    answer: 'style'
  },
  {
    title: 'Which is the correct CSS syntax?',
    choices: ["body:color=black;", "body {color:black;}", "{body:color=black;}", "{body;color:black;}"],
    answer: 'body {color:black;}'
  },
  {
    title: 'How do you insert a comment in a CSS file?',
    choices: ["// this is a comment", "'this is a comment'", "/* this is a comment */", "// this is a comment //"],
    answer: '/* this is a comment */'
  },
  {
    title: 'Which property is used to change the background color?',
    choices: ["bgcolor", "background-color", "color"],
    answer: 'background-color'
  }
  // etc.
];

function updateScoreBoard(nameOfQuize) {
  var inputNode = document.getElementById("initials-input");
  if (inputNode.value) {
    playerName = inputNode.value;
  }
  else {
    playerName = "Anonymous";
  }
  // console.log("quizButton called with " + currentScore);
  if (localStorage.getItem(`${nameOfQuize}QuizResult`)) {
    currentHighestScore = JSON.parse(localStorage.getItem(`${nameOfQuize}QuizResult`)).score;
  }
  else {
    currentHighestScore = 0;
  }
  if (totalScore > currentHighestScore) {
    today = new Date();
    var player = {
      initial: playerName,
      score: totalScore,
      date: `${today.toDateString()} ${today.toTimeString().split(" ").slice(0, 1).toLocaleString()}`
    }
    localStorage.setItem(`${nameOfQuize}QuizResult`, JSON.stringify(player));
    // console.log(localStorage);
    
    showScoreBoard(quizName);
  }

  location.reload();

}


function showScoreBoard(nameOfQuize) {
  player = JSON.parse(localStorage.getItem(`${nameOfQuize}QuizResult`));
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
      }
      answerChosen = true;
      return;
    }
  }
  answerChosen = false;
  if (!endCalled) {
    alert("At least one answer must be chosen!");
  }
  else {
    answerChosen = true;
  }
}

function endQuiz() {
  endCalled = true;
  resetPage();

  timerStop = true;
  if (timeRemaining < 0) {
    timeRemaining = 0;
  }
  clearInterval(timerInterval);
  totalScore = currentScore + timeRemaining/10;
  // console.log("endquiz called with " + currentScore);
  var iniTials = document.createElement("input");
  iniTials.id = "initials-input";
  iniTials.name = "initials-input";
  iniTials.type = "text";
  iniTials.placeholder = "Your Initials";
  iniTials.setAttribute("class", "center");
  var scoreContainer = document.createElement("div");
  scoreContainer.type = "number";
  scoreContainer.textContent = `Your Quiz Score: ${currentScore}`;
  var timeRemainingContainer = document.createElement("div");
  timeRemainingContainer.type = "number";
  timeEl.textContent = timeRemaining;
  timeRemainingContainer.textContent = `Time Remaining: ${timeRemaining} (${timeRemaining/10} score)`
  var totalScoreContainer = document.createElement("div");
  totalScoreContainer.type = "number";
  totalScoreContainer.textContent = `Your Total Score: ${totalScore}`;
  questionField.appendChild(iniTials);
  answerField.appendChild(scoreContainer);
  answerField.appendChild(timeRemainingContainer);
  answerField.appendChild(totalScoreContainer);

  QuizButton.textContent = "Submit";
}

function displayAnswers(index) {
  answerField.innerHTML = "";
  var quizForm = document.createElement("form");
  quizForm.role = "form";
  quizForm.id="quizfrom";



  myQuestions[index].choices.forEach(function(item, i) {
    var answerContainer = document.createElement("div");
    answerContainer.setAttribute("class", "form-check");

    var answerInput = document.createElement("input");
    answerInput.setAttribute("class", "form-check-input quiz-answers");
    answerInput.setAttribute("id", "choice");
    answerInput.type = "radio";
    answerInput.name = "choice";
    answerInput.value = item;

    var answerLabel = document.createElement("label");
    answerLabel.setAttribute("class", "form-check-label");
    answerLabel.for = "choice";
    answerLabel.textContent = item;
    
    
    answerContainer.appendChild(answerInput);
    answerContainer.appendChild(answerLabel);

    quizForm.appendChild(answerContainer);
  }
  )
  answerField.appendChild(quizForm);
}

function displayQuiz(index) {
  if (index === myQuestions.length) {
    // console.log("Calling endquiz");
    
    if (endCalled) {
      // console.log("endcalled is true");
      updateScoreBoard(quizName);
      return;
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

  clearInterval(timerInterval);
  
  return;
}

function setTime() {
  timerInterval = setInterval(function() {
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
    if (index < myQuestions.length) {
      index++;
    }
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
        quizTypeName.value = quizName;
        quizLandingPage();
        showScoreBoard(quizName);
        
        break;
      case "JS":
        myQuestions = jsQuestions;
        quizName = "Javascript";
        quizTypeName.value = quizName;
        quizLandingPage();
        showScoreBoard(quizName);
        break;
      case "CSS":
        myQuestions = cssQuestions;
        quizName = "CSS";
        quizTypeName.value = quizName;
        quizLandingPage();
        showScoreBoard(quizName);
        break;
      default:
        break;
    }
  } 
})

var totalScore = 0;
var timerInterval;
var endCalled = false;
var timerStop = false;
var correctAnswerChosen = false;
var answerChosen = true;
var timeRemaining = 0;
var index = 0;
var scoreBoardType = document.getElementById("quiz-type-choose");

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

var quizTypeName = document.getElementById("quiztype");
quizTypeName.addEventListener("change", function(event) {showScoreBoard(event.target.value)});
showScoreBoard(quizName);
quizLandingPage();
