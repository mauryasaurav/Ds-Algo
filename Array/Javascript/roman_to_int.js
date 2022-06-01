function romanToInt(s) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
    };
  
    return s
      .match(/IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/g)
      .reduce((sum, element) => sum + map[element], 0);
  }
console.log(romanToInt("MCMXCIV"));
