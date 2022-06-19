function arraysAreIdentical(arr1, arr2){
    console.log(arr1, arr2)
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            console.log(arr1[i])
        }
    }
    return []; 
}

let findMinArrMoves = (arr) => {
    const temp2 = arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    
    // return arr;
   return arraysAreIdentical([2, 4, 3, 5, 1], arr)
}

console.log(findMinArrMoves([2, 4, 3, 6, 1, 5]))