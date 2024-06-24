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


// --------------------------------------------------------------------------------------


var buildArray = function(target, n) {
    let stack1 = [];
    let stack2 = [];
    let current = 0;
    let crr = -1;

    for(let i = 1; i <= n; i++){
        stack1.push(i);
        stack2.push("Push");
        crr++;

        if(stack1[crr] == target[current]){
            // stack2.push("Push");
            current++;
        }else{
            // stack2.push("Push");
            stack1.pop();
            stack2.push("Pop");
            crr--;
        }
        
        if(isEqual(stack1, target) != false){
            break;
        }
    }
    return stack2;
};


var isEqual = function(arr1, arr2) {
    if(arr1.length != arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}