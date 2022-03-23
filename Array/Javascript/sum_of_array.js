const sumOfArray = (arr) => {
    let sumOfArray = 0
    for (let i = 0; i < arr.length; i++) {
        sumOfArray += arr[i]
    }
    return sumOfArray
}

const array = [1, 2, 3, 4, 5, 7, 8]
console.log(sumOfArray(array))