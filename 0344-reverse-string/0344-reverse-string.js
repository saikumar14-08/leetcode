/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Remember to iterate the length/2 because if you iterate throught the length then we reverse the elements twice and return the original array itself.
    
    for(let i=0;i<s.length/2;i++) {
        let temp = s[i];
        s[i] = s[s.length-i-1];
        s[s.length-i-1] = temp;
        
    }
    return s;
};