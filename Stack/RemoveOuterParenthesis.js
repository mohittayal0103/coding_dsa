//https://leetcode.com/problems/remove-outermost-parentheses/

//-----------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [];
    let res = '';

    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            stack.push(s[i]);
            if(stack.length > 1){
                res += s[i];
            }
        }else if(s[i] == ")"){
            stack.pop();
            if(stack.length > 0){
                res += s[i];
            }
        }
    }

    return res;
};