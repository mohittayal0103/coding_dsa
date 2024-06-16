// https://leetcode.com/problems/make-the-string-great/description/

// --------------------------------------------------------------------


/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    let top = "";
    let sectop = "";

    for(let i = 0; i < s.length; i++){
        top = stack[stack.length-1];

        if(stack.length > 0 && top.toLowerCase() === s[i].toLowerCase()  && top !== s[i]){
            stack.pop();
        } else{
            stack.push(s[i]);
        }
    }

    let res = '';
    for(let i = 0; i < stack.length; i++){
        res += stack[i];
    }
    
    return res;
};