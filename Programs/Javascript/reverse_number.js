function reverse_number(n) {
	let reverse = 0, lastDigit;
	while (n != 0) {
		lastDigit = n % 10;
		reverse = reverse * 10 + lastDigit; // reverse formula
		n = Math.floor(n/10);
	  }

     console.log(reverse, Number.MAX_SAFE_INTEGER)
}

reverse_number(3234)
		