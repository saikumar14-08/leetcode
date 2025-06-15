/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let f = 0;
    let s = 0;
    if(nums.length == 1 && nums[0] != 0) 
        return nums;
    while(s<nums.length) { // 0, 1, 
        if(nums[s] === 0) { // 
            s++;
        } else {
            let temp = nums[s];
            nums[s] = nums[f];
            nums[f] = temp;
            f++;
            s++
        }
    }
    return nums
};
