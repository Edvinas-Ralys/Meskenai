//MASYVAI//
const animals = [`Lion`, `Racoon`, `Monkey`, `Cat`, `Dog`, `Bird`, `Turtle`];

animals[7] = `Frog`;
animals.push(`Elephant`);
animals.push(`Horse`, `Cow`, `Pig`);
animals.unshift(`Tiger`, `Bear`);

animals.pop(); //ismeta is galo
animals.pop();

animals.shift(); //ismeta is priekio
animals.shift();
console.log(animals, animals.length);
console.log(`---For cycle---`);

const animalsLine = animals.join(` + `);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
console.log(`---For of cycle---`);
for (let animal of animals) {
  console.log(animalsLine);
}

animals.forEach((animal) => {
  console.log(animal);
});
//////////////////////////////////
const arr123 = [1, 2, 3, 77, 78];

let sum = 0;
arr123.forEach((element) => (sum += element));
console.log(sum);
/////////////////////////////////
const arr = [1, 2, -3, 1, -1];

let sumPos = 0;
arr.forEach((num) => {
  if (num > 0) {
    sumPos += num;
  }
});
console.log(sumPos);
/////////////////////////////////

const farm = [`Cow`, `Chicken`, `Pig`, `Cow`, `Chicken`, `Cow`];
let cowCount = 0;
farm.forEach((animal) => (animal == `Cow` ? cowCount++ : null));
console.log(cowCount);
/////////////////////////////////
const superFarm = [
  { animal: `Cow`, weight: 500 },
  { animal: `Chicken`, weight: 3 },
  { animal: `Pig`, weight: 100 },
  { animal: `Cow`, weight: 400 },
  { animal: `Chicken`, weight: 2 },
  { animal: `Cow`, weight: 600 },
];
let totalWeight = 0;
superFarm.forEach((element) => {
  element.animal == `Cow` ? (totalWeight += element.weight) : null;
});
console.log(totalWeight);
/////////////////////////////////
const allAnimalWeight = {};
superFarm.forEach((a) => {
  if (allAnimalWeight[a.animal] === undefined) {
    allAnimalWeight[a.animal] = 0;
  }
  allAnimalWeight[a.animal] += a.weight;
});
console.log(allAnimalWeight);
////////////////////////////////
const colors = [`red`, `green`, `blue`, `yellow`, `pink`, `purple`, `orange`];
let isBlack = `NO`;
let isPink = `NO`;
colors.forEach((color) => {
  color == `black` ? (isBlack = `YES`) : null;
  color == `pink` ? (isPink = `YES`) : null;
});
console.log(isBlack);
console.log(isPink);

colors.includes(`black`) ? console.log(`YES BLACK`) : console.log(`NO BLACK`);
colors.includes(`pink`) ? console.log(`YES PINK`) : console.log(`NO PINK`);
