// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = prompt("From 8-128 characters, how long do you want your passcode?");
var generatedPassword = [];

if (passLength < 7 && passLength > 129) {
  alert("Yo");
 
}
  else{

  }

var upLettersEl = confirm("Would you like Upper Case?");
var lowerLettersEl = confirm("Would you like Lower case?");
var numberEl = confirm("Would you like to have numbers?");
var specialLettersEl = confirm("Would you like to have Special Characters?");



//variable for password
var upLetters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialLetters = ["!","#","$","%","&","'","(",")","*","+",",","-","/",":",";","<","=",">","?","@","[", "]", "^", "_", "`", "{", "|", "}", "~"]; 

//adding wanted lists to generatedPassword
var i=0;
while (i < passLength) {
if (upLettersEl && i < passLength) {
    generatedPassword.push(upLetters[Math.floor(Math.random()*upLetters.length)]);
    i++
  }
if (lowerLettersEl && i < passLength) {
    generatedPassword.push(lowerLetters[Math.floor(Math.random()*upLetters.length)]);
    i++
  }
if (numberEl && i < passLength) {
    generatedPassword.push(numbers[Math.floor(Math.random()*upLetters.length)]);
    i++
  }
if (specialLettersEl && i < passLength) {
    generatedPassword.push(specialLetters[Math.floor(Math.random()*upLetters.length)]);
   i++
    
}
}



console.log(generatedPassword);

let randomvalue = generatedPassword[Math.floor(Math.random() * generatedPassword.length78)];




 

//function to grab elements 

  
// Write password to the #password input
function writePassword() {
  
  generatedPassword = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById("p1").innerHTML = "New text!"
