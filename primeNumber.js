//create an empty array

let primeNumbers = []
//creating function which accept numbers
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
    if(isPrimeNumber){
      primeNumbers.push(numbers[y])
    }
  }
  
  if (primeNumbers.length === 0){
    console.log("no prime numbers found in array")
  }
  return primeNumbers
}

console.log(checkingPrimeNUmbers([2,4,3,1,71,7,9,10,75,31,21,45,13]))