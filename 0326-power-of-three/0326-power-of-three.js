/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    for(let i=1;i<n/3+1;i*=3) {
        if(3*i == n || n==1)
            return true
    }
    return false;
};