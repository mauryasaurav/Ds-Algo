var letterCombinations = (digits) => {
    if (digits == null || digits.length === 0) return [];
  
    const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const res = [];
    const go = (i, s) => {
      if (i === digits.length) {
        res.push(s);
        return;
      }
      for (const c of map[digits[i]]) {
        go(i + 1, s + c);
      }
    };
  
    go(0, '');
    return res;
  };

  console.log(letterCombinations('22222'))