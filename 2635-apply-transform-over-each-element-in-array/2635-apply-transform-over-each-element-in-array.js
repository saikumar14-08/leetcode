/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 const newArr = arr.map((n,i) => fn(n,i));
    return newArr;
 */
var map = function(arr, fn) {
    const newArr = [];
    for(let i=0;i<arr.length;i++) {
        newArr.push(fn(arr[i],i));
    }
    return newArr;
};