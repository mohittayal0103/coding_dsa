//https://leetcode.com/problems/minimum-string-length-after-removing-substrings/


//-------------------------------------------------------------------------------



/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        top = stack[stack.length-1];

        if(stack.length > 0){
            if((top == "A" && s[i] == "B") || (top == "C" && s[i] == "D")){
                stack.pop();
            }
            else{
                stack.push(s[i])
            }
        } else{
            stack.push(s[i]);
        }
    }

    return stack.length;
};