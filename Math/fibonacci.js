// let sum = 1;
// let arr = [];
// arr.push(0);
// for(let i = 1; i < 10; i++){
//     arr.push(sum);
//     sum = arr[i] + arr[i-1]; 
// }

// console.log(arr);


//---------------------------------------

function fibonacci(n){
    const fib = [0,1];

    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib;
}

console.log(fibonacci(2));

console.log(fibonacci(3));

console.log(fibonacci(4));

console.log(fibonacci(5));

console.log(fibonacci(7));