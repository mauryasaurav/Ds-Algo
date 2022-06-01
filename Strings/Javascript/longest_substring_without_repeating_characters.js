var lengthOfLongestSubstring = function(string) {
    if(string.length <= 1) return string.length;
    
    const seen = new Map();
    let left = 0, longest = 0;
    
    for( let i = 0; i < string.length; i++){
        const curr = string[i];
        const pre = seen.get(curr);
        if(pre >= left){
            left = pre+1;
        }

        seen.set(curr,i);
        longest = Math.max(longest, (i - left + 1));
    }
    return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'))