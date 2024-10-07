class Solution {
    public char repeatedCharacter(String s) {
        Map<Character, Integer> mp = new LinkedHashMap<>();
        char[] sArr = s.toCharArray();
        for(char ch:s.toCharArray()) {
            mp.put(ch, mp.getOrDefault(ch,0) + 1);
            if(mp.get(ch) == 2)
                break;
        }
        for(int i=0;i<s.length();i++) {
            if(mp.get(sArr[i]) == 2)
                return sArr[i];
        }
        return '\u0000';
    }
}