/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

var maximumWaterStore = function (height) {
    let maxArea = 0;
    let i = 0, j = height.length - 1;
    while (i < j) {
        let area = height[i] < height[j] ? height[i] * (j - i) : height[j] * (j - i);
        if (area > maxArea) {
            maxArea = area;
        }
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return maxArea;
}

let bound = [2, 10, 7, 1, 3]
console.log(maximumWaterStore(bound))