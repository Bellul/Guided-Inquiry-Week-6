/* MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array. */

function findElement(nums, target){
    return nums.indexOf(target)
}

console.log(findElement([4,5,6,7,0,1,2], 9));
console.log(findElement([4,5,6,7,0,1,2], 7));