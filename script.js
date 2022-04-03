

// Assignment Code
var generateBtn = document.querySelector("#generate");


//1)the password criteria
  //  lowercase, uppercase, numbers, special characters
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = '!@$%^&*()_+{}:"<>|';
  //  password lenght 8,128
  var  passwordLenght = "";
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



//Promt the user for the password criteria 
function generatePassword(){
  //quick test
  console.log("Hey! You clicked the button!");

  userPassword = "";
  passwordCharacters = "";
  
  let passwordLenght = prompt(
    "Please select the length of your password. (Between 8 - 128 characters)"
  );

  if (passwordLenght >=8 && passwordLenght<=128){
    password.length = passwordLenght;

    //asking for lowercase letters
    var isLowerCase = confirm("Include lowercase letters in password?");
    //asking for uppercase letters 
    var isUpperCase = confirm("Include uppercase letters in password?");
    //asking for numbers
    var isNumeric = confirm("Include numbers letters in password?");
    //asking for special characters
    var hasSpecialChars = confirm("Include special characters letters in password?");

  }else{
    alert("Please select a password between 8-128 characters");
  }
  //CONDITIONALS 

  if (isLowerCase === true){
    passwordCharacters += lowercase;
  }
  if (isUpperCase === true){
    passwordCharacters += uppercase;
  }
  if (isNumeric === true){
    passwordCharacters += numbers;
  }
  if (hasSpecialChars === true){
    passwordCharacters += specialCharacters;
  }else{
    alert("Error: try again!");
  }

  for (var i = 0; i < passwordLenght; i++){
    userPassword += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];

  }
  //4)Display the password to the page
  return userPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








  