// https://leetcode.com/problems/crawler-log-folder/description/

// ----------------------------------------------------------------

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = [];

    for(let i = 0; i < logs.length; i++){
        let s = logs[i];
        if(s == "../" ){
            stack.pop();
        } else if(s == "./"){
            continue;
        } else{
            stack.push(s);
        }
    }

    let res = stack.length;

    return res;
};