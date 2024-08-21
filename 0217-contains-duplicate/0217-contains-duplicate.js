/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var st = new Set()
    for(let i=0;i<nums.length;i++)
        st.add(nums[i])
    return st.size != nums.length ? true : false;
};