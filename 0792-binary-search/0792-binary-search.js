/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let f=0;
    let l=nums.length-1;
    while(f<=l) {
        let mid = Math.floor((f+l)/2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] > target) l=mid-1;
        else if(nums[mid] < target) f=mid+1;
    }
    return -1;
};