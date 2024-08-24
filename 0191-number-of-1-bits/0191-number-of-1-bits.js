/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = n.toString(2)
    let count = 0;
    for(let i of res) {
        (i==1) && count++;
    }
    return count;
};