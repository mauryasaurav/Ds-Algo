package main

import "fmt"

func primeNumber(array int) string {
	var isPrime = true
	if array <= 0 {
		isPrime = false
	}
	for i := 2; i <= array/2; i++ {
		if array%i == 0 {
			isPrime = false
		}
	}
	if isPrime {
		return "PRIME NUMBER"
	} else {
		return "NOT A PRIME NUMBER"
	}
}

func main() {
	fmt.Println(primeNumber(16))
}
