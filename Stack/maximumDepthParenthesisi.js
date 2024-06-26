//https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

//--------------------------------------------------------

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const stack = [];
    let max = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            stack.push(s[i]);
        }else if(s[i] == ")"){
            stack.pop();
        }

        if(stack.length > max){
            max = stack.length;
        }
    }

    return max;
};