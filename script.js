var optionMax = "none"; //default value of maximum character option
var text = document.getElementById("text"); //textarea handle
var inputMax = document.getElementById("max-byinput"); //radio button for maximum character by input handle
var maxText = document.getElementById("max-type"); //maximum character by input handle
var counterPlace = document.getElementById("total-text"); //total written character text handle
var maxPlace = document.getElementById("max-text"); //maximum character text handle
var remainPlace = document.getElementById("remain-text"); //remaining character text handle


function checkRemainCharacter(maxValue) { //function for check the remain character by maximum character
  if (maxValue - text.value.length >= 0) { //if character have not reached the maximum
    remainPlace.textContent = maxValue - text.value.length + " remaining character, ";
    remainPlace.style.color = "green";
  } else {
    remainPlace.textContent = maxValue - text.value.length + " excess character, ";
    remainPlace.style.color = "red";
  }
}

function check(option) { //function for handling maximum character option
  optionMax = option; //change initial value by the given parameter
  
  if (optionMax == "none") { //if maximum character option not set
    maxPlace.textContent = ""; //text handle for maximum character blank
    remainPlace.textContent = ""; //text handle for remaining character blank
    text.setAttribute("maxlength","none"); //set maxlength of textarea by maximum character
  } else if (optionMax == "type" && inputMax.checked == true) { //if maximum character option set by user input
    optionMax = maxText.value; //get user input
    
    if (optionMax != "") { //if initial value of user input not blank
      maxPlace.textContent = "of " + optionMax + " "; 
      checkRemainCharacter(optionMax);
      text.setAttribute("maxlength",optionMax);
    } else {
      maxPlace.textContent = "";
      remainPlace.textContent = "";
      text.setAttribute("maxlength","none");
    }
    
    maxText.addEventListener("input", (event) => { //add listener input handle for maximum character
      optionMax = maxText.value; // get user input
      maxPlace.textContent = "of " + optionMax + " ";
      checkRemainCharacter(optionMax);
      text.setAttribute("maxlength",optionMax);
    })
  } else {
    maxPlace.textContent = "of " + optionMax + " ";
    checkRemainCharacter(optionMax);
    text.setAttribute("maxlength",optionMax);
  }
}

text.addEventListener("input", (event) => { //add listener textarea handle
  counterPlace.textContent = text.value.length + " "; //character counter
  if (optionMax != "none") {
    checkRemainCharacter(optionMax);
  }
}) 