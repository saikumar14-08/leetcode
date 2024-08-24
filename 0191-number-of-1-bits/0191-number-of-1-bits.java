class Solution {
    public int hammingWeight(int n) {
        String binRes = Integer.toBinaryString(n);
        int count = 0;
        for(int i=0;i<binRes.length();i++) {
            if(binRes.charAt(i) == '1')
                count+=1;
        }
        return count;
    }
}