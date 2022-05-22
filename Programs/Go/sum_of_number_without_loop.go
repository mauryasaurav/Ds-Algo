package main

import "fmt"

func sumOfNumberWithoutLoop(number int64) int64 {
	return number * (number + 1) / 2
}

func main() {
	fmt.Println(sumOfNumberWithoutLoop(5))
}
