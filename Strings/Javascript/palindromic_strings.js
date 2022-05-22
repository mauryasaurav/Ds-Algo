/**
 * @param {string}
 * @return {number}
 */

function countSubstrings(s, count = 0) {
    for (let i = 0; i < s.length; i++) {
        // odd length Palindromic
        helper(s, i, i)
        // even length Palindromic
        helper(s, i, i+1)
    }

    return count
    
    function helper(s, low, high) {
        while (low >= 0 && high <= s.length && s[low] === s[high]) {
            count++, low--, high++
        }
    }
}

console.log(countSubstrings("aaa"))