public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int pos=0;
        for(int i=0;i<nums.Length;i++) {
            if(nums[i] >nums[pos]) 
                nums[++pos] = nums[i];
        }
        return pos+1;
    }
}