const arr = [5, 1, 3, 2, 6, 8];

//Map
function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary);

console.log(output);

//filter
const output1 = arr.filter((x) => x > 4);

console.log(output1);

//reduce - finding sum

const output2 = arr.reduce(function (acc, curr) {        // acc -> accumulator, curr -> current
  acc = acc + curr;
  return acc;
}, 0);

console.log(output2);

const output3 = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output3);
