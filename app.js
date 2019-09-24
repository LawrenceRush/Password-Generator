
    var passwordDisplay = document.getElementById("new-password"),
    password = "",
    sCharIsWanted = document.getElementById("selector-s-char"),
    numIsWanted = document.getElementById("selector-num"),
    lowCharIsWanted = document.getElementById("selector-low-char"),
    upCharIsWanted = document.getElementById("selector-up-char")
    sCharIsWanted.checked = true;
    numIsWanted.checked = true;
    lowCharIsWanted.checked = true;
    upCharIsWanted.checked = true;
    



    
    
    function generatePassword(){
        

        var passwordChar = ""
        
        passwordChar = addLettersToPassWordChar(passwordChar);
        
        password = randomize(passwordChar);
        
        reset_animation();
        passwordDisplay.innerHTML = password; 
        passwordDisplay.style.animation = "fadeIn 1s 1";
        
    }

    function getLength() {
        var passwordLengthInput = document.getElementById("password-length");
        var passwordLength = passwordLengthInput.value;
        return passwordLength;
    }

    function addLettersToPassWordChar(passwordChar) {
        
        var sChar = "!@#$%^&*-()+={[}]:;'/?.,<>",
            num = "1234567890",
            lowChar = "abcdefghijklmnopqrstuvwxyz",
            upChar = "ABCDEFGHIJKLMNOPQQRSTUVWXYZ"
            
       
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

function reset_animation() {
    var el = document.getElementById('new-password');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
}

  
   


   



   

   

        
