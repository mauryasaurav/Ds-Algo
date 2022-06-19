const countSameChar = (string) => {
    return string.split('').reduce((data, d) => {
        if (d in data) data[d]++
        else data[d] = 1
        return data
    }, {})
}

console.log(countSameChar("aabbbbcccddddaa"))

