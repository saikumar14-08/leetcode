class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxCnt =0;
        int prevCnt = 0;
        for(int i=0;i<nums.length;i++) {
            if(nums[i] == 1) {
                prevCnt = prevCnt+1;
                maxCnt = Math.max(maxCnt, prevCnt);
            } else {
                prevCnt =0;
            }
        }
        return maxCnt;
    }
}