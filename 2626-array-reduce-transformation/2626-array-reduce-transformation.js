/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let redNum = init;
    for(let i=0;i<nums.length;i++)
        redNum=fn(redNum, nums[i])
    return redNum;
};