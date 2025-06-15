/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let f: number=0;
    let s: number=0;
    while(s<nums.length) {
        if(nums[s] === 0) {
            s++
        } else {
            let temp = nums[s];
            nums[s] = nums[f];
            nums[f] = temp;
            f++;s++;
        }
    }
};