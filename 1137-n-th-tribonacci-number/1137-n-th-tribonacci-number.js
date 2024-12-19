/**
 * @param {number} n
 * @return {number}
 */
var memo =(fn) => {
    const cache = {}   
    return function(...args) {
        let key = args.toString();
        if(key in cache)
            return cache[key]
        const res = fn(...args);
        cache[key] = res
        return res
    }
}

var tribonacci = memo(function(n) {
    if(n == 0) return 0
    if(n == 1 || n == 2) return 1
    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
});