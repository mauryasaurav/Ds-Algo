package main

import "fmt"

func reverseArray(arr []int) []int {
	output := []int{}
	for i := len(arr) - 1; i >= 0; i-- {
		output = append(output, arr[i])
	}
	return output
}

func ma	in() {
	fmt.Println(reverseArray([]int{1, 2, 3, 4, 5, 6, 7, 8}))
}
