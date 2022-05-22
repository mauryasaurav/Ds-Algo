function staircase(n) {
    // Write your code here
    let len = n.length, sum = 0
    for (let i = 0; i < len; i++) {
        sum += n[i]
        if( n[i]-1) {
            console.log("sas", sum)
        }
    }
    console.log(sum)
}

staircase([5, 4, 3, 2, 1])