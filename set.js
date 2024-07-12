const set = new Set([1,2,3]);

set.add(4)                      //to add the new value we use add method
set.add(4)                      // if add duplicate value it will ignore the new value
console.log(set.has(4));        //to check whther set contains the give value
set.delete(3)                   //to delete the value in set
console.log(set.size);          //to check the size of set we use size method
set.clear()                     //to clear the set


for(const item of set){
    console.log(item);
}

