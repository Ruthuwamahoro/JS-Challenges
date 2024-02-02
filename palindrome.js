//write a function
function isPalindrome(string){
  //splitting a word into an array and reversing it
    let reversedWord = string.split('').reverse().join('')
    if(reversedWord === string){
      return 'true'
    }
    return 'false'
  }
  
  console.log(isPalindrome('hello'))