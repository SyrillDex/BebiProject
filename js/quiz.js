const wrongAnswer = document.querySelectorAll("#wrong");
const correctAnswer = document.querySelectorAll("#correct");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");

wrongAnswer.forEach((buttonElement) => {
  buttonElement.addEventListener("click", () => {
    buttonElement.style.backgroundColor = "red";
    setTimeout(() => {
      buttonElement.style.backgroundColor = "#f2f2f2";
    }, 1000);
  });
});

const message = document.querySelector(".prompt");
const lastSlide = document.querySelector(".last-slide");

correctAnswer.forEach((correctButton) => {
  correctButton.addEventListener("click", () => {
    correctButton.style.backgroundColor = "#924DBF";
    setTimeout(() => {
      correctButton.style.backgroundColor = "none";
    }, 400);
  });
});

function isCorrect(next, current) {
  let count = 3;
  setTimeout(() => {
    message.style.display = "block";
    let counter = document.querySelector(".counter");
    const timer = setInterval(() => {
      counter.innerHTML = count;
      count--;
      if (count < 0) {
        clearInterval(timer);
        next.style.display = "flex";
        message.style.display = "none";
      }
    }, 1000);
    current.style.display = "none";
  }, 400);
}

const continueButton = document.querySelector(".continue");

continueButton.addEventListener('click', () => {
  location.href = "nextDate.html";
});