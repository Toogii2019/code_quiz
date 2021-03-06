function updateScoreBoard(currentQuizName) {
  var quizResult = JSON.parse(localStorage.getItem(`${currentQuizName}QuizResult`));
  if (quizResult) {
    nameOnScoreBoard.textContent = quizResult.player;
    dateOnScoreBoard.textContent = quizResult.date;
    highestScoreOnScoreBoard.textContent = quizResult.score;
  }
  else {
    nameOnScoreBoard.textContent = "No Entry";
    dateOnScoreBoard.textContent = "No Entry";
    highestScoreOnScoreBoard.textContent = "No Entry";
  }
}

function quizLandingPage(quizName, numberOfQuesions, toTalTime) {
  timeEl.textContent = toTalTime;
  scoreEl.textContent = 0;
  scoreBoardName.value = quizName;
  
  quizObj = null;

  clearInterval(timerInterval);
  countDown = myQuestions.length*15;
  resetDom(parentDomObj);
  updateScoreBoard(quizName);
  var childDomObjArray = [{h3: {class: "quiz-type", textContent: quizName}}, {h5: {class: "number-of-questions", textContent: `Number of Questions: ${numberOfQuesions}`}}, {h5: {class: "total-time", textContent: `Time: ${toTalTime} seconds`}}, {p:{innerHTML: `<strong>Penalty:</strong> There is a penalty for each wrong answered quesion, the remaining time will be reduced by 15 seconds when incorrect answer is chosen`}}, {p:{innerHTML: `<strong>Reward:</strong> If the player completes the quiz before time expires, the player will get additional points for each tens of seconds.`}}, {p:{innerHTML: `<strong>Score:</strong> The highest score will be updated in the scoreboard.`}}];
  landingPageDomArray = quizDomCreate(parentDomObj, childDomObjArray);
}


var silentMode = false;
var correctAnswerAudio = document.getElementById("correct-answer");
var incorrectAnswerAudio = document.getElementById("incorrect-answer");
var introVoice = document.getElementById("intro-audio");
var timerInterval;
var defaultResult = {player: "Anonymous", date: "1999-01-01", score: 0};
var nameOnScoreBoard = document.getElementById("scoreboard-initial");
var dateOnScoreBoard = document.getElementById("scoreboard-date");
var highestScoreOnScoreBoard = document.getElementById("scoreboard-score");

var parentDomObj = document.getElementsByClassName("card-body")[0]; 
var timeEl = document.getElementById("time");
var scoreEl = document.getElementById("score");
var scoreBoardName = document.getElementById("score-board-type");
var quizName = "Javascript";
var myQuestions = jsQuestions;
var numberOfQuesions = myQuestions.length;
var toTalTime = numberOfQuesions*15;

quizLandingPage(quizName, numberOfQuesions, toTalTime);

var quizTypeEl = document.getElementById("quiz-types");

quizTypeEl.addEventListener("click", function (event) {
  var element = event.target;
  QuizButton.textContent = "Start Quiz";
  if (element.matches("li")) {
    switch(element.textContent.split(" ")[0]) {
      case "HTML":
        myQuestions = htmlQuestions;
        numberOfQuesions = myQuestions.length;
        toTalTime = numberOfQuesions*15
        quizName = "HTML";
        quizLandingPage(quizName, numberOfQuesions, toTalTime);
        break;
      case "JS":
        myQuestions = jsQuestions;
        numberOfQuesions = myQuestions.length;
        toTalTime = numberOfQuesions*15
        quizName = "Javascript";
        quizLandingPage(quizName, numberOfQuesions, toTalTime);
        break;
      case "CSS":
        myQuestions = cssQuestions;
        numberOfQuesions = myQuestions.length;
        toTalTime = numberOfQuesions*15
        quizName = "CSS";
        quizLandingPage(quizName, numberOfQuesions, toTalTime);
        break;
      case "Play":
        console.log("Playing");
        if (!silentMode) {
          introVoice.play();
        }
        element.textContent = "Pause Introduction";
        break;
      case "Pause":
        console.log("pausing");
        introVoice.pause();
        element.textContent = "Play Introduction";
        break;
      case "Silent":
        if (silentMode) {
          console.log("Silent mode off");
          silentMode = false;
          element.textContent = "Silent Mode Off";
        }
        else {
          console.log("Entering silent mode");
          silentMode = true;
          introVoice.pause();
          element.textContent = "Play Introduction";
          element.textContent = "Silent Mode On";
        }
      default:
        break;
    }
  } 
})

function pushContainer(event) {
  var bodySection = document.getElementById("body-section-id");
  if ($(bodySection).hasClass("body-section")) {
    bodySection.className = "body-section-open";
    $(bodySection).removeClass("body-section");
    
  }
  else if ($(bodySection).hasClass("body-section-open")) {
    bodySection.className = "body-section";
    $(bodySection).removeClass("body-section-open");
    
  }
}

function playQuiz(event) {
  // console.log(quizObj);
  if (!quizObj) {
    quizObj = newQuizObj(quizName, toTalTime, myQuestions);
    quizObj.run();
  } 
  else {
    if (quizObj.endCalled) {
      quizObj.submitScore();
      return;
    }

    quizObj.index ++;
    quizObj.run();
    scoreEl.textContent = quizObj.current_score;
  }

}

var quizObj = null;
var QuizButton = document.getElementById("start-next-finish");

QuizButton.addEventListener("click", playQuiz); 


scoreBoardName.addEventListener("change", function(event) {
  updateScoreBoard(event.target.value);
})


var hamburgerButton = document.getElementById("hamburger-button");

hamburgerButton.addEventListener("click", pushContainer);

function reSizeScreen() {

  if (screen.width > 768) {
    var bodySection = document.getElementById("body-section-id");
    if ($(bodySection).hasClass("body-section-open")) {
      bodySection.className = "body-section";
      $(bodySection).removeClass("body-section-open");
      $(hamburgerButton).ClassName = "navbar-toggler collapsed";
      $(hamburgerButton).attr("aria-expanded", "false");
     $(".my-nav-div").attr("class", "navbar-collapse my-nav-div collapse");  
}      
}
}
