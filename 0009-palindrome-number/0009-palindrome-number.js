/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let orig = x
    let rev = 0
    if(orig < 0) return false;
    while(orig>0) {
        let rem = orig%10;
        orig = Math.floor(orig/10);
        rev = (rev*10)+rem;
    }
    return rev === x;
};