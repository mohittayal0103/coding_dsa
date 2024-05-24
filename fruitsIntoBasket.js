// Problem Link
// https://leetcode.com/problems/fruit-into-baskets/

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let arr = [];
  for (let i = 0; i < fruits.length; i++) {
    let count = 0;
    let count1 = 0;
    for (let j = i; j < fruits.length; j++) {
      if (fruits[i] == fruits[j]) count++;
      else {
        for (let k = j; k < fruits.length; k++) {
          if (fruits[j] == fruits[k]) count1++;
          else if (fruits[k] == fruits[i]) count++;
          else break;
        }
        break;
      }
    }
    // console.log(count, count1)
    arr[i] = count + count1;
  }

  arr.sort((a, b) => b - a);

  // console.log(arr)

  return arr[0];
};

// 90 test case pass from 91
