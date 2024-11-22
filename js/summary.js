let summaryHTML = document.querySelector(".summary");;
summaryHTML.innerHTML += `Place: <span>${localStorage.getItem("place")} 😍</span> <br>
                Food trip: <span>${localStorage.getItem("food")}</span>`;

function goToHome(){
  location.href = "index.html";
}
