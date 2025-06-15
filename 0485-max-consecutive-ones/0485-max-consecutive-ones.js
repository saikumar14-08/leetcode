/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currCnt = 0;
    let maxCnt = 0
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === 0) {
            currCnt = 0; 
        } else if(nums[i] === 1){
            currCnt=currCnt+1;
            maxCnt = Math.max(currCnt,maxCnt); 
        }
        console.log(maxCnt);
    }
    return maxCnt;
};
// [1,1,1,0,1]