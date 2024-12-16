type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let redNum: number = init;
    for(let i=0;i<nums.length;i++) {
        redNum=fn(redNum, nums[i]);
    }
    return redNum;
};