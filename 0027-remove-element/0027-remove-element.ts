function removeElement(nums: number[], val: number): number {
    let pos: number = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] != val) 
            nums[pos++] = nums[i]
    }
    return pos;
};