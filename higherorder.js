const radius = [1, 2, 3, 4, 5];

const diameter = function (x) {
  // Callback Function
  return 2 * x;
};

const calculate = function (y, logic) {
  // Higher Order Function
  const output = [];
  for (let i = 0; i < y.length; i++) {
    output.push(logic(y[i]));
  }
  return output;
};

console.log(calculate(radius, diameter));       //or
console.log(radius.map(diameter));              //same output

//-----------------------------------------------------


Array.prototype.calculate1 = function (logic) {
    // Higher Order Function
    const output = [];
    for (let i = 0; i < this.length; i++) {
      output.push(logic(this[i]));
    }
    return output;
  };

  console.log(radius.calculate1(diameter)); 