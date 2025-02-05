/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let ip = matrix.flat();
    ip.sort((a,b) => a-b);
    return ip[k-1];
};