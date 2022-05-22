const duplicateArray = (array) => {
    let dupArray = []
    for (let index = 0; index < array.length; index++) {
        for (let j = index; j < array.length; j++) {
            if(array[index] === array[j]) {
                console.log("fdfdfdfdfd", array[j])
            }
        }
    }
}
    console.log(duplicateArray([2, 4, 54, 53, 2]))