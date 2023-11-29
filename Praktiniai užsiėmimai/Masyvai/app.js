function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//PIRMA//
console.log(`PIRMA UŽDUOTIS`);
let firstArr = [];
for (let i = 0; i < 30; i++) {
  firstArr.push(rand(5, 25));
}
console.log(firstArr);

//ANTRA//
console.log(`ANTRA UŽDUOTIS`);
//A//
console.log(`A DALIS`);
let countMoreThanTen = 0;
firstArr.forEach((item) => {
  item > 10 && countMoreThanTen++;
});
console.log(`More than 10: ${countMoreThanTen}`);
//B//
console.log(`B DALIS`);
let largestNum = 0;
let largestNumIndex = 0;
for (let i = 0; i < firstArr.length; i++) {
  firstArr[i] > largestNum &&
    (largestNum = firstArr[i]) &&
    (largestNumIndex = i);
}
console.log(`Larges number: ${largestNum}`);
console.log(`Largest number index: ${largestNumIndex}`);
//C//
console.log(`C DALIS`);
let sumEven = 0;
firstArr.forEach((number) => {
  number % 2 == 0 ? (sumEven += number) : null;
});
console.log(sumEven);
//D//
console.log(`D DALIS`);
let secondArr = firstArr.map((item) => {
  return item - 1;
});
console.log(secondArr);
//E//
console.log(`E DALIS`);
let biggerArr = [...firstArr];
for (let i = 0; i < 10; i++) {
  biggerArr.push(rand(5, 25));
}
console.log(biggerArr);
//F//
console.log(`F DALIS`);
let evenArr = [];
let oddArr = [];
for (let i = 0; i < biggerArr.length; i++) {
  i % 2 == 0 ? evenArr.push(biggerArr[i]) : oddArr.push(biggerArr[i]);
}
console.log(evenArr);
console.log(oddArr);
//G//
console.log(`G DALIS`);
for (let i = 0; i < firstArr.length; i++) {
  i % 2 == 0 && firstArr[i] > 15 ? (firstArr[i] = 0) : null;
}
console.log(firstArr);
//H//
console.log(`H DALIS`);
let firstMoreThanTen = firstArr.findIndex((item) => item > 10);
console.log(firstMoreThanTen);
//TRECIA//
console.log(`TRECIA UZDUOTIS`);
const randomLetter = (A, B, C, D) => {
  if (Math.random() < 0.25) {
    return A;
  } else if (0.25 < Math.random() < 0.5) {
    return B;
  } else if (0.5 < Math.random() < 0.75) {
    return C;
  } else {
    return D;
  }
};

let letterArray = [];
for (let i = 0; i < 200; i++) {
  letterArray.push(randomLetter(`A`, `B`, `C`, `D`));
}
console.log(letterArray);

let groupedLetters = letterArray.reduce((grouped, letter) => {
  if (grouped[letter] == null) grouped[letter] = 0;
  grouped[letter]++;
  return grouped;
}, {});
console.log(groupedLetters);

//KETVIRTA//
console.log(`KETVIRTA UZDUOTIS`);
let firstLetterArr = [];
let secondLetterArr = [];
let thirdLetterArr = [];
for (let i = 0; i < 200; i++) {
  firstLetterArr.push(randomLetter(`A`, `B`, `C`, `D`));
  secondLetterArr.push(randomLetter(`A`, `B`, `C`, `D`));
  thirdLetterArr.push(randomLetter(`A`, `B`, `C`, `D`));
}
let combinedLetteArr = [];
for (let i = 0; i < 200; i++) {
  combinedLetteArr.push(
    firstLetterArr[i] + secondLetterArr[i] + thirdLetterArr[i]
  );
}
console.log(combinedLetteArr);
let sortedLetters = combinedLetteArr.reduce((grouped, letter) => {
  if (grouped[letter] == null) grouped[letter] = 0;
  grouped[letter]++;
  return grouped;
}, {});
console.log(sortedLetters);
//PENKTA//
console.log(`PENKTA UZDUOTIS`);
let emptyArr = [];

const uniqueArray = () => {
  let randomNumber;
  let array = [];
  while (array.length != 100) {
    randomNumber = rand(100, 999);
    !array.includes(randomNumber) && array.push(randomNumber);
  }
  return array;
};
let firstUnique = uniqueArray();
let seconUnique = uniqueArray();
console.log(firstUnique);
console.log(seconUnique);

//SESTA//
console.log(`SESTA UZDUOTIS`);
let reducedArr = [];
firstUnique.forEach((item) => {
  !seconUnique.includes(item) && reducedArr.push(item);
});
console.log(reducedArr);
//SEPTINTA//
console.log(`SEPTINTA UZDUOTIS`);
let sameNumberArr = [];
firstUnique.forEach((item) => {
  seconUnique.includes(item) && sameNumberArr.push(item);
});
console.log(sameNumberArr);
//ASTUNTA//
console.log(`ASTUNTA UZDUOTIS`);
const messyArr = () => {
  let arr = [];
  for (let i = 0; i < firstUnique.length; i++) {
    arr.splice(firstUnique[i], seconUnique[i]);
  }
  return arr;
};
console.log(messyArr());
