/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let mp = new Map();
    for(let ch of s) {
        mp.set(ch, (mp.get(ch) || 0)+1)
    }
    let unq = ''
    for(let [k,v] of mp) {
        if(v == 1) {
            unq = k
            break;
        }
    }
    for(let i=0;i<s.length;i++) {
        if(s[i] == unq)
            return i;
    }
    return -1;
};