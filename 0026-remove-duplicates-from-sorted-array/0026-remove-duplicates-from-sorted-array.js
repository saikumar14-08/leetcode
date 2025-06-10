/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pos = 0; // 0,1,
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > nums[pos]) {
            pos=pos+1;
            nums[pos] = nums[i];   
        }
    }
    return pos+1;
};