solve = function(A, B){
    let count = 0;
    let x = -1;
    let y = -1;
    let x1 = Number.MIN_SAFE_INTEGER;
    
    for( let i = 0; i < A.length; i++){
        let X = i+1;
        if(A[i] == 1){
             x = X - B + 1;
             y = X + B - 1;   
                 
        if( x == 1){
            count += 1;
            x1 = y + 1;
        }else if (x == x1){
            count += 1;
            x1 = y + 1;
        }else if(y >= A.length){
            count += 1;
        }else if((x <= 1 && y >= A.length)){
            count = 1;
        }else if((x == x1) && (y >= A.length)){
            count = count - 1;
        }             
        }
    }
    
    if(count > 0){
        console.log(count);
    }else {
        console.log(-1);;
    }
    
}

solve([ 1, 1, 1, 1 ], 3);