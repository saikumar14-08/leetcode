/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let resAr = [];
    for(let i=0;i<words.length;i++)
        for(let j=0;j<words[i].length;j++)
            if(words[i][j] === x) {
                resAr.push(i)
                break;
            }
    return resAr;
};