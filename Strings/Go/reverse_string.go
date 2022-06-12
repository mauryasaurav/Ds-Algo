package main

import (
	"fmt"
	"strings"
)

func Reverse(input string) string {
	s := strings.Split(input, "")
	res := ""
	for _, c := range s {
		res = c + res
	}
	return res
}

func main() {
	fmt.Println(Reverse("asdf"))
}
