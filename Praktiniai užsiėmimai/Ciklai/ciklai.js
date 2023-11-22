function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//  PIRMAS  //
console.log(`%cPirma užduotis`, `color:white; background-color:black`)
const number01 = 7;
const number02 = 15;
const number03 = 22;
console.log(`number01: ${number01}; number02: ${number02}; number03: ${number03}`)


    //  A  //
console.log(`%cDalis A`, `color:purple; background-color:gray`)
const numberSum = number01 + number02 + number03;
console.log(`Sum:${numberSum}`)

    //  B   //
console.log(`%cDalis B`, `color:purple; background-color:gray`)
const numberToString = number01.toString() + number02.toString() + number03.toString();
console.log(numberToString, typeof numberToString);

    //  C   //
console.log(`%cDalis C`, `color:purple; background-color:gray`)
const numberToStringSpaces = `${number01.toString()} ${number02.toString()} ${number03.toString()}`
console.log(numberToStringSpaces)

    //  D   //
console.log(`%cDalis D`, `color:purple; background-color:gray`)
const allNumbersToString = `${number01.toString()} ${number02.toString()} ${number03.toString()} ${numberSum.toString()}`;
console.log(allNumbersToString)


//  ANTRAS  //
console.log(`%cAntra užduotis`, `color:white; background-color:black`)
const randomNum = rand(5,10)
console.log(randomNum)


//  TRECIAS  //
console.log(`%cTrečia užduotis`, `color:white; background-color:black`)
const greeting = `Labas`
for(let i = 0; i < 5; i++){
    console.log(greeting)
}


//  KETVIRTAS   //
console.log(`%cKetvirta užduotis`, `color:white; background-color:black`)
for(let i = 0; i < 7; i++){
    console.log(randomNum)
}


//  PENKTAS  //
console.log(`%cPenkta užduotis`, `color:white; background-color:black`)
for(let i = 0; i < randomNum; i++){
    console.log(randomNum)
}

//  SESTAS  //
console.log(`%cŠešta užduotis`, `color:white; background-color:black`)
if(randomNum > 7){
    for(let i = 0; i < randomNum; i++){
        console.log(randomNum)
    }
}
else{
    console.log(`Number less than 7`)
}

//  SEPTINTAS   //
console.log(`%cSeptinta užduotis`, `color:white; background-color:black`)

    //  A  //
    console.log(`%cDalis A`, `color:purple; background-color:gray`)
let num;
let sum = 0;
let numString = ``;
for(let i = 0; i < 5; i++){
    console.log(num = rand(10, 20))
    sum += num
    numString += ` ${num}`
}

    //  B  //
console.log(`%cDalis B`, `color:purple; background-color:gray`)
console.log(sum, typeof sum)

    //  C  //
console.log(`%cDalis C`, `color:purple; background-color:gray`)
console.log(numString, typeof numString)

    //  D  //
console.log(`%cDalis D`, `color:purple; background-color:gray`)
console.log(numString + ` ` + `${sum}`)


//  AŠTUNTAS   //
console.log(`%cAštuntas užduotis`, `color:white; background-color:black`)
let numb;
let loopCount = 0;
let loopSum = 0;
let rejectedNum = 0;
let odd = 0;
let even = 0;

do{
    loopCount++
    numb = rand(10, 25)
    numb % 2 == 0 ? even++ : odd++
    (numb < 18) ?  loopSum += numb : rejectedNum++
} while(numb > 11)


    //  A  //
console.log(`%cDalis A`, `color:purple; background-color:gray`)
console.log(numb)

    //  B  //
console.log(`%cDalis B`, `color:purple; background-color:gray`)
console.log(`Loop count: ${loopCount}`)

    //  C  //
console.log(`%cDalis C`, `color:purple; background-color:gray`)
console.log(`Sum of numbers less than 18: ${loopSum}`)

    //  D  //
console.log(`%cDalis D`, `color:purple; background-color:gray`)
console.log(`Count of rejected numbers: ${rejectedNum}`)

    //  E  //
console.log(`%cDalis E`, `color:purple; background-color:gray`)
console.log(`Event numbers: ${even}`)
console.log(`Odd numbers: ${odd}`)

    //  F  //
console.log(`%cDalis F`, `color:purple; background-color:gray`)
console.log(`NEAISKU`)



//  DEVINTAS   //
console.log(`%cDevinta užduotis`, `color:white; background-color:black`)
let number;
let outerLoop = 0;
let innerLoop = 0;
let countOfFive = 0;
do{
    outerLoop++
    number = rand(5, 10)
    for(let i = 0; i < number; i++){
        innerLoop++
    }
    if(number != 5){
        countOfFive = 0
    }
    else if(number == 5){
        countOfFive++
    }
}while(countOfFive < 3)

    //  A  //
console.log(`%cDalis A`, `color:purple; background-color:gray`)
console.log(`Outer loop count:${outerLoop}`)
console.log(`Inner loop count: ${innerLoop}`)


//  DEŠIMTAS   //
console.log(`%cDešimta užduotis`, `color:white; background-color:black`)
let kazys = 0;
let petras = 0;
do{
    kazys += rand(5, 25)
    petras += rand(10, 20)
    if(kazys >= 222 && kazys > petras){
        console.log(`Laimėjo Kazys, su ${kazys} taskais`)
        console.log(`Petro taskai: ${petras}`)
    }
    if(petras >= 222 && petras > kazys){
        console.log(`Laimejo Petras, us ${petras} taskais`)
        console.log(`Kazio taskai: ${kazys}`)
    }
    if(kazys >= 222 && petras == kazys)
        console.log(`Lygiosios; Kazys: ${kazys}; Petras: ${petras}`)
}while(kazys < 222 && petras < 222)

