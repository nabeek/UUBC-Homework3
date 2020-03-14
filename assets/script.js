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


function generatePassword() {

  // Defining variables used, including arrays for each password component

  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var special = ["+", "#", "&", "!", "^", "~", "*", "?", ":", "$"];

  var numberLetter = prompt("How many letters?");
  var numberNum = prompt("How many numbers?");
  var numberSpecial = prompt("How many special characters?");

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

  for (i = 0; i < numberLetter; i++) {
    randomLetters.push(letters[Math.floor(Math.random() * letters.length)]);
  }

  for (i = 0; i < numberNum; i++) {
    randomNums.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  for (i = 0; i < numberSpecial; i++) {
    randomSpecial.push(special[Math.floor(Math.random() * special.length)]);
  }

  // The three component arrays are concatenated, shuffled, and converted into a string

  var characters = randomLetters.concat(randomNums, randomSpecial);
  shuffle(characters);
  var userPassword = characters.join("");

  return userPassword;

}