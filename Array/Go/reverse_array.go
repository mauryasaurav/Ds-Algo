package main

import "fmt"

func reverseArray(arr string) string {
	var output string = ""
	for i := len(arr) - 1; i >= 0; i-- {
		fmt.Println("arr====+", arr[i])
		output = "a"
	}
	return output
}

func main() {
	fmt.Println(reverseArray("abc"))
}
