/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewCnt = 0;
    let stoAr = stones.split('');
    for(let i=0;i<stoAr.length;i++) {
        if(jewels.includes(stoAr[i])) jewCnt++;
    }
    return jewCnt;
};