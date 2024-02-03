//write a function
function isPalindrome(string){
  //splitting a word into an array and reversing it
    let reversedWord = string.split('').reverse().join('')
    //checking for the reversedword and the original word to be equal or not
    if(reversedWord === string){
      return 'true'
    }
    return 'false'
  }

  //displaying an output using console log
  
  console.log(isPalindrome('level'))  //this should return true
  console.log(isPalindrome('hello')) //this should return false