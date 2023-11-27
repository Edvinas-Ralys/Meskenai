// CIKLAI //
//PIRMAS//
for (let i = 10; i >= 1; i--) {
  console.log(`Liko ratų: ${i}`);
}

//ANTRAS//
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let totalSpeed = 0;
for (let i = 10; i >= 1; i--) {
  totalSpeed += rand(120, 220);
  if (i == 1) {
    console.log(`Vidutinis greitis: ${totalSpeed / 10}`);
  }
}

//TRECIAS//
let fuelLeft = 44;
for (let i = 10; i >= 1; i--) {
  fuelLeft -= rand(3, 6);
  if (fuelLeft < 0) {
    console.log(
      `Kuro neužteko. Sustojo ties ${10 - i} ratu su ${fuelLeft} litrais`
    );
    break;
  } else if (i == 1) {
    console.log(`Apvažiuoti pavyko. Liko ${fuelLeft} litrai`);
  }
}

//KETVIRTAS//
let minSpeed = 0;
let turnSpeed;
for (let i = 10; i >= 1; i--) {
  for (let j = 0; j < 5; j++) {
    turnSpeed = rand(20, 120);
    if (j == 0 && i == 10) {
      minSpeed = turnSpeed;
    }
    if (turnSpeed < minSpeed) {
      minSpeed = turnSpeed;
    }
  }
  if (i == 1) {
    console.log(`Mažiausias greitis: ${minSpeed}`);
  }
}

//PENKTAS//
let kmDriven = 0;
let kangaroo;
let evade;
let brake;
let crash = 0;
do {
  kmDriven++;
  kangaroo = rand(0, 1);
  evade = rand(0, 1);
  brake = rand(0, 1);
  if (kangaroo == 1 && evade == 0 && brake == 0) {
    crash++;
  }
} while (crash == 0);
console.log(`Nuvaziavo km: ${kmDriven}`);
