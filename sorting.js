function primeNumber(num) {
    //checking if the number is less than 1 or not a numeric value, return false.
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//function to sort an array in descending
function sortInDescendingOrder(arr) {
    const n = arr.length;
    //looping through the array
    let rever;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                const rever = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = rever;
            }
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (primeNumber(arr[i])) {
            arr.splice(i, 1);
        }
    }

    return arr;
}

const inputArray = [3, 4,23, 7,10, 3,24, 0, 17,12,14];
const sortedArray = sortInDescendingOrder(inputArray);
console.log(sortedArray)