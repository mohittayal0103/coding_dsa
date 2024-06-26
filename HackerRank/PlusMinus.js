//Problem Link:
//https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one


function plusMinus(arr) {
  // Write your code here
  let x=0;
  let y=0;
  let z=0;
  let n=arr.length;
  
  for(let i =0; i<n; i++){
      if(arr[i]>0){
           x++;
      }
      else if(arr[i]<0){
          y++;
      }
      else{
          z++;
      }
  }
  
  var ratio = x/n.toFixed(6);
  console.log(ratio);
  
  var ratio1 = y/n.toFixed(6);
  console.log(ratio1);
  
  var ratio2 = z/n.toFixed(6);
  console.log(ratio2);

}

