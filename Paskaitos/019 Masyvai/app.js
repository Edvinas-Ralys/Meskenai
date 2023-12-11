const small = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
const ones = small.filter((item) => item == 1);
console.log(ones);
const farm = [
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
];

let catsAndDogs = farm.filter(
  (item) => item.type == `dog` || item.type == `cat`
);
let noPigs = farm.filter((item) => item.type != `pig`);
console.log(catsAndDogs);
console.log(noPigs);
let whiteDogs = farm
  .filter((item) => item.type == `dog`)
  .map((item) => ({ ...item, color: `white` }));
console.log(whiteDogs);

const farm2 = [
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "black" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Meow", type: "cat", color: "black" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "white" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "brown" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "white and black" },
  { name: "Woof", type: "dog" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Woof", type: "dog" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "tricolor" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
];
let findCat = farm2.find((item) => item.type == `cat`);
let findCatColor = findCat.color;
console.log(findCat);
console.log(findCatColor);
let dog = { name: `Woof` };
console.log(dog?.name);
const catFinder = (catIndex) => {
  let catsFound = 0;
  return farm2.find((item) => item.type == `cat` && ++catsFound == catIndex);
};
console.log(catFinder(2));
const showTen = () => {
  let animalCount = 0;
  let newFarm = farm2.filter(
    (item) => (item.type == `dog` || item.type == `cat`) && ++animalCount <= 9
  );

  return newFarm;
};
console.log(showTen());
const animals = [
  { name: "Fancy", species: "dog", age: 5 },
  { name: "Poncho", species: "dog", age: 10 },
  { name: "Tom", species: "cat", age: 3 },
  { name: "Jerry", species: "cat", age: 1 },
  { name: "Bella", species: "dog", age: 12 },
  { name: "Charlie", species: "dog", age: 8 },
  { name: "Max", species: "cat", age: 7 },
];
const animalAge = animals.reduce((total, item) => total + item.age, 0);
console.log(animalAge);
const animalAgeAverage = animals.reduce((sum, item, index, array) => {
  sum += item.age;
  if (index == array.length - 1) {
    return sum / array.length;
  }
  return sum;
}, 0);
console.log(animalAgeAverage);
animals.sort((a, b) => a.age - b.age);
console.log(animals);
