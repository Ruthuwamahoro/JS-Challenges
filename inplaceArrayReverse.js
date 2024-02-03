
function InPlaceReverseArr(arr) {
  let startValue = 0;
  let endValue = arr.length - 1;

  while (startValue < endValue) {
      const n = arr[startValue];
      arr[startValue] = arr[endValue];
      arr[endValue] = n;
      startValue++;
      endValue--;
  }
}
const newArray = [1, 2, 3, 4, 5];
InPlaceReverseArr(newArray);
console.log(newArray);  

