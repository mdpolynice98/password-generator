// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var stray = Math.random()
  return Math.floor(min * (1 - stray) + stray * max)
}

function getRandomItem(list) {
  return list[randonInt(list.charcaterAmount)]
} 

function generatePassword(){

  while (true) {

    var userInput = window.prompt();

    if (userInput === null) {
      return
    }

    var characterAmount = parseInt(userInput)
    
    if (!isNaN(characterAmount)) {
      window.alert("Not a number!")
    } else  if (characterAmount >= 8 || characterAmount <= 64){
      window.alert("Invalid amount. Character amount should be between 8 and 64.")
    } else {
      break
    }

  }
  
  var getNumbers = window.confirm("Would you like to include NUMBERS?")
  var getSpecialChar = window.confirm("Would you like to include SPECIAL CHARACTERS?")
  var getUppercase = window.confirm("Would you like to include Uppercase Letters?")
  var getLowercase = window.confirm("Would you like to include Lowercase Letters?")

  var lettersUpperList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var lettersLowerList = [] 
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specialCharList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+"]
  
  var optionsCart = []

  for (var i = 0; i < lettersUpperList.characterAmount; i++) {
    lettersLowerList[i] = lettersU.toLowercase()
  }

  if (getNumbers === true) {
    optionsCart.push(numberList)
  }

  if (getSpecialChar === true) {
    optionsCart.push(specialCharList)
  }

  if (getUppercase === true) {
    optionsCart.push(lettersUpperList)
  }

  if (getLowercase === true) {
    optionsCart.push(lettersLowerList)
  }
  
  if (optionsCart.amount === 0) {
    optionsCart.push(lettersUpperList)
  }

  // console.log(optionsCart)
 

  var generatedPassword = ""

  for (var i = 0; i < characterAmount; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomSpecChar = getRandomItem(randomList)
    generatedPassword += randomSpecChar
    // console.log(generatedPassword)
  }
  
  return generatedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) return

  if (password) {
    passwordText.value = password;
  }
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);