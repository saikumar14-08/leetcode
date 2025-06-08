/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let xcopy = Math.abs(x);
    while(xcopy>0) {
        let rem = xcopy%10;
        rev = (rev*10)+rem;
        xcopy = Math.floor(xcopy/10);
    }
    let limit = Math.pow(2,31);
    if(rev > limit || -rev < -limit-1) return 0;
    return x<0 ? -rev : rev
};