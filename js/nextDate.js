const inputElement = document.querySelector(".index-input");
const inputElement2 = document.querySelector(".index-input2");


function addPlace(){
  if(inputElement.value.trim() === ""){
    console.log("haha");
  }
  else{
    localStorage.setItem("place", inputElement.value);
    location.href = "whatFood.html";
  }
}

function addFood(){
  if(inputElement2.value.trim() === ""){
    console.log("haha");
  }
  else{
    localStorage.setItem("food", inputElement2.value);
    location.href = "summary.html";
  }
}