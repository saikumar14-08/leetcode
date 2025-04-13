/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(p) {
    let minBuy = p[0];
    let maxPr = 0;
    let dailyProfit = 0;
    for (let i = 1; i < p.length; i++) {
        dailyProfit = p[i]-minBuy;
        maxPr = Math.max(dailyProfit,maxPr);
        minBuy=Math.min(p[i],minBuy)
    }
    return maxPr
};