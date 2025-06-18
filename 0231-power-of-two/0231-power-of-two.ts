function isPowerOfTwo(n: number): boolean {
    // while(n>=1){
    //     if(n===1) return true;
    //     return isPowerOfTwo(n/2);
    // }
    // return false;
    // Instead of running above loop we can do like below:
    if(n==1) return true;
    if(n%2!=0 || n<=0) return false;
    return isPowerOfTwo(n/2);
};