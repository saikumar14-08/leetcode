class Solution {
    public String reverseVowels(String s) {
        int start = 0;
        int end = s.length() - 1;
        char[] sArr = s.toCharArray();
        while(start<end) {
            if(isVowel(sArr[start]) && isVowel(sArr[end])) {
                char temp = sArr[start];
                sArr[start] = sArr[end];
                sArr[end] = temp;
                start++;
                end--;
            } else if(isVowel(sArr[start]) && !isVowel(sArr[end]))
                end--;                
            else if(!isVowel(sArr[start]) && isVowel(sArr[end]))
                start++;
            else if(!isVowel(sArr[start]) && !isVowel(sArr[end])) {
                start++;
                end--;
            }
        }
        return new String(sArr);
    }
/*
IceCreAm
Assasin
v-c -> c--
c-v -> c++
v-v
c-c
AceCreIm
*/
    
    
    public boolean isVowel(char ch) {
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
            return true;
        return false;
    }
}