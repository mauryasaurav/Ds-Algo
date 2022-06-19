
function pattern(n) {
    let mid = (n - 1) / 2;
    let last = n - 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j == (n - 1) / 2 || i - j == (n - 1) / 2 || j - i == (n - 1) / 2 || (i == mid && j == last)) {
                process.stdout.write("*");
            }
            else {
                process.stdout.write(' ');
            }
        }
        process.stdout.write('\n');
        if (i >= (n - 1) / 2) {
            mid++;
            last--;
        }
    }
}

pattern(7);