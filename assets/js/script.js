        // Assignment Code
        const generateBtn = document.querySelector("#generate");

        let pwdLength;
        let pwdUsesNums;
        let pwdUsesSymbols;
        let pwdUsesUpperCase;
        let pwdUsesLowerCase;
        
        
        // Write password to the #password input
        function writePassword() {
          // you can create a function named generatePassword that creates the password
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
          askUserPwdLength();
          askUserNumbers();
          askUserSymbols();
          askUserUpperCase();
          askUserLowerCase();
          let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
          let numbers = "0123456789";
          let lowerCase = "abcdefghijklmnopqrstuvwxyz";
          let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let values = '';
          let pwd = "";
          let numOfSpecial = 0;
          if (pwdUsesNums) {
            values += numbers;
          }
          
          if (pwdUsesLowerCase) {
            values += lowerCase;
          }
        
          if (pwdUsesUpperCase) {
            values += upperCase;
          }
          
          
          if (pwdUsesSymbols) {
            values += symbols;
          }
        
          for (let i = 0; i <= pwdLength; i++) {
             /*
             * Generate random alphabet 
             */
            pwd += values[getRandomInt(0, values.length)];
          }
           
          return pwd;
        }
        
        function askUserPwdLength() {
          pwdLength = prompt("Choose between 8 to 128 characters for your password length.");
          
          if (pwdLength >= 8 && pwdLength < 128) {
            pwdLength = Number(pwdLength);
          } else {
            alert('You need to enter a number between 8 to 128');
          }
          
        }
        
        function askUserNumbers(){
          pwdUsesNums = confirm("Do you want to use numbers?");
          
        }
        
        function askUserSymbols(){
          pwdUsesSymbols = confirm("Do you want to use symbols?");
          
        }
        
        function askUserUpperCase(){
          pwdUsesUpperCase = confirm("Do you want to use Uppercase letters?");
         
        }
        
        function askUserLowerCase() {
          pwdUsesLowerCase = confirm('Do you want to use Lowercase letters');
          
        }
        
        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);