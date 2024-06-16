// https://leetcode.com/problems/backspace-string-compare/submissions/1290285744/

// ----------------------------------------------------------------------------------

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack1 = [];
    const stack2 = [];

    for(let i =0; i < s.length; i++){
        if(s[i] == "#"){
            stack1.pop();
        } else{
            stack1.push(s[i]);
        }
    }

    // console.log(stack1);

    for(let i = 0; i < t.length; i++){
        if(t[i] == "#"){
            stack2.pop();
        } else{
            stack2.push(t[i]);
        }
    }

    // console.log(stack2);
    
    let l = ""
    let k = ""

    for(let i = 0; i < stack1.length; i++){
        l += stack1[i];    
    }
    for(let i = 0; i < stack2.length; i++){
        k += stack2[i];    
    }

    if(l == k){
        return true;
    } else{
        return false;
    }
};