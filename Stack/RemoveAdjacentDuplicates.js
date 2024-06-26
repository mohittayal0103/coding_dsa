// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/



// ----------------------------------------------------------------------------------------



/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    let top = "";
    let sectop = "";

    for(let i = 0; i < s.length; i++){
        stack.push(s[i]);

        top = stack[stack.length-1];
        sectop = stack[stack.length-2];

        if(top == sectop){
            stack.pop();
            stack.pop();
        }
    }

    let res = '';
    for(let i = 0; i < stack.length; i++){
        res += stack[i];
    }
    
    return res;
};