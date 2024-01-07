function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Pirma uzd
const bitGirls = ["Edita", "Lina", "Brigita", "Deimantė", "Justė"];
const cats = ["Murka", "Rainius", "Meilutė", "Bosas", "Dičkis"];
bitGirls.unshift(`Nauseda`);
console.log(bitGirls);
//Antra uzd
console.log(`ANTRA`);
let bitCats = cats.map((name, weight) => {
  let random = rand(0, 1);
  random == 1 ? (weight = `storas`) : (weight = `normalus`);
  return { name, weight };
});

console.log(bitCats);
//Trecias uzd
console.log(`TRECIA`);
let fat = 0;
let normal = 0;
bitCats.forEach((cat) => {
  cat.weight == `storas` ? fat++ : normal++;
});
console.log(`Storu: ` + fat);
console.log(`Normaliu: ` + normal);
//Ketvirtas uzd.
console.log(`KETVIRTA`);
const sortedCats = bitCats.sort((a, b) => {
  if (a.name[1] < b.name[1]) {
    return -1;
  }
  if (a.name[1] > b.name[1]) {
    return 1;
  }
  return 0;
});
console.log(sortedCats);
//Penkta uzd.
console.log(`PENKTA`);
