function isPowerOfTwo(n){
    if(n < 1){
        return false;
    }else{
        while(n > 1){
            if( n % 2 != 0){
                return false;
            }
            n = n / 2;
        }
        return true;
    }
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));

//BigO -> O(logn)   : Value of n is divided by half