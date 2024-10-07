class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> mp = new LinkedHashMap<>();
        char[] sArr = s.toCharArray();
        for(char ch: s.toCharArray()) {
            mp.put(ch, mp.getOrDefault(ch,0)+1);
        }
        char unq = '\u0000';
        for(Map.Entry<Character,Integer> entry : mp.entrySet()) {
            if(entry.getValue() == 1) {
                unq = entry.getKey();
                break;
            }
        }
            
        for(int i=0;i<sArr.length;i++) {
            if(sArr[i] == unq)
                return i;
        }
        return -1;
    }
}