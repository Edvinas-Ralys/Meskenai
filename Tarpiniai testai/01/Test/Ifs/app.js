//  EDVINAS RALYS  //
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// UŽD 1 //
let diceOne = rand(1, 6);
let diceTwo = rand(1, 6);
let diceSum = diceOne + diceTwo;
if (diceSum > 8) {
  console.log(
    `Žaidimą laimėjote. Pirmas kauliukas: ${diceOne}; antras kauliukas: ${diceTwo} Kauliukų suma: ${diceSum}`
  );
} else {
  console.log(
    `Žaidimą pralaimėjote. Pirmas kauliukas: ${diceOne}; antras kauliukas: ${diceTwo} Kauliukų suma: ${diceSum}`
  );
}

// UŽD 2 //
let pilkis = rand(3, 6);
let murklys = rand(3, 6);

pilkis < murklys
  ? console.log(
      `Pilkis: ${pilkis}kg; Murklys: ${murklys}kg; Lengvesnis katinukas - Pilkis`
    )
  : pilkis > murklys
  ? console.log(
      `Pilkis: ${pilkis}kg; Murklys: ${murklys}kg; Lengvesnis katinukas - Murklys`
    )
  : console.log(`Katinukų svoriai vienodi, po ${pilkis}kg`);

// UŽD 3 //
let katinai = rand(0, 30);
let karves = rand(0, 30);
console.log(`Atėjo katinų: ${katinai}; Atėjo karvių ${karves};`);
katinai <= 15 && karves <= 15 ? console.log(`Telpa`) : console.log(`Netelpa`);

// UŽD 4 //
let antanoKauliukas = rand(1, 6);
// console.log(antanoKauliukas);
antanoKauliukas == 1 || antanoKauliukas == 5
  ? console.log(`Perka televizorių`)
  : antanoKauliukas == 2 || antanoKauliukas == 6
  ? console.log(`Perka šaldytuvą`)
  : console.log(`Perka skalbimo mašiną`);

// UŽD 5 //
let num1 = rand(1, 7);
let num2 = rand(1, 7);
let num3 = rand(1, 7);
console.log(num1, num2, num3);
if((num1 < num2 && num1 < num3) && num2 < num3){
    console.log(num1, num2, num3)
}
else if((num1 < num2 && num1 < num3) && num2 > num3){
    console.log(num1, num3, num2)
}
else if((num2 < num1 && num2 < num3) && num1 < num3){
    console.log(num2, num1, num3 )
}
else if((num2 < num1 && num2 < num3) && num1 > num3){
    console.log(num2, num3, num1 )
}
else if((num3 < num2 && num3 < num1) && num2 < num1){
    console.log(num3, num2, num1)
}
else if((num3 < num2 && num3 < num1) && num2 > num1){
    console.log(num3, num1, num2)
}
else if((num1 == num2) && num1 < num3){
    console.log(num1, num2, num3)
}
else if((num1 == num2) && num1 > num3){
    console.log(num3, num2, num1)
}
else if((num2 == num3) && num2 < num1){
    console.log(num2, num3, num1)
}
else if((num2 == num3) && num2 > num1){
    console.log(num1, num3, num2)
}
else if((num3 == num1) && num3 < num2){
    console.log(num3, num1, num2)
}
else if((num3 == num1) && num3 > num2){
    console.log(num2, num1, num3)
}
else{
    console.log(num1, num2, num3)
}
