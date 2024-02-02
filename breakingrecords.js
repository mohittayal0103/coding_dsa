// Problem Link: 
// https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one



let countmin = 0;
    let countmax = 0;
    
    let min = scores[0];
    let max = scores[0];
     for ( let i=1; i<scores.length; i++){
        if(scores[i]>max){
            max=scores[i];
            countmax++;
        }
        else if(scores[i]<min){
            min=scores[i];
            countmin++;
        }
        else{
            continue;
        }
     }
     
     const int = [countmax, countmin];
     
     return int;