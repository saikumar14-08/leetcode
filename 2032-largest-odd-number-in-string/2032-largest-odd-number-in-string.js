/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if (num === "") return "";
    if(num[num.length-1] % 2 === 1) return num;
    return largestOddNumber(num.slice(0,num.length-1));
};