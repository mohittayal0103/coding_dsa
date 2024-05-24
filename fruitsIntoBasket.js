// Problem Link
// https://leetcode.com/problems/fruit-into-baskets/


/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let arr = [];
    for(let i = 0; i < fruits.length; i++){
        let count = 0;
        let count1 = 0;
        if(fruits[i] != fruits[i+1]){
            for(let j = i; j < fruits.length; j++){
                if(fruits[j] == fruits[i]){
                    count++;
                }
                else if(fruits[j] == fruits[i+1]){
                    count1++;
                }
                else
                break;
            }
        }
        // console.log(count, count1)
        arr[i] = count+count1;
    }
    
    arr.sort((a,b)=> b-a);

    // console.log(arr)

    return arr[0];

};

// 60 test case pass from 91