/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let length1 = word1.length > word2.length ? word1.length : word2.length
    let S = '';

     for(let i = 0; i < length1; i++){
        if(word1[i] != undefined)
        S += word1[i];
        if(word2[i] != undefined)
        S += word2[i];
     }
        

    return S;
    //  console.log(S);
    
};