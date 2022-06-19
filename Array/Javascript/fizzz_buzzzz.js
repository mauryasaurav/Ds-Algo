const FizzBuzz = (number) => {
    let k = 0, j = 0, str = '';
    for (let i = 1; i <= number; i++) {
        k++; j++;
        if (k == 3) {
            str += "FIZZ"
            k = 0;
        }
        if (j == 5) {
            str += "BUZZ"
            j = 0;
        }

        if (str == "") {
            console.log(i)
        } else {
            console.log(str)
            str = ''
        }
    }
}

FizzBuzz(30)