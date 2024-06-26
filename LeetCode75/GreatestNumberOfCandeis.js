// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

//-----------------------------------------------------------------------------------------

var kidsWithCandies = function (candies, extraCandies) {
  let arr = [];
  let max = 0;

  for (let k = 0; k < candies.length; k++) {
    if (max < candies[k]) {
      max = candies[k];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    let x = candies[i] + extraCandies;

    for (let j = 0; j < candies.length; j++) {
      if (x >= max) {
        arr[i] = true;
      } else {
        arr[i] = false;
      }
    }
  }

  return arr;
};
