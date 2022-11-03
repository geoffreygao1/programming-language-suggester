//tallyScore function collects the radio button inputs and output a coding suggestion
function tallyScore(event) {
  event.preventDefault();

  let q1Answer = document.querySelector('input[name="q1"]:checked').value;
  let q2Answer = document.querySelector('input[name="q2"]:checked').value;
  let q3Answer = document.querySelector('input[name="q3"]:checked').value;
  let q4Answer = document.querySelector('input[name="q4"]:checked').value;
  let q5Answer = document.querySelector('input[name="q5"]:checked').value;

  //Combine all form inputs into single string for parsing
  let submission = q1Answer + q2Answer + q3Answer + q4Answer + q5Answer;

  //Counters for determining score, by parsing the combined answer string
  let jaCounter = 0;
  let jsCounter = 0;
  let pyCounter = 0;
  for (let i = 0; i < submission.length; i++) {
    if (submission[i] === "a") {
      jaCounter++;
    } else if (submission[i] === "b") {
      jsCounter++;
    } else if (submission[i] === "c") {
      pyCounter++;
    }
  }

  //Branching logic for converting score counters into coding language recommendation
  let output = "";
  if (jaCounter === jsCounter && jsCounter === pyCounter) {
    output = "Please try again and make sure to answer every question!";
  } else if (jaCounter > jsCounter && jaCounter > pyCounter || jaCounter === pyCounter) {
    output = "You should learn Java";
  } else if (jsCounter > jaCounter && jsCounter > pyCounter || jsCounter === pyCounter) {
    output = "You should learn Javascript";
  } else if (pyCounter > jaCounter && pyCounter > jsCounter) {
    output = "You should learn Python";
  } else {
    output = "Oops! Something went wrong";
  }

  document.getElementById("output").innerText = output;
}

//nextButton function will hide the current section and unhide the next one when the next button is pressed
function nextButton(id) {
  let start = document.getElementById("start");
  let q1 = document.getElementById("question1");
  let q2 = document.getElementById("question2");
  let q3 = document.getElementById("question3");
  let q4 = document.getElementById("question4");
  let q5 = document.getElementById("question5");
  let result = document.getElementById("result");

  if (id === "start") {
    start.setAttribute("class", "hidden");
    q1.classList.remove("hidden");
  } else if (id === "q1") {
    q1.setAttribute("class", "hidden");
    q2.classList.remove("hidden");
  } else if (id === "q2") {
    q2.setAttribute("class", "hidden");
    q3.classList.remove("hidden");
  } else if (id === "q3") {
    q3.setAttribute("class", "hidden");
    q4.classList.remove("hidden");
  } else if (id === "q4") {
    q4.setAttribute("class", "hidden");
    q5.classList.remove("hidden");
  } else if (id === "q5") {
    q5.setAttribute("class", "hidden");
    result.classList.remove("hidden");
  }
}

window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  const startBtn = document.getElementById("startBtn");
  const q1Btn = document.getElementById("q1Btn");
  const q2Btn = document.getElementById("q2Btn");
  const q3Btn = document.getElementById("q3Btn");
  const q4Btn = document.getElementById("q4Btn");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");

  //Event listeners for button elements 
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