/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numSum = nums.length*(nums.length+1)/2;
    let sumEl = 0;
    for(let i=0;i<nums.length;i++) {
        sumEl+=nums[i]
    }
    return numSum-sumEl;
};