/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length;
    let sArr = s.split('')
    while(start<end) {
        if(isVowel(sArr[start]) && isVowel(sArr[end])) {
            let ch = sArr[start]
            sArr[start] = sArr[end]
            sArr[end] = ch
            start++
            end--
        } else if(isVowel(sArr[start]) && !isVowel(sArr[end]))
            end--
        else if(!isVowel(sArr[start]) && isVowel(sArr[end]))
            start++
        else {
            start++;
            end--;
        }
    }
    return sArr.join('')
};
/*
v-v
v-c c--
c-v c++
c-c 
*/
var isVowel = function(ch) {
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
            return true;
        return false;
}