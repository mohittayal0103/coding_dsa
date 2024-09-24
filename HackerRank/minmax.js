// Problem link
// https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

for (let i = 0; i < arr.length;) {
    if (arr[i] > arr[i + 1]) {
      let a = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = a;
      i--;
    }
    else {
      i++;
    }
  }
  
  let min = 0;
  let max = 0;
  
  for(let i = 0; i<arr.length-1; i++){
      min = min+arr[i];
  }
  for(let i = 1; i<arr.length; i++){
      max = max+arr[i];
  }
  
  console.log(min, max);
