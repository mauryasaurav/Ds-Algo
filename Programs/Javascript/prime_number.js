const primeNumber = (array) => {
    let isPrime = true;
    if (array <= 0) isPrime = false
    for (let index = 2; index <= array / 2; index++) {
        if (array % index == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        return `PRIME NUMBER ${array}`;
        // return true
    } else {
        return `NOT A PRIME NUMBER ${array}`;
        // return false
    }
};

console.log(primeNumber(1));

// const primeNumberWithRange = (array) => {
//     for (let index = 0; index < array; index++) {
//         if (primeNumber(index)) console.log(index)
//     }
// }

// console.log(primeNumberWithRange(100));

