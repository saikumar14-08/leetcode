/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let orig = x
    let rev = ''
    while(orig>0) {
        let rem = orig%10;
        orig = Math.floor(orig/10);
        rev+=rem;
    }
    return rev == x;
};