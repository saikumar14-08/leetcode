class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> mp = new LinkedHashMap<>();
        char[] sArr = s.toCharArray();
        for(char ch: s.toCharArray()) {
            mp.put(ch, mp.getOrDefault(ch,0)+1);
        }
        
        for(int i=0;i<sArr.length;i++) {
            if(mp.get(sArr[i]) == 1)
                return i;
        }
        return -1;
    }
}