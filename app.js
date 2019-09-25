
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
    
    var passwordLengthInput = document.getElementById("password-length");
    passwordLengthInput.value = "8";
    



    
    
    function generatePassword(){
        
        if (passwordLengthInput.value > 7 && passwordLengthInput.value < 129){

        
        var passwordChar = ""
        passwordChar = addLettersToPassWordChar(passwordChar);
        password = randomize(passwordChar);
        reset_animation();
        
        
        passwordDisplay.textContent = password; 
        
        passwordDisplay.style.animation = "fadeIn 1s 1";

        } else {
            passwordDisplay.textContent = "Adjust Length";
        }

        
    }

    function getLength() {
        
        var passwordLength = passwordLengthInput.value;
        return passwordLength;
    }

    function addLettersToPassWordChar(passwordChar) {
        
        var sChar = "!@#$%^&*-()+={[}]:;'/?.,<>",
            num = "1234567890",
            lowChar = "abcdefghijklmnopqrstuvwxyz",
            upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            
       
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
       console.log("get length result:   " + length)
       for (var i = 0; i < length; i++) {
           result += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
       }
       console.log("result of for length " + result.length)
       return result;   
   }

function reset_animation() {
    var el = document.getElementById('new-password');
    el.style.animation = 'none';
    el.offsetHeight; 
    el.style.animation = null;
}

function copy() {
   
    var text = document.getElementsByClassName('new-password');
    text[0].select();
}

  
   


   



   

   

        
