function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// UŽD 1
console.log(`%cUzdavinys nr. 1`, `color :white; background-color:black`)
let num1 = 5;
let num2 = 16;
let num3 = 23;
let sum = num1 + num2 +num3;
console.log(`num1 = ${num1}; num2 = ${num2}; num3 = ${num3}`)
console.log(`Sum of the numbers = ${sum}`)
console.log(`%cA, B, C, D dalis`, `color :white; background-color:purple`)
let numStr = `${num1} ${num2} ${num3} ${sum}`;
console.log(`Numbers as a string ${numStr}; type: ${typeof numStr}`)


// UŽD 2
console.log(`%cUzdavinys nr. 2`, `color :white; background-color:black`)
let num = rand(5, 10);
console.log(`Generated number = ${num}`)


// UŽD 3
console.log(`%cUzdavinys nr. 3`, `color :white; background-color:black`)
let greeting = `Labas`;
for(let i = 0; i < 5; i++){
    console.log(`Greeting number ${i+1}: ${greeting}`)
}


// UŽD 4
console.log(`%cUzdavinys nr. 4`, `color :white; background-color:black`)
for(let i = 0; i < 7; i++){
    console.log(`Consoling number ${i+1}: ${num}`)
}

// UŽD 5
console.log(`%cUzdavinys nr. 5`, `color :white; background-color:black`)
for(let i = 0; i < num; i++){
    if(i == 0){
        console.log(`Consoling ${num} times:`)
        console.log(`Console number ${i+1}: ${num}`)
    }
    else{
        console.log(`Console number ${i+1}: ${num}`)
    }

}

// UŽD 6
console.log(`%cUzdavinys nr. 6`, `color :white; background-color:black`)
if(num > 7){
    for(let i = 0; i < num; i++){
        if(i == 0){
            console.log(`Consoling ${num} times:`)
            console.log(`Console number ${i+1}: ${num}`)
        }
        else{
            console.log(`Console number ${i+1}: ${num}`)
        }
    }
}
else{
    console.log(`Number is less than 7; num = ${num}`)
}

// UŽD 7
console.log(`%cUzdavinys nr. 7`, `color :white; background-color:black`)


//A dalis
console.log(`%cA dalis`, `color :white; background-color:purple`)
let number;
console.log(`Number is declared outside of the loop scope; number = ${number}`)
console.log(`Adding a value with loop. Looping 5 times:`)
for(let i = 0; i < 5; i++){
    number = rand(10, 20)
    console.log(`Loop number ${i+1}: number: ${number}`)
}



// B dalis
console.log(`%cB dalis`, `color :white; background-color:purple`)
let sumAll = 0;
console.log(`Number is declared outside of the loop scope; sumAll = ${sumAll}`)
for(let i = 0; i < 5; i++){
    sumAll += rand(10, 20)
}
console.log(`Sum of all looped values: sumAll = ${sumAll}`)




// C dalis
console.log(`%cC dalis`, `color :white; background-color:purple`)
let sumStr = 0;
console.log(`Number is declared outside of the loop scope; sumStr = ${sumStr}`)
for(let i = 0; i < 5; i++){
   sumStr += ` ${rand(10, 20)}`
}
console.log(`Variable sumStr = ${sumStr.substring(1)}, type of: ${typeof sumStr}`)





// D dalis
console.log(`%cD dalis`, `color :white; background-color:purple`)
let sumStrD = 0;
let sumD = 0;
for(let i = 0; i < 5; i++){
    sumD += rand(10, 20)
   sumStrD += ` ${rand(10, 20)}`
}
console.log(`Sum of all the numbers = ${sumD}`)
console.log(`String of the numbers:${sumStrD.substring(1)}`);
console.log(`String of all numbers with sum at the end:${(sumStrD + ` ${sumD}`).substring(1)}`);


// UŽD 8
console.log(`%cUzdavinys nr. 8`, `color :white; background-color:black`)
console.log(`%cA dalis`, `color :white; background-color:purple`)
let numb;
let numberOfLoops = 0;
let loopNum = rand(10, 25);
let sumLessThan18 = 0;
let numbersSkipped = 0;
let skippedSum = 0;
let even = 0;
let odd = 0;

while(loopNum >= 12){
    numberOfLoops++
    if(loopNum%2 == 0){
        even++
    }
    else{
        odd++
    }
    if(loopNum < 18){
        sumLessThan18 += loopNum;
    }
    else{
        skippedSum += loopNum
        numbersSkipped++
    }
    loopNum = rand(10, 25)
    if(loopNum < 12){
        console.log(`First generated number less than 12: ${loopNum}`)
    }
}
console.log(`%cB dalis`, `color :white; background-color:purple`)
console.log(`Number of loops: ${numberOfLoops}`)

console.log(`%cC dalis`, `color :white; background-color:purple`)
console.log(`Sum of numbers less than 18 = ${sumLessThan18}`)

console.log(`%cD dalis`, `color :white; background-color:purple`)
console.log(`Number of values more than 18: ${numbersSkipped} `)
console.log(`Sum of skipped numbers: ${skippedSum}`)

console.log(`%cE dalis`, `color :white; background-color:purple`);
console.log(`Number of even values: ${even}`)
console.log(`Number of odd values: ${odd}`);

console.log(`%cF dalis NEAIŠKI`, `color :white; background-color:purple`);

// UŽD 9
console.log(`%cUzdavinys nr. 9`, `color :white; background-color:black`)
let loopNumber = rand(5, 10)
let outerLoopCount = 0;
let innerLoopCount = 0;

while(loopNumber != 5){
    outerLoopCount++
    for(let i = 0; i < loopNumber; i++){
        innerLoopCount++
    }
    loopNumber = rand(5, 10)
}

console.log(`%cA dalis`, `color :white; background-color:purple`);
console.log(`Outter loop count: ${outerLoopCount}`)
console.log(`Inner loop count: ${innerLoopCount}`)


console.log(`%cB dalis`, `color :white; background-color:purple`);

loopNumber = rand(5, 10)
outerLoopCount = 0;
innerLoopCount = 0;
let countFives = 0;

while(countFives != 3){
    if(loopNumber == 5){
        countFives++
    }
    outerLoopCount++
    for(let i = 0; i < loopNumber; i++){
        innerLoopCount++
    }
    loopNumber = rand(5, 10)
}

console.log(`Outter loop count when 5 is generated three times: ${outerLoopCount}`)
console.log(`Inner loop count: ${innerLoopCount}`);

console.log(`%cC dalis`, `color :white; background-color:purple`);

loopNumber = rand(5, 10)
outerLoopCount = 0;
innerLoopCount = 0;
countFives = 0;

while(countFives != 3){
    if(loopNumber != 5){
        countFives = 0
    }
    else if (loopNumber == 5){
        countFives++
    }
    outerLoopCount++
    for(let i = 0; i < loopNumber; i++){
        innerLoopCount++
    }
    loopNumber = rand(5, 10)
}
console.log(`Outter loop count when 5 is generated three times IN A ROW: ${outerLoopCount}`)
console.log(`Inner loop count: ${innerLoopCount}`);


// UŽD 10
console.log(`%cUzdavinys nr. 10`, `color :white; background-color:black`)
let petras = 0;
let kazys = 0;
let win = `Partiją laimėjo:`

while(petras < 221 && kazys < 221){
    petras += rand(10, 20)
    kazys += rand(5, 25)
    if(petras > 221 && petras > kazys){
        console.log(`${win} Petras! Surinko ${petras} taškus`)
    }
    else if(kazys > 221 && kazys > petras){
        console.log(`${win} Kazys! Surinko ${kazys} taškus`)
    }
}
