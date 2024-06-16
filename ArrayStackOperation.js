// https://leetcode.com/problems/build-an-array-with-stack-operations/description/

// ------------------------------------------------------------------------------------

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const stack1 = [];
    let index = 0;

    for(let i = 1; i <= n; i++){
        if(target[index] == i){
            stack1.push("Push");
            index++;
        } else{
            stack1.push("Push");
            stack1.push("Pop");
        }

        if(index == target.length){
            break;
        }
    }

    return stack1;
};