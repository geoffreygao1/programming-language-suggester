//Business Logic
//tallyScore will collect the radioButton scores and output an answer
function tallyScore(event) {
  event.preventDefault();

  let q1Answer = document.querySelector('input[name="q1"]:checked').value;
  let q2Answer = document.querySelector('input[name="q2"]:checked').value;
  let q3Answer = document.querySelector('input[name="q3"]:checked').value;
  let q4Answer = document.querySelector('input[name="q4"]:checked').value;
  let q5Answer = document.querySelector('input[name="q5"]:checked').value;

  let submission = q1Answer + q2Answer + q3Answer + q4Answer + q5Answer;

  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < submission.length; i++) {
    if (submission[i] === "a") {
      a++;
    } else if (submission[i] === "b") {
      b++;
    } else if (submission[i] === "c") {
      c++;
    }
  }

  let output = "";

  if (a === b && b === c) {
    output = "Please try again and make sure to answer every question!";
  } else if (a > b && a > c || a === c) {
    output = "You should learn Java";
  } else if (b > a && b > c || b === c) {
    output = "You should learn Javascript";
  } else if (c > a && c > b) {
    output = "You should learn Python";
  } else {
    output = "Oops! Something went wrong";
  }

  document.getElementById("output").innerText = output;
}

//nextButton will hide the current div and unhide the next div
function nextButton(id) {
  let header = document.getElementById("header");
  let intro = document.getElementById("intro");
  let start = document.getElementById("start");
  let q1 = document.getElementById("question1");
  let q2 = document.getElementById("question2");
  let q3 = document.getElementById("question3");
  let q4 = document.getElementById("question4");
  let q5 = document.getElementById("question5");
  let result = document.getElementById("result");

  if (id === "start") {
    start.setAttribute("class", "hidden");
    header.setAttribute("class", "hidden");
    intro.setAttribute("class", "hidden");
    q1.removeAttribute("class");
  } else if (id === "q1") {
    q1.setAttribute("class", "hidden");
    q2.removeAttribute("class");
  } else if (id === "q2") {
    q2.setAttribute("class", "hidden");
    q3.removeAttribute("class");
  } else if (id === "q3") {
    q3.setAttribute("class", "hidden");
    q4.removeAttribute("class");
  } else if (id === "q4") {
    q4.setAttribute("class", "hidden");
    q5.removeAttribute("class");
  } else if (id === "q5") {
    q5.setAttribute("class", "hidden");
    result.removeAttribute("class");
  }
}

//UI Logic
window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  const startBtn = document.getElementById("startBtn");
  const q1Btn = document.getElementById("q1Btn");
  const q2Btn = document.getElementById("q2Btn");
  const q3Btn = document.getElementById("q3Btn");
  const q4Btn = document.getElementById("q4Btn");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");

  //initialize hidden sections

  //listen for submit button
  startBtn.addEventListener("click", function () { nextButton("start") });
  q1Btn.addEventListener("click", function () { nextButton("q1") });
  q2Btn.addEventListener("click", function () { nextButton("q2") });
  q3Btn.addEventListener("click", function () { nextButton("q3") });
  q4Btn.addEventListener("click", function () { nextButton("q4") });
  form.addEventListener("submit", tallyScore);
  submitBtn.addEventListener("click", function () { nextButton("q5") });
  retryBtn.addEventListener("click", function () {
    window.location.reload();
  });
});