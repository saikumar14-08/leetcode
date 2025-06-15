public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int maxCnt = 0;
        int prevCnt = 0;
        for(int i=0;i<nums.Length;i++) {
            if(nums[i] == 1) {
                prevCnt++;
                maxCnt = Math.Max(maxCnt,prevCnt);
            } else {
                prevCnt =0;
            }
        }
        return maxCnt;
    }
}