// Assignment Code
const generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  const password = generatePwd();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

function generatePwd(){
  const pwdLength = askUserPwdLength();
  if (!pwdLength) return;
 
  const pwdUsesNums = askUserPwdType('Do you want to use numbers?');
  const pwdUsesSymbols = askUserPwdType('Do you want to use symbols?');
  const pwdUsesUpperCase = askUserPwdType('Do you want to use uppercase?');
  const pwdUsesLowerCase = askUserPwdType('Do you want to use lowercase?');

  const symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let characters = '';
  let pwd = "";

  if (pwdUsesNums) {
    characters += numbers;
  }
  if (pwdUsesLowerCase) {
    characters += lowerCase;
  }
  if (pwdUsesUpperCase) {
    characters += upperCase;
  }
  if (pwdUsesSymbols) {
    characters += symbols;
  }

  for (let i = 0; i <= pwdLength; i++) {
    pwd += characters[getRandomInt(0, characters.length)];
  }
  return pwd;
}

function askUserPwdLength() {
  let ans = prompt("Choose between 8 to 128 characters for your password length.");
  if (isNaN(ans)) {
    alert('You need to enter a number');
    return undefined;
  }
  ans = Number(ans);
  if (ans >= 8 && ans < 128) {
    return ans;
  } else {
    alert('You need to enter a number between 8 - 128');
    return undefined;
  } 
}

function askUserPwdType(msg) {
  const ans = confirm(msg);
  return ans;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
