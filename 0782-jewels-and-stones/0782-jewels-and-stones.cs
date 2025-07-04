public class Solution {
    public int NumJewelsInStones(string jewels, string stones) {
        int jewCnt = 0;
        char[] stAr = stones.ToCharArray();        
        foreach(var ch in stAr) {
            if(jewels.Contains(ch)) jewCnt++;
        }
        return jewCnt;
    }
}