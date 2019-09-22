
    var password = "";


    function getLength() {
        var passwordLengthInput = document.getElementById("password-length");
        var passwordLength = passwordLengthInput.value;
        return passwordLength;
    }
    
    function generatePassword(){
        
        var passwordChar = ""
        
        passwordChar = addLettersToPassWordChar(passwordChar);
        
        password = randomize(passwordChar);
        console.log(password);
        return (password);
    }

    function addLettersToPassWordChar(passwordChar) {
        
        var sChar = "!@#$%^&*-()+={[}]:;'/?.,<>",
            num = "1234567890",
            lowChar = "abcdefghijklmnopqrstuvwxyz",
            upChar = "ABCDEFGHIJKLMNOPQQRSTUVWXYZ"
            sCharIsWanted = document.getElementById("selector-s-char"),
            numIsWanted = document.getElementById("selector-num"),
            lowCharIsWanted = document.getElementById("selector-low-char"),
            upCharIsWanted = document.getElementById("selector-up-char")
       
        if (sCharIsWanted.checked) {

           passwordChar += sChar
       }

       if (numIsWanted.checked) {
           passwordChar += num
       }

       if (lowCharIsWanted.checked) {
           passwordChar += lowChar
       }

       if (upCharIsWanted.checked) {
           passwordChar += upChar
       }

       return passwordChar
   }


   function randomize (passwordChar) {
       var result = '';
       var length = getLength();
       for (var i = 0; i < length; i++) {
           result += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
       }
       return result;
   }

  
   


   



   

   

        
