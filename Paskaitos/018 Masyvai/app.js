console.log(`-------------------------`);
const arr1 = [
  [1, 7, 3],
  [4, 22, 6],
  [0, 8],
];
let sumArr1 = 0;
arr1.forEach((item) => {
  item.forEach((itemInner) => {
    sumArr1 += itemInner;
  });
});
console.log(sumArr1);
console.log(`-------------------------`);
const arr2 = [
  [0, [4, 22, 6]],
  2,
  3,
  [4, [4, 22, [0, [0, [0, [[[[0, 8], 8], 8], 8]]]]], 6],
  5,
  6,
  [0, 8],
  8,
  9,
];
let sum2 = 0;
function sumArr(arr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      sumArr(item);
    } else {
      sum2 += item;
    }
  });
}
sumArr(arr2);
console.log(sum2);
console.log(`-------------------------`);
const arr3 = [-5, 8, -3, 0, 4, 2, -1, 0, 1, -9, 6];
console.log(arr3);
//.map
let arr3Zeores = arr3.map((item) => {
  if (item < 0) {
    return (item = 0);
  } else {
    return item;
  }
});
console.log(arr3Zeores);
//.forEatch. Koreguoja esama masyva
// arr3.forEach((item, index) => {
//   if (item < 0) {
//     arr3[index] = 0;
//   }
// });
console.log(arr3);
//.map
let arr3Ones = arr3.map((item) => {
  if (item < 0) {
    return (item = 1);
  } else {
    return item;
  }
});
console.log(arr3Ones);
console.log(`-------------------------`);
const colors = ["pink", "green", "blue", "yellow", "pink", "black", "pink"];
const blackArr = colors.map((item) => {
  if (item == `pink`) {
    return (item = `black`);
  }
  return item;
});
console.log(colors);
console.log(blackArr);
console.log(`-------------------------`);
const colors2 = [
  { color: "pink" },
  { color: "green" },
  { color: "blue" },
  { color: "yellow" },
  { color: "pink" },
  { color: "black" },
  { color: "pink" },
];

console.log(colors2);
const blackArr2 = colors2.map((item) => {
  if (item.color == `pink`) {
    return { color: `black` };
  }
  return item;
});
console.log(blackArr2);
console.log(`-------------------------`);
const colors3 = [
  { color: "pink", id: 1, sky: "blue" },
  { color: "green", id: 2, sky: "blue" },
  { color: "blue", id: 3, tractor: "green" },
  { color: "yellow", id: 4, sky: "blue" },
  { color: "pink", id: 5, forest: "green" },
  { color: "black", id: 6, sky: "blue" },
  { color: "pink", id: 7, sky: "blue" },
];

const blackArr3 = colors3.map((item) =>
  item.color == `pink` ? { ...item, color: `black` } : { ...item }
);
console.log(blackArr3);
console.log(`-------------------------`);
const allBlackArr = colors3.map((item) => ({ ...item, color: `black` }));

console.log(allBlackArr);
console.log(`-------------------------`);
const colors4 = [
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
];
//Antra elementa padaryti black
const secondBlack = colors4.map((item) => {
  item[1] = `black`;
  return item;
});
console.log(secondBlack);
