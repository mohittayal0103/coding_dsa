const obj = {
    name: 'Mohit',
    age: 25,
    'key-three': true,
    sayMyName: function(){
        console.log(this.name);
    }
};

console.log(obj);
console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']); // this is not possible with dot notation because of - in between r space in bw.

obj.hobby = 'Football' //adding a key value pair in object

console.log(obj);

delete obj.hobby // deleting a key value pair in obj

console.log(obj);

obj.sayMyName();  // calling the fuction exists inside the object


// apart from these we have methods like:
// Object.keys(), .values(), .entries()