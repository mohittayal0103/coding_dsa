//Problem Link:
//https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one


function timeConversion(s) {
  // Write your code here
  let a = s.charAt(s.length-2);
  let b = parseInt(s.substring(0,2));
  
  if(a=='P'){
      if(b<12){
          b = (b + 12) + "";
      } else  {
          b = b + "";
      }
  }
  else{
      if(b == 12){
          b = "00";
      } else {
          b = s.substring(0,2);
      }
  }
  
 return(b + s.substring(2,8));
}