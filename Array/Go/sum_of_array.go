package main

import "fmt"

func sumOfArray(arr []int) int {
	sum := 0
	for i := 1; i <= len(arr); i++ {
		sum += i
	}
	return sum
}

func main() {
	fmt.Println(sumOfArray([]int{1, 2, 3, 4, 5, 4, 54, 5, 4, 5, 4, 5, 4, 5, 4}))
}
