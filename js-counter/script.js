let count = 0;
let step = 1;


const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const stepInput = document.getElementById("step-input");
const errorMessage = document.getElementById("error-message");


function updateCounter() {
  counterDisplay.textContent = count;

  if (count > 0) {
    counterDisplay.style.color = "green";
  } else if (count < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "black";
  }
}
stepInput.addEventListener("input", () => {
  const value = parseInt(stepInput.value, 10);

  if (isNaN(value) || value <= 0) {
    errorMessage.textContent = "Please enter a positive number.";
    step = 0; // Prevent using invalid step
  } else {
    errorMessage.textContent = "";
    step = value;
  }
});

increaseBtn.addEventListener("click", () => {
  if (step > 0) {
    count += step;
    updateCounter();
  }
});

decreaseBtn.addEventListener("click", () => {
  if (step > 0) {
    count -= step;
    updateCounter();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});


updateCounter();
