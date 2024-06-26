// https://leetcode.com/problems/baseball-game/description/


// ---------------------------------------------------------------

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];

    for(let i = 0; i < operations.length; i++){
        if(operations[i] == "C"){
            stack.pop();
        } else if(operations[i] == "D"){
            let d = stack[stack.length-1] * 2;
            stack.push(d);
        } else if(operations[i] == "+"){
            let a = stack[stack.length-1] + stack[stack.length-2];
            stack.push(a);
        } else {
            let x = parseInt(operations[i]);
            stack.push(x);
        }    
    }

    let res = 0;
    for(let i = 0; i < stack.length; i++){
         res += stack[i]; 
    }

    return res;
};