//TRECIA//
// let userInput = 6;
// let array = [];
// for (let i = 1; i <= userInput; i++) {
//   array.push(i);
// }
// console.log(array);
// let allMulti = array.reduce((total, item) => total * item, 1);
// console.log(allMulti);

//KETVIRTAS//
// let inputString = prompt(`Enter a string`);
// console.log(`String: ${inputString}`);
// let stringReversed = inputString.split(``).reverse().join(``);
// console.log(`Reversed: ${stringReversed}`);

//PENKTAS//
// const isPrime = (number) => {
//   let divisionCount = 0;
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       divisionCount++;
//     }
//   }
//   console.log(`Count of divisions: ${divisionCount}`);
//   if (divisionCount == 0) return `is prime`;
//   else {
//     return `not prime`;
//   }
// };
// console.log(isPrime(15));

//SESTAS//
// let userString = prompt(`Enter a word`);
// const vowels = [`a`, `e`, `i`, `o`, `u`, `y`];
// const countVowels = (arr) => {
//   let numbOfVowels = 0;
//   arr.forEach((element) => {
//     vowels.includes(element) && numbOfVowels++;
//   });
//   return numbOfVowels;
// };
// console.log(countVowels(userString.toLocaleLowerCase().split(``)));

//SEPTINTA//
// let userInput = prompt(`Enter a numeber`);
// const allSquareSum = (number) => {
//   let total = 1;
//   for (let i = 1; i <= number; i++) {
//     total += i * i;
//   }
//   return total;
// };
// console.log(allSquareSum(userInput));

//ASTUNTA//
// let userInput = prompt(`Enter a word`);
// const checkPolindrome = (word) => {
//   let wordArr = word.toLocaleLowerCase().split(``);
//   console.log(wordArr.length);
//   let reversedWordArr = word.toLocaleLowerCase().split(``).reverse();
//   console.log(reversedWordArr);
//   let sameLetter = 0;
//   for (let i = 0; i < wordArr.length; i++) {
//     if (wordArr[i] == reversedWordArr[i]) {
//       sameLetter++;
//     }
//   }
//   console.log(wordArr.length);
//   console.log(sameLetter);
//   if (sameLetter == wordArr.length) {
//     return `is palindrome`;
//   } else {
//     return `is not palindrome`;
//   }
// };
// console.log(checkPolindrome(userInput));

//DEVINTA//
// const multiplicationTable = (number) => {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${i} x ${number} = ${i * number}`);
//   }
// };
// multiplicationTable(5);

//DESIMTA//
let userInput = prompt(`Enter a new password`);
const passValidator = function (password) {
  const specChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  const passwordMissingElement = `color:red`;
  const passwordHasElement = `color:green`;
  if (!/\d/.test(password)) {
    console.log(`%cNeeds a digit`, passwordMissingElement);
  } else {
    console.log(`%cPassword contains a digit`, passwordHasElement);
  }
  if (!specChars.test(password)) {
    console.log(`%cNeeds spec chars`, passwordMissingElement);
  } else {
    console.log(`%cPassword contains a spec char`, passwordHasElement);
  }

  if (password.length < 8) {
    console.log(`%cPassword too short`, passwordMissingElement);
  } else {
    console.log(`%cPassword is longer than 8 chars`, passwordHasElement);
  }
  if (!/[A-Z]/.test(password)) {
    console.log(`%cNeeds atleast one upper case char`, passwordMissingElement);
  } else {
    console.log(`%cPassword contains an upper case`, passwordHasElement);
  }
  if (!/[a-z]/.test(password)) {
    console.log(`%cNeeds atleast one lower case char`, passwordMissingElement);
  } else {
    console.log(`%cPassword contains a lower case`, passwordHasElement);
  }
  if (
    /\d/.test(password) &&
    specChars.test(password) &&
    password.length > 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password)
  ) {
    console.log(`Password OK`);
    console.log(`Password:${password}`);
  }
};
passValidator(userInput);

// !password.includes(digits) ? console.log(`Needs a digit`) : !password.includes(specChars) ? console.log(`Needs a special char`) ? password.length < 8 ? console.log(`Password too short`) : !/[A-Z]/.test(password) ? console.log(`Needs atleast one upper case char`) : !/[a-z]/.test(password) ? console.log(`Needs atleast one lower case char`) : console.log(`Password is valid: ${password}`)
