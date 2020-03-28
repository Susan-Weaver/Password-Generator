// Assignment code here

// Request input from the user and assign to variables.
var lengthChoice = prompt("How many charactors would you like the password to be (min 8, max 128)?");
  //check it's between 8 and 128 
  while (lengthChoice < 8 || lengthChoice > 128) {
    var lengthChoice = prompt("OOPS! please choose a number between 8 and 128");
    console.log(lengthChoice)
      if (lengthChoice >= 8 && lengthChoice <= 128) 
        break;
    };


var lowerCaseChoice = prompt("To include LOWER CASE letters, type YES or NO");
  //convert user response to lower case
  l = lowerCaseChoice.toLowerCase()
    //check to see if the answer is some version of yes or no, and if not ask for a new response
    while (l != "yes" && l != "no") {
      var lowerCaseChoice = prompt("OOPS! please enter YES or NO - would you like to use LOWER case letters?");
      l = lowerCaseChoice.toLowerCase()
    }
    // write to user choice to the console.log for easy reference
    console.log (lowerCaseChoice + " lower case")


var upperCaseChoice = prompt("To include UPPER CASE letters, type YES or NO");
  //convert user response to lower case
  u = upperCaseChoice.toLowerCase()
    //check to see if the answer is some version of yes or no, and if not ask for a new response
    while (u != "yes" && u != "no") {
      var upperCaseChoice = prompt("OOPS! please enter YES or NO - would you like to use UPPER case letters?");
      u = upperCaseChoice.toLowerCase()
    }
    // write to user choice to the console.log for easy reference
    console.log (upperCaseChoice + " upper case")


var numCharChoice = prompt("To include NUMBERS, type YES or NO");
  //convert user response to lower case
  n = numCharChoice.toLowerCase()
    //check to see if the answer is some version of yes or no, and if not ask for a new response
    while (n != "yes" && n != "no") {
      var numCharChoice = prompt("OOPS! please enter YES or NO - would you like to use NUMBERS?");
      n = numCharChoice.toLowerCase()
    }
    // write to user choice to the console.log for easy reference
    console.log (numCharChoice + " numbers")
  

var specCharChoice = prompt("To include SPECIAL CHARACTORS, type YES or NO");
    //convert user response to lower case
    s = specCharChoice.toLowerCase()
      //check to see if the answer is some version of yes or no, and if not ask for a new response
      while (s != "yes" && s != "no") {
        var specCharChoice = prompt("OOPS! please enter YES or NO - would you like to use SPEICAL CHARACTORS?");
        s = specCharChoice.toLowerCase()
      }
      // write to user choice to the console.log for easy reference
      console.log (specCharChoice + " special charactors")

//Check that there is a yes entry for some set of charactors or else it would be an empty password.
if (l === "no" && u === "no" && n === "no" && s === "no") {
  prompt("All charactor types were excluded from the password - with this criteria the password generated would be blank")
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


//var Start = function () {
//lengthChoice ();
//lowerCase ();
//upperCase ();
//numSpecChar ();
//}

//Start ();