/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let max = 0;
    for(let el of nums) {
        el === 1 ? cnt++ : cnt = 0;
        max = Math.max(max,cnt) // 3
    }
    return max;
};