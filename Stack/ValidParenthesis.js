//https://leetcode.com/problems/valid-parentheses/

//----------------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        let c = s[i];

        if(c == "(" || c == "{" || c == "["){
            stack.push(c);
        }
        else if(c == ")"){
            let top = stack.pop();

            if(top == "("){
                continue;
            }else{
                return false;
            }
        }
        else if(c == "]"){
            let top = stack.pop();
            
            if(top == "["){
                continue;
            }else{
                return false;
            }
        }
        else if(c == "}"){
            let top = stack.pop();
            
            if(top == "{"){
                continue;
            }else{
                return false;
            }
        }
    }

    if(stack.length == 0){
        return true;
    }else{
        return false;
    }
    
};