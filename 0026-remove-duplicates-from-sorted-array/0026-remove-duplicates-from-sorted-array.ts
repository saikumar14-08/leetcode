function removeDuplicates(nums: number[]): number {
    let pos: number = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[pos] < nums[i])
            nums[++pos] = nums[i]
    }
    return pos+1;
};