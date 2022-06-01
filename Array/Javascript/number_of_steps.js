var numberOfSteps  = function(num, count = 0) {
    if (num === 0) return count;
    return num % 2 === 0 ? numberOfSteps(num/2, count+1) : numberOfSteps(num -1, count + 1);
};

console.log(numberOfSteps(123, 0))