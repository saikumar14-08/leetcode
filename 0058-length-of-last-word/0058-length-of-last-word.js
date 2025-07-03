/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.trim().split(" ");
    return sArr.pop().length;
};