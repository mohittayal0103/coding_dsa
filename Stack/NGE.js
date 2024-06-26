function nearestGreater(num){
    const max = 0;
    const stack = [];
    const a = [];

    for(let i = num.lenght-1; i > 0; i--){
        stack.push(num[i]);
//[2,3,1,6,4,3,8,4,6] -> input
//[6,8,1] -> Stack
//[8,8,8,8,-1,6,-1] -> output
        if(stack.length == 1){
            max = stack[stack.length-1];
            a[i] = -1;
        } else if(stack[stack.length-1] > max){
            max = stack[stack.length-1];
            a[i] = -1;
        } else if(stack[stack.length-1] < max){
            stack.pop();
            a[i] = stack[stack.length-1]
        }
    }

    // a.reverse();

    return a;
}

num = [2,3,1,6,4,3,8,4,6];

console.log(nearestGreater(num));
