if (true) {
  var a = `A`;
}

function fun() {
  var b = `B`;
  console.log(a);
}
console.log(a);
// console.log(b);
fun();

const fun2 = () => {
  console.log(`fun2 function! version 1`);
};

// fun2 = () => {
//   console.log(`fun2 function! version 2`);
// };
// fun2();

// recursion function //
//issikviecia pati save

function count123(count) {
  console.log(`start`, count);
  count++;
  if (count <= 3) {
    count123(count);
  }
  console.log(`end`, count - 1);
}
count123(1);

const fun3 = () => {
  console.log(`This is fun3 function!`);
};

const fun4 = () => {
  console.log(`This is fn4 function!`);
  return fun3;
};
fun4()();

//      CALLBACK       //

const fun5 = (f) => {
  console.log(`Fun5 function`);
  f();
};
fun5(fun3);

const calculate = (action, num1, num2) => {
  let result = action(num1, num2);
  console.log(
    `%cResult: ${result}`,
    `color:white; background-color:black; font-size: 25px`
  );
};

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

calculate(mult, 10, 5);
