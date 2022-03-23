package main

import "fmt"

func sortOfArray(array []int) []int {
	var done bool = false
	for !done {
		done = true
		for i := 1; i < len(array); i++ {
			if array[i-1] > array[i] {
				done = false
				var tmp = array[i-1]
				array[i-1] = array[i]
				array[i] = tmp
			}
		}
	}
	return array
}

func main() {
	fmt.Println(sortOfArray([]int{1, 2, 3, 4, 5, 4, 54, 5, 4, 5, 4, 5, 4, 5, 4}))
}
