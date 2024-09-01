var optionMax = "none"; //default value of maximum character option
var text = document.getElementById("text"); //textarea handle
var inputMax = document.getElementById("max-byinput"); //radio button for maximum character by input handle
var maxText = document.getElementById("max-type"); //maximum character by input handle
var counterCharacter = document.getElementById("total-text"); //total written character text handle
var counterWord = document.getElementById("total-word"); //total word text handle
var maxCharacter = document.getElementById("max-text"); //maximum character text handle
var remainCharacter = document.getElementById("remain-text"); //remaining character text handle
var textArray;
var textArrayLength;
var buttonFrequent = document.getElementById("check-freq"); //check frequent word button handle

function checkRemainCharacter(maxValue) { //function for check the remain character by maximum character
  if (maxValue - text.value.length >= 0) { //if character have not reached the maximum
    remainCharacter.textContent = maxValue - text.value.length;
    remainCharacter.style.color = "green";
  } else {
    remainCharacter.textContent = maxValue - text.value.length;
    remainCharacter.style.color = "red";
  }
}

function check(option) { //function for handling maximum character option
  optionMax = option; //change initial value by the given parameter
  
  if (optionMax == "none") { //if maximum character option not set
    maxCharacter.textContent = "-"; //text handle for maximum character blank
    remainCharacter.textContent = "-"; //text handle for remaining character blank
    remainCharacter.style.color = "black";
    text.setAttribute("maxlength","none"); //set maxlength of textarea by maximum character
  } else if (optionMax == "type" && inputMax.checked == true) { //if maximum character option set by user input
    optionMax = maxText.value; //get user input
    
    if (optionMax != "") { //if initial value of user input not blank
      maxCharacter.textContent = optionMax; 
      checkRemainCharacter(optionMax);
      text.setAttribute("maxlength",optionMax);
    } else {
      maxCharacter.textContent = "-";
      remainCharacter.textContent = "-";
      remainCharacter.style.color = "black";
      text.setAttribute("maxlength","none");
    }
    
    maxText.addEventListener("input", (event) => { //add listener input handle for maximum character
      optionMax = maxText.value; // get user input
      maxCharacter.textContent = optionMax;
      checkRemainCharacter(optionMax);
      text.setAttribute("maxlength",optionMax);
    })
  } else {
    maxCharacter.textContent = optionMax;
    checkRemainCharacter(optionMax);
    text.setAttribute("maxlength",optionMax);
  }
}

text.addEventListener("input", (event) => { //add listener textarea handle
  //character counter
  counterCharacter.textContent = text.value.length; 
  if (optionMax != "none") {
    checkRemainCharacter(optionMax);
  }
  //word counter
  textArrayLength = text.value.split(" ").filter((str) => { //split and filter text by whitespace
    return /\S/.test(str); // return no whitespace in array
  }).length; //length of array

  counterWord.textContent = textArrayLength;
  // return textArray;
}) 

buttonFrequent.addEventListener("click", (event) => {
  const freqWord = new Array();
  textArray = text.value.split(/[\s.,&!":;?]/).filter((str) => { //split and filter text
    return /\S/.test(str); // return no whitespace in array
  });
  textArray.forEach(i => {
    freqWord[i] = (freqWord[i] || 0) + 1; //short circuiting logic -> if freqWord[i] is empty then 0 will be picked. Then + the value with 1.
    // console.log(freqWord);
    // console.log(typeof(freqWord));
    
  });

  // what if we turn textarray to map. so initial map has a name refer to the word and it has freq refer to amount of word found.
  // then fill the map with help of foreach. idk man. come back tmr

})