// Assignment code here

function selectPassCriteriaLength (lengthChoice) {
  var lengthChoice = prompt("How many charactors would you like the password to be? Minimum of 8, Maximum of 128");
  console.log(lengthChoice);
  //check it's between 8 and 128
}

function selectPassCriteriaLowerCase (lowerCase) {
  var lowerCase = prompt("Do you want to include LOWER case letters? YES or NO");
  console.log(lowerCase);
}

function selectPassCriteriaUpperCase (upperCase) {
  var upperCase = prompt("Do you want to include UPPER case letters?");
  console.log(upperCase);
  //check yes no
}


function selectPassCriteriaNumberSpecChar (numSpecChar) {
  var numSpecChar = prompt("Do you want to include numeric and/or special charactors case letters?");
  console.log(numSpecChar);
  //check yes no
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var Start = function () {
    selectPassCriteriaLength ();
    selectPassCriteriaLowerCase ();
    selectPassCriteriaUpperCase ();
    selectPassCriteriaNumberSpecChar ();
}

Start ();