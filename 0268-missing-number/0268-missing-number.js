/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = (nums.length)*(nums.length+1)/2;
    let numSum = 0;
    for(let el of nums) {
        numSum += el;
    }
    return sum-numSum;
};