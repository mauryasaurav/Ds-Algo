package main

import (
	"fmt"
)

func Factors(n int64) []int64 {
	factors := make([]int64, 0)
	for i := int64(2); n > 1; i++ {
		for n%i == 0 {
			factors = append(factors, i)
			n /= i
		}
	}
	return factors
}

func main() {
	fmt.Println(Factors(12))
}
