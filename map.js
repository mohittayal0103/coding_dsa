const map = new Map([['a',1], ['b',2]])         // to create map we use map constructor
                                                //the constructor optionally accepts array as an argument.
                                                // array should contain arrays of length 2 as elements
                                                //here a&b are key and 1&2 are corresponding values

                                                

map.set('c',3)                                  //to add the key value in map we use set method
map.delete('b')                                 // to delete the value we use delete method
console.log(map.has('a'));                      //to check whether contain following data we use has method
console.log(map.size);                          //to check the size of map we use size method
// map.clear();                                    //to delete all value we use clear method
                                                
for(const [key,value] of map){
    console.log(`${key}: ${value}`);
}