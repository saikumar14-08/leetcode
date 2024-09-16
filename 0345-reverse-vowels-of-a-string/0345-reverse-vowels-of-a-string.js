/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length;
    let sArr = s.split('')
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    while(start<end) {
        if(vowels.has(sArr[start]) && vowels.has(sArr[end])) {
            let ch = sArr[start]
            sArr[start] = sArr[end]
            sArr[end] = ch
            start++
            end--
        } else if(vowels.has(sArr[start]) && !vowels.has(sArr[end]))
            end--
        else if(!vowels.has(sArr[start]) && vowels.has(sArr[end]))
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