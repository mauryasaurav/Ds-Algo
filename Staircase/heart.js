const V = (n) => {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if ((i == j && i <= (n - 1) / 2) || (i + j === n - 1) && j > i) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

V(13)