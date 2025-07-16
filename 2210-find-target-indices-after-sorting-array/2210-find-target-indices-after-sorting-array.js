/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let finAr = nums.sort((a,b) => a-b)
    let op=[];
    for(let i=0;i<finAr.length;i++) {
        if(finAr[i] === target) op.push(i);
    }
    return op;
};