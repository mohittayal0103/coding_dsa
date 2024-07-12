const arr = [1,2,3, 'Mohit']
    
// console.log(arr[0]);

arr.push(4);             // Adding element at the end of array - O(1)
arr.unshift(0);          // adding element at the beginning of array - O(n)
arr.pop();               // removing last element of an arrray - O(1)
arr.shift();             // removing the first element in array - O(n) 

for(const item of arr){     // For of loop to iterate array
    console.log(item);
}


//above are the basic array methods
// apart from these we have methods like:
// map, filter, reduce, concat, slice and splice

