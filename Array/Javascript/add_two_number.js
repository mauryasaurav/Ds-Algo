/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

var addTwoNumbers = function (l1, l2) {
    let temp = l2
    let first = "", second = "", addTwoNum = 0, finalAnswer = [];
    if (l1.length > l2.length) {
        temp = l1
    }
    
    
    for (let i = 0; i < temp.length; i++) {
        if (!isNaN(l1[i])) first += l1[i]
        if (!isNaN(l2[i])) second += l2[i]
    }
    
    addTwoNum =  String(Number(first) + Number(second))
    
    for (let j = addTwoNum.length -1 ; j >=0; j--) {
        finalAnswer.push(Number(addTwoNum[j]))
    }
   return finalAnswer
};


console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))