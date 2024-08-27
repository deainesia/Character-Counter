var optionMax = "none";
var text = document.getElementById("text");
var maxText = document.getElementById("max-type");
var counterPlace = document.getElementById("total-text");
var maxPlace = document.getElementById("max-text");
var remainPlace = document.getElementById("remain-text");

function check(option) {
  optionMax = option;
  
  if (optionMax == "none") {
    maxPlace.textContent = "";
    remainPlace.textContent = "";
    text.setAttribute("maxlength","none");
  } else if (optionMax == "type") {
    optionMax = maxText.value;
    if (optionMax != "") {
      maxPlace.textContent = "of " + optionMax + " ";
      
      if (optionMax - text.value.length >= 0) {
        remainPlace.textContent = optionMax - text.value.length + " remaining character, ";
        remainPlace.style.color = "green";
      } else {
        remainPlace.textContent = optionMax - text.value.length + " excess character, ";
        remainPlace.style.color = "red";
      }
      
      text.setAttribute("maxlength",optionMax);
    } else {
      maxPlace.textContent = "";
      remainPlace.textContent = "";
      text.setAttribute("maxlength","none");
    }
    maxText.addEventListener("input", (event) => {
      optionMax = maxText.value;
      maxPlace.textContent = "of " + optionMax + " ";
      
      if (optionMax - text.value.length >= 0) {
        remainPlace.textContent = optionMax - text.value.length + " remaining character, ";
        remainPlace.style.color = "green";
      } else {
        remainPlace.textContent = optionMax - text.value.length + " excess character, ";
        remainPlace.style.color = "red";
      }

      text.setAttribute("maxlength",optionMax);
    })
  } else {
    maxPlace.textContent = "of " + optionMax + " ";

    if (optionMax - text.value.length >= 0) {
        remainPlace.textContent = optionMax - text.value.length + " remaining character, ";
        remainPlace.style.color = "green";
      } else {
        remainPlace.textContent = optionMax - text.value.length + " excess character, ";
        remainPlace.style.color = "red";
      }

    text.setAttribute("maxlength",optionMax);
  }
}

text.addEventListener("input", (event) => {      
  counterPlace.textContent = text.value.length + " ";
  if (optionMax != "none") {
    if (optionMax - text.value.length >= 0) {
      remainPlace.textContent = optionMax - text.value.length + " remaining character, ";
      remainPlace.style.color = "green";
    } else {
      remainPlace.textContent = optionMax - text.value.length + " excess character, ";
      remainPlace.style.color = "red";
    }
  }
}) 