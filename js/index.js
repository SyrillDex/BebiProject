let inputValue = document.querySelector(".index-input");
const buttonElement = document.querySelector(".index-submit");
const mali = document.querySelector(".mali");

buttonElement.addEventListener("click", () => {
  if (inputValue.value.trim() === "My mochi") {
    inputValue.value = "";
    location.href = "greetings.html";
  } else {
    mali.style.display = "block";
    setTimeout(()=>{
      mali.style.display = "none";
    },2000);
  }
});
