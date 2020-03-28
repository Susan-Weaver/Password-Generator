// Assignment code here

// Request input from the user and assign to variables.
var lengthChoice = prompt("How many charactors would you like the password to be (min 8, max 128)?");
   console.log(lengthChoice)
   //check it's between 8 and 128 
   while (lengthChoice < 8 || lengthChoice > 128) {
      var lengthChoice = prompt("OPPS! please choose a number between 8 and 128");
      break;
      };
      console.log(lengthChoice);

  var lowerCase = prompt("Do you want to include LOWER case letters? YES or NO");
  console.log(lowerCase);
  // check yes no

  var upperCase = prompt("Do you want to include UPPER case letters? YES or NO");
  console.log(upperCase);
  //check yes no

  var numSpecChar = prompt("Do you want to include numeric and/or special charactors case letters? YES or NO");
  console.log(numSpecChar);
  //check yes no

// Check responses from the user to see if they are valid






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


//var Start = function () {
//lengthChoice ();
//lowerCase ();
//upperCase ();
//numSpecChar ();
//}

//Start ();