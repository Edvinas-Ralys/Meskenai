console.log('1 UZDUOTIS')

const masyvusuma = masyvas => {
    let suma = 0;
    masyvas.forEach(num => suma += num);
    console.log(suma);
}

mase = [1, 5, 8, 11, 24, 5, 15];

masyvusuma(mase);


console.log('2 UZDUOTIS')
function compareNumbers() {

    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    if (number1 === number2) {
        document.getElementById('result').innerText = 'Skaičiai yra lygūs.';
    } else if (number1 > number2) {
        document.getElementById('result').innerText = 'Pirmas skaičius yra didesnis.';
    } else {
        document.getElementById('result').innerText = 'Antras skaičius yra didesnis.';
    }
}

console.log('3 UZDUOTIS')
let result = fact(6);



function fact(a) {

    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * fact(a - 1);
    }
}
console.log(result);



console.log('4 UZDUOTIS')

function skaicius(t) {
    const zod = t.split(' ');
    return zod.length;
}
let sakinys = "Sveiks, zdarof kon tu vienas?";
let calc = skaicius(sakinys);
console.log(calc);






console.log('5 UZDUOTIS')
const backwards = string => {
  return string.split(``).reverse().join(``)
}

console.log(
  backwards(`Hi, my name is, what? My name is, who?
My name is, chka-chka, Slim Shady`)
)

console.log('6 UZDUOTIS')
const array = [5, 10, 12, 3, 6, 14, 15, 19, 18]
const filterEven = arr => {
  return arr.filter(item => item % 2 === 0)
}

console.log(filterEven(array))


console.log('7 UZDUOTIS')
function laikas(minutes) {
    let valandos = Math.floor(minutes / 60);
    let minutės = minutes % 60;
    return `${valandos} val. ${minutės} min.`;
}

// Norint patikrinti:
console.log(`Laikas: ${laikas(90)}`)


console.log('8 UZDUOTIS')
function yraPirminis(skaicius) {
    for (let i = 2; i < skaicius; i++) {
      if (skaicius % i === 0) {
        return false;
      }
    }

    return true;
  }
// Norint patikrinti:
console.log(`Jei yra pirminis: ${yraPirminis(3)}`)
