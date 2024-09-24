// Closure

function x() {
  counter = 0;

  function y() {
    counter++;
    console.log(counter);
  }

  return y;
}

const fn = x();

fn();
fn();

//-----------------------------------------------------------------------------------------------

// Function Currying -> fn(a, b, c) to transform into fn(a)(b)(c)

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5)); //->10

//transforming sum(2,3,5) -> sum(2)(3)(5)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);

console.log(curriedSum(2)(3)(5)); //->10

//also

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

console.log(add5); //->10

//-----------------------------------------------------------
//this keyword -> four determinations

//1st Implicit Binding
const person = {
  name: "Mohit",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};
person.sayMyName();

//2nd Explicit Binding
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
sayMyName.call(person);

//3rd New Binding
function Person(name) {
  //this = {};   -> Here this will work as object and person will work as constructor function
  this.name = name;
}
const p1 = new Person("Mohit");
const p2 = new Person("Tayal");

console.log(p1.name, p2.name);

//4th Default Binding
sayMyName(); // -> my name is undefined

globalThis.name = "Mohit Tayal";

sayMyName(); // -> my name is mohit tayal ->  Default Binding look for global scope

//-----------------------------------------------------------------------------------------

//Prototype

function Person(fName, lName) {   //constructor function
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Mohit", "Tayal");
const person2 = new Person("Tayal", "Mohit");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName()); // ->  Mohit Tayal
console.log(person2.getFullName()); // ->  Tayal Mohit

// Prototype Inheritence

function superHero(fName, lName) {
  //this = {}
  Person.call(this, fName, lName); // Inheriting object parameters
  this.isSuperHero = true;
}

superHero.prototype.fightCrime = function () {
  console.log("fighting crime");
};

superHero.prototype = Object.create(Person.prototype); //Inheriting prototype

const batman = new superHero("Mohit", "Tayal");

superHero.prototype.constructor = superHero;

console.log(batman.getFullName()); //-> Mohit Tayal
// console.log(fightCrime());

//--------------------------------------------------------------------------------------------
// Class -> class keyword is introduced in 2015. It is same as prototype with better syntax in javascript

class PersonC {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

const classp1 = new PersonC("Mohit", "Tayal"); // Creating instance in class

console.log(classp1.sayMyName()); // -> Mohit Tayal

class SuperHeroC extends PersonC {
  //inheriting class
  constructor(fName, lName) {
    super(fName, lName); //using super keyword
    this.isSuperHero = true;
  }

  fightCrime() {
    console.log("Fighting Crime");
  }
}

const superMan = new SuperHeroC("Tayal", "Mohit");

console.log(superMan.sayMyName()); // -> Tayal Mohit

//--------------------------------------------------------------------

// Iterables and iterators

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) return { value: "Hello", done: false };
        else if (step === 2) return { value: "World", done: false };
        else return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for(const word of obj){
    console.log(word);
}


//------------------------------------------------------------------

//Generator

function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}

const genratorObject = generatorFunction()

for(const word of genratorObject){
    console.log(word);
}