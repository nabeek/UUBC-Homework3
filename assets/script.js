// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Begin function to generate password (homework assignment)

function generatePassword() {

  // Defining variables used, including arrays for each password component
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var capitalLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var special = ['+', '#', '&', '!', '^', '~', '*', '?', ':', '$'];

  // Validating password length
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    var passwordLength = parseInt(prompt("How many characters? \nPlease choose at least 8 but no more than 128."));
  }
  
  var letterUpperBool = confirm("Uppercase letters?");
  var letterLowerBool = confirm("Lowercase letters?")
  var numberNum = prompt("How many numbers?");
  var numberSpecial = prompt("How many special characters?");
  var totalLetters = parseInt(passwordLength) - (parseInt(numberNum) + parseInt(numberSpecial))

  var randomLetters = [];
  var randomNums = [];
  var randomSpecial = [];

  // Fisher–Yates Shuffle written as a function to shuffle the concatenated values
  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  // For loops generate a number of random array values, based on user input

    // Generate upper and lower case letters
        if (letterUpperBool && letterUpperBool) {
          var upperLetters = Math.floor(Math.random() * totalLetters);
          var lowerLetters = Math.abs(totalLetters - upperLetters);
          for (i = 0; i < upperLetters; i++) {
            randomLetters.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)]);
          }
          for (i = 0; i < lowerLetters; i++) {
            randomLetters.push(letters[Math.floor(Math.random() * letters.length)]);
          }
    }   else if (letterUpperBool == true && letterLowerBool == false) {
        for (i = 0; i < totalLetters; i++) {
          randomLetters.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)]);
        }  
    }   else {
        for (i = 0; i < totalLetters; i++) {
          randomLetters.push(letters[Math.floor(Math.random() * letters.length)]);
        }
    }
  
    // Generate numbers
    for (i = 0; i < numberNum; i++) {
      randomNums.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
  
    // Generate special characters
    for (i = 0; i < numberSpecial; i++) {
      randomSpecial.push(special[Math.floor(Math.random() * special.length)]);
    }

  // The three component arrays are concatenated, shuffled, and converted into a string
  var characters = randomLetters.concat(randomNums, randomSpecial);
  shuffle(characters);
  var userPassword = characters.join("");

  return userPassword;
}