/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 /**
 If your ith el is 0 then find the next non zero element an du
  */
var moveZeroes = function(n) {
    let pos = 0;
    for(let i=0;i<n.length;i++) {
        if(n[i] != 0) {
            n[pos] = n[i];
            pos++;
        } 
    }
    for(let i=pos;i<n.length;i++) {
        n[i] = 0;
    }
};