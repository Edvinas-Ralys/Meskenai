//      PIRMAS      //
console.log(`%cPirma užduotis`, `color:white; background-color:black`);
let string = (text = `Hello`) => text;
console.log(string());

//      ANTRAS      //
console.log(`%cAntra užduotis`, `color:white; background-color:black`);
let printing = function (greeting, count) {
  for (let i = 0; i < count; i++) {
    console.log(greeting);
  }
};
printing(`Labas`, 7);

//      Ketvirtas      //
console.log(`%cKetvirta užduotis`, `color:white; background-color:black`);
let divisionsCount = (number) => {
  let noRemainderCount = 0;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      noRemainderCount++;
    }
  }
  return noRemainderCount;
};
console.log(divisionsCount(110));

//      Penktas      //
console.log(`%cPenkta užduotis`, `color:white; background-color:black`);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arrayDecending = () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(rand(33, 77));
  }
  array.sort((a, b) => {
    let first = 0;
    let second = 0;
    for (let i = 2; i < a; i++) {
      if (a % i == 0) first++;
    }
    for (let i = 2; i < b; i++) {
      if (b % i == 0) second++;
    }
    return second - first;
  });
  return array;
};
console.log(arrayDecending());

let checker = (arr) => {
  let numberOfDivisions;
  let arrOfDivisions = [];
  arr.map((item) => {
    numberOfDivisions = 0;
    for (let i = 2; i < item; i++) {
      if (item % i == 0) {
        numberOfDivisions++;
      }
    }
    arrOfDivisions.push(numberOfDivisions);
  });
  console.log(arrOfDivisions);
};
checker(arrayDecending());

//      Šeštas      //
console.log(`%cŠešta užduotis`, `color:white; background-color:black`);
let onlyPrimes = () => {
  let array = [];
  for (let i = 0; i < 100; i++) array.push(rand(333, 777));
  let primeArray = [];
  for (let i = 0; i < array.length; i++) {
    if (divisionsCount(array[i]) == 0) {
      primeArray.push(array[i]);
    }
  }
  return primeArray;
};

console.log(onlyPrimes());

//      Septintas      //
console.log(`%cSeptinta užduotis`, `color:white; background-color:black`);
let arraysOnArrays = () => {
  let array = [];
  let innerArray = [];
  let numberOfLoops = rand(11, 20);
  while (array.length != numberOfLoops) {
    array.push(rand(0, 10));
    if (array.length == numberOfLoops - 1) {
      while (innerArray.length != numberOfLoops) {
        innerArray.push(rand(0, 10));
        if (innerArray.length == numberOfLoops - 1) {
          innerArray.push(0);
        }
      }
    }
  }
  array.push(innerArray);
  return array;
};
console.log(arraysOnArrays());

// Devintas //
console.log(`%cDevinta užduotis`, `color:white; background-color:black`);
let lastThreePrimes = () => {
  let array = [];
  while (array.length < 3) {
    array.push(rand(1, 33));
  }
  while (
    divisionsCount(array[array.length - 1]) != 0 ||
    divisionsCount(array[array.length - 2]) != 0 ||
    divisionsCount(array[array.length - 3]) != 0
  ) {
    array.push(rand(1, 33));
  }
  return array;
};
console.log(lastThreePrimes());

//Desšimtas//
console.log(`%cDešimta užduotis`, `color:white; background-color:black`);
let arraysOnArraysInArrays = () => {
  let outerArray = [];
  let innerArray = [];
  let allPrimes = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      innerArray.push(rand(1, 100));
    }
    outerArray.push(innerArray);
    innerArray = [];
  }
};
console.log(arraysOnArraysInArrays());
