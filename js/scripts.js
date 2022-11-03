//Business Logic

//tallyScore will collect the radioButton scores and output an programming language answer
function tallyScore(event) {
  event.preventDefault();

  let q1Answer = document.querySelector('input[name="q1"]:checked').value;
  let q2Answer = document.querySelector('input[name="q2"]:checked').value;
  let q3Answer = document.querySelector('input[name="q3"]:checked').value;
  let q4Answer = document.querySelector('input[name="q4"]:checked').value;
  let q5Answer = document.querySelector('input[name="q5"]:checked').value;

  // document.getElementById("output").innerText = result;
}

//nextButton will hide the current div and unhide the next div
function nextButton(id) {
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

  //initialize hidden sections

  //listen for submit button
  startBtn.addEventListener("click", function () { nextButton("start") });
  q1Btn.addEventListener("click", function () { nextButton("q1") });
  q2Btn.addEventListener("click", function () { nextButton("q2") });
  q3Btn.addEventListener("click", function () { nextButton("q3") });
  q4Btn.addEventListener("click", function () { nextButton("q4") });
  form.addEventListener("submit", tallyScore);
  submitBtn.addEventListener("click", function () { nextButton("q5") });
});