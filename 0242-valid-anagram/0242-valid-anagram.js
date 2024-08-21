/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var mp = new Map()
    if(s.length != t.length)
        return false
    for(let i=0;i<s.length;i++) {
        mp.set(s.charAt(i), (mp.get(s.charAt(i)) || 0)+1)
    }
    for(let i=0;i<t.length;i++) {
        mp.set(t.charAt(i), (mp.get(t.charAt(i)) || 0)-1)
    }
    for(const [k,v] of mp){
        if(v>0)
            return false
    }
    return true
};