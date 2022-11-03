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


//UI Logic
window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  const submitBtn = document.getElementById("submitBtn");
  //initialize hidden sections

  //listen for submit button
  form.addEventListener("submit", tallyScore);
});