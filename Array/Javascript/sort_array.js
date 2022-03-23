function arraySort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

const array = [10, 32, 3, 4, 5, 7, 1, 4]
console.log(arraySort(array))