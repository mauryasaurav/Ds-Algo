const reverseArray = (arr) => {
    let reverseArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i])
    }
    return reverseArray
}

const array = [1, 2, 3, 4, 5, 7]
console.log(reverseArray(array))