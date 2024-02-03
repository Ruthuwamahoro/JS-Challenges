//create an empty array

let primeNumbers = []
//creating function which accept numbers as array object and return boolean value 
function checkingPrimeNUmbers(numbers){
  
  for(let y = 0; y<numbers.length; y++){
    let isPrimeNumber = true;
    if(numbers[y] <= 1){
      continue;
    } else {
      for(let j=2; j<numbers[y] ; j++){
        if(numbers[y] % j === 0){
          isPrimeNumber= false;
          break;
        }
        
      }
      
    }
    //pushing prime numbers into an array
    if(isPrimeNumber){
      primeNumbers.push(numbers[y])
    }
  }
  //check if the prime numbers array is empty and console the relevant message
  if (primeNumbers.length === 0){
    console.log("no prime numbers found in array")
  }
  return primeNumbers
}
//checking the result
console.log(checkingPrimeNUmbers([2,4,3,1,71,7,9,10,75,31,21,45,13]))