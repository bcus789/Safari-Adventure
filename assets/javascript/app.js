$(document).ready(function() {
const chipSound = new Audio("assets/animal-sex-sounds/chipmunk sex.mp3");
const stagSound = new Audio("assets/animal-sex-sounds/red stag sex.mp3");
const turkeySound = new Audio("assets/animal-sex-sounds/turkey sex 1.mp3");
const alsoTurkeySound = new Audio("assets/animal-sex-sounds/turkey sex 2.mp3");
const alpacaSound = new Audio("assets/animal-sex-sounds/alpaca sex.mp3");
const dinoSound = new Audio("assets/animal-sex-sounds/dinosaur sex.mp3");
const guineaSound = new Audio("assets/animal-sex-sounds/guinea pig sex.mp3");
const mystSound = new Audio("assets/animal-sex-sounds/mystery sex.mp3");

  

  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            window.location.href = "end-game.html";
        }
    }, 1000);
}

jQuery(function ($) {
    let seconds= 39,
        display = $('#time');
    startTimer(seconds, display);
});


  $("#alpaca").click(e => alpacaSound.play());
  $("#stag").click(e => stagSound.play());
  $("#turkey").click(e => turkeySound.play());
  $("#turkey2").click(e => alsoTurkeySound.play());
  $("#chipmunk").click(e => chipSound.play());
  $("#dinosaur").click(e => dinoSound.play());
  $("#guinea").click(e => guineaSound.play());
  $("#mystery").click(e => mystSound.play());

  
  
  
  function onSubmit(){
    console.log("its working:")
  var score = 0
    
   document.getElementsByName("q1")
    if(q1.value == "c"){
        score++
      }
   document.getElementsByName("q2")
   if(q2.value == "c"){
    score++
  } 
   document.getElementByName("q3")
   if(q3.value == "d"){
    score++
  } 
   document.getElementByName("q4")
   if(q4.value=="b"){
    score++
  } 
   document.getElementByName("q5")
   if(q5.value == "c"){
    score++
  } 
   document.getElementByName("q6")
   if(q6.value == "d"){
    score++
  } 
    document.getElementByName("q7")
   if(q7.value == "a"){
    score++
  }
   document.getElementByName("q8")
   if(q8.value == "d"){
    score++
  }  
  console.log(score)
  }
  //document.getElementById("submit").onclick = score();
  //document.getElementById("score").innerHTML = "Your creep score was " + correct + "out of 8"
  
});


  
 
/*
let correct = 0

function check(){
let question1 = document.sexPage.quiz.q1.value;
let question2 = document.sexPage.quiz.q2.value;
let question3 = document.sexPage.quiz.q3.value;
let question4 = document.sexPage.quiz.q4.value;
let question5 = document.sexPage.quiz.q5.value;
let question6 = document.sexPage.quiz.q6.value;
let question7 = document.sexPage.quiz.q7.value;
let question8 = document.sexPage.quiz.q8.value;
let correct = 0

if (question1 == "c") {
  correct++;
}
if (question2 == "c") {
  correct++;
}
if (question3 == "d") {
  correct++;
}
if (question4 == "b") {
  correct++;
}
if (question5 == "c") {
  correct++;
}
if (question6 == "d") {
  correct++;
}
if (question7 == "a") {
  correct++;
}
if (question8 == "d") {
  correct++;
}
document.getElementById("score").innerHTML = "Your creep score was " + correct + "out of 8"
}
})


 const myQuestions = [
    {
      question: "Whats that sound?",
      answers: {
        a: "",
        b: "",
        c: "Chipmunk",
        d: "",
      },
      correctAnswer: "c"
    },
    {
      question: "Whats that sound?",
      answers: {
        a: "",
        b: "",
        c: "Red Stag",
        d: "",
      },
      correctAnswer: "c"
    },
    {
      question: "Whats that sound?",
      answers: {
        a: "",
        b: "",
        c: "",
        d: "Turkey",
      },
      correctAnswer: "d"
    }
    {
        question: "Whats that sound?",
        answers: {
          a: "",
          b: "also Turkey",
          c: "",
          d: "",
        },
        correctAnswer: "b"
      }
      {
        question: "Whats that sound?",
        answers: {
          a: "",
          b: "",
          c: "Alpaca",
          d: "",
        },
        correctAnswer: "c"
      }
      {
        question: "Whats that sound?",
        answers: {
          a: "",
          b: "Dinosaur",
          c: "",
          d: "",
        },
        correctAnswer: "d"
      }
      {
        question: "Whats that sound?",
        answers: {
          a: "Guinea Pig",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "a"
      }
      {
        question: "Whats that sound?",
        answers: {
          a: "",
          b: "",
          c: "",
          d: "???",
        },
        correctAnswer: "d"
      } */