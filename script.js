// Get references to the #generate element
var generatePassword = function () {
  // possible password values
  let lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
  let upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  let numberCaseValues = "1234567890";
  let specialCaseValues = "!@#$%^&*()_+";
              
  let values = "";

  // Request input from the user and assign to variables.
  
  // Ask for a length between 8 and 128 charactors
  var lengthChoice = (window.prompt("How many characters would you like the password to be (min 8, max 128)?"));
  //check it's between 8 and 128 
    while (lengthChoice < 8 || lengthChoice > 128) {
       var lengthChoice = (window.prompt("Please choose a number between 8 and 128"));
       // write to length choice to console.log for easy reference
       console.log(lengthChoice)
      if (lengthChoice >= 8 && lengthChoice <= 128) 
      break;
    }

  // Ask if user would like to use lower case charactors
  var lowerCaseChoice = (window.prompt("Would you like to include LOWER CASE letters? type YES or NO"));
  //convert user response to lower case
    l = lowerCaseChoice.toLowerCase()
    //check to see if the answer is some version of yes or no, and if not ask for a new response
    while (l != "yes" && l != "no") {
      var lowerCaseChoice = (window.prompt("Please enter YES or NO - would you like to use LOWER case letters?"));
      l = lowerCaseChoice.toLowerCase()
      // write to user choice to the console.log for easy reference
      console.log (lowerCaseChoice + " lower case")
    }

  // Ask if user would like to use upper case charactors
  var upperCaseChoice = (window.prompt("Would you like to include UPPER CASE letters? type YES or NO"));
  //convert user response to lower case
  u = upperCaseChoice.toLowerCase()
  //check to see if the answer is some version of yes or no, and if not ask for a new response
  while (u != "yes" && u != "no") {
    var upperCaseChoice = (window.prompt("Please enter YES or NO - would you like to use UPPER case letters?"));
    u = upperCaseChoice.toLowerCase()
    // write to user choice to the console.log for easy reference
    console.log (upperCaseChoice + " upper case")
  }


  // Ask if the user would like to use numbers
  var numCharChoice = (window.prompt("Would you like to include NUMBERS? type YES or NO"));
  //convert user response to lower case
  n = numCharChoice.toLowerCase()
  //check to see if the answer is some version of yes or no, and if not ask for a new response
  while (n != "yes" && n != "no") {
    var numCharChoice = (window.prompt("Please enter YES or NO - would you like to use NUMBERS?"));
    n = numCharChoice.toLowerCase()
    // write to user choice to the console.log for easy reference
    console.log (numCharChoice + " numbers")
  }

  // Ask if the user would like to use special characters
  var specCharChoice = (window.prompt("Would you like to include SPECIAL CHARACTERS? type YES or NO"));
  //convert user response to lower case
  s = specCharChoice.toLowerCase()
  //check to see if the answer is some version of yes or no, and if not ask for a new response
  while (s != "yes" && s != "no") {
    var specCharChoice = (window.prompt("Please enter YES or NO - would you like to use SPEICAL CHARACTORS?"));
    s = specCharChoice.toLowerCase()
    // write to user choice to the console.log for easy reference
    console.log (specCharChoice + " special charactors") 
  }

  //Check that there is a yes entry for some set of charactors or else it would be an empty password.
  if (l === "no" && u === "no" && n === "no" && s === "no") {
  (window.prompt("All charactor types were excluded from the password - with this criteria the password generated would be blank"));
  }

  // add character sets if the user chose to include them
  if (l === "yes") {
    values = (values + lowerCaseValues)
  } if (u === "yes") {
    values = (values + upperCaseValues)
  } if (n === "yes") {
    values = (values + numberCaseValues)
  } if (s === "yes") {
    values = (values + specialCaseValues)
  }

  // note all the values that can be used in the password
  console.log ("optional values:  " + values)

   let createdPassword = "";

  //create for loop to choose password characters
  for(var i = 0; i <= lengthChoice; i++) {
    createdPassword = createdPassword + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  console.log ("generated password:  " + createdPassword)
  //window.alert ("Your Password Is:  " + password)}
  (window.alert("Your password is " + createdPassword));
}

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var createdPassword = generatePassword();
  var passwordText= document.querySelector("#password");
  passwordText.value = createdPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
