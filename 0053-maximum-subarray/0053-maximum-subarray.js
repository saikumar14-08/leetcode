/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let x of nums) {
        sum = Math.max(x, sum+x); //sum = -1
        max = Math.max(max,sum); // max = -1
    }
    return max;
};