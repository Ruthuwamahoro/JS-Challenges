function isPrime(num) {
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

function customSort(array) {
    const n = array.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (isPrime(array[i])) {
            array.splice(i, 1);
        }
    }

    return array;
}

const inputArray = [3, 4, 7,10, 3, 0, 17,12];
const sortedArray = customSort(inputArray);
console.log(sortedArray)