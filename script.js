const quizData = [
  {
    question: `What's the value of PI?`,
    firstOption: `9.8`,
    secondOption: `3.41`,
    thirdOption: `3.14`,
    fourthOption: `42`,
    correctAnswer: `c`
  },
  {
    question: `What's the second book of the trilogy Lord of the Rings?`,
    firstOption: `The fellowship of the ring`,
    secondOption: `unfinished tales`,
    thirdOption: `Lord of the Rings and The Two Towers`,
    fourthOption: `Caves of Steel`,
    correctAnswer: `c`
  },
  {
    question: `Who is the best brazilian player of all time?`,
    firstOption: `Neymar Jr`,
    secondOption: `Romário the little one`,
    thirdOption: `R9 The phenomenon`,
    fourthOption: `Pele`,
    correctAnswer: `d`
  },
  {
    question: `What band wrote Kickapoo?`,
    firstOption: `Guns N' Roses`,
    secondOption: `Tenacious D`,
    thirdOption: `Carlinhos Brown`,
    fourthOption: `Greenday`,
    correctAnswer: `b`
  },
  {
    question: `what falls on it's feet and runs lying down??`,
    firstOption: `The rain!`,
    secondOption: `Snake`,
    thirdOption: `Nothing`,
    fourthOption: `42`,
    correctAnswer: `a`
  },
  {
    question: `How many books Isaac Asimov wrote?`,
    firstOption: `Who is Isaac Asimov`,
    secondOption: `More than 500`,
    thirdOption: `42`,
    fourthOption: `0`,
    correctAnswer: `b`
  }
];

const question = document.getElementById('quizQuestion');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
const submitBtn = document.getElementById('btn');
const radiosArr = document.getElementsByTagName('input');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const modal = document.querySelector('.modal');
const result = document.querySelector('.modal-body');
const closeModalBtn = document.querySelector('.btn-close');
const tryAgainBtn = document.getElementById('tryAgain');

let counter = 0;
let answer = '';
let score = 0;
let currentQuestion = {};
fillTheCard();
function fillTheCard() {
  currentQuestion = quizData[counter];
  if (counter < quizData.length) {
    question.innerHTML = `${currentQuestion.question}`;
    answerA.innerHTML = `${currentQuestion.firstOption}`;
    answerB.innerHTML = `${currentQuestion.secondOption}`;
    answerC.innerHTML = `${currentQuestion.thirdOption}`;
    answerD.innerHTML = `${currentQuestion.fourthOption}`;
  } else {
    modal.classList.add('d-block');
    result.innerHTML = `<p>You got ${score} out of 6 right!</p>`;
  }
}

submitBtn.addEventListener('click', () => {
  for (i = 0; i < radiosArr.length; i++) {
    if (radiosArr[i].checked) {
      answer = radiosArr[i].value;
      if (answer == currentQuestion.correctAnswer) {
        score++;
      }
      radiosArr[i].checked = false;
      counter++;
    }
  }
  fillTheCard();
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('d-block');
});

tryAgainBtn.addEventListener('click', () => {
  modal.classList.remove('d-block');
  window.location.reload();
})
