function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 UŽD
console.log(`%cUzdavinys nr. 1`, `color :white; background-color:black`)
let firstDigit = rand(0, 4);
let secondDigit = rand(0, 4);

if(firstDigit >= secondDigit && firstDigit !=0 && secondDigit !=0){
    console.log(`${firstDigit} / ${secondDigit} =`, firstDigit/secondDigit)
}
else if(firstDigit <= secondDigit && firstDigit !=0 && secondDigit !=0){
    console.log(`${secondDigit} / ${firstDigit} =`,secondDigit / firstDigit)
}
else{
    console.log(`${firstDigit} / ${secondDigit} = Division by zero is not valid`)
}

// 2 UŽD
console.log(`%cUzdavinys nr. 2`, `color :white; background-color:black`)
let digitA = rand(0, 25);
let digitB = rand(0, 25);
let digitC = rand(0, 25);

let same = `Two digits are the same, no middle value;`;

console.log(`A = ${digitA}, B = ${digitB}, C = ${digitC}`)
if((digitA > digitB && digitA < digitC) || (digitA < digitB && digitA > digitC)){
    console.log(`Middle vlaue is A = ${digitA}`)
}
else if((digitB > digitA && digitB < digitC) || (digitB < digitA && digitB > digitC)){
    console.log(`Middle vlaue is B = ${digitB}`)
}
else if(digitA == digitB || digitA == digitC || digitB == digitC){
    if(digitA == digitB){
        console.log(`${same} A = ${digitA}; B = ${digitB}`)
    }
    else if(digitA == digitC){
        console.log(`${same} A = ${digitA}; C = ${digitC}` )
    }
    else{
        console.log(`${same} B = ${digitB}; C = ${digitC}`)
    }
}
else{
    console.log(`Middle value is C = ${digitC}`)
};

//3 UŽD

console.log(`%cUzdavinys nr. 3`, `color :white; background-color:black`)
let sideA = rand(1, 10);
let sideB = rand(1, 10);
let sideC = rand(1, 10);

console.log(`Side A = ${sideA}; side B = ${sideB}; side C = ${sideC}`);
if(((sideA + sideB) > sideC) && ((sideA + sideC) > sideB) && ((sideC + sideB) > sideA)){
    console.log(`It is possible to make a triangle`)
}
else{
    console.log(`It is IMPOSSIBLE to make a triangle`)
}


// 4 UŽD

console.log(`%cUzdavinys nr. 4`, `color :white; background-color:black`)
console.log(`%cUsing IF statments`, `color:purple; background-color:gray`)
let num1 = rand(0, 2);
let num2 = rand(0, 2);
let num3 = rand(0, 2);
let num4 = rand(0, 2);
console.log(`num1 = ${num1}; num2 = ${num2}; num3 = ${num3}; num4 = ${num4}`)
let zeroes = 0;
let ones = 0;
let twos = 0;

if(num1 == 0){
    zeroes++
}
else if(num1 == 1){
    ones++
}
else{
    twos++
};


if(num2 == 0){
    zeroes++
}
else if(num2 == 1){
    ones++
}
else{
    twos++
};


if(num3 == 0){
    zeroes++
}
else if(num3 == 1){
    ones++
}
else{
    twos++
};

if(num4 == 0){
    zeroes++
}
else if(num4 == 1){
    ones++
}
else{
    twos++
};



console.log(`Zeroes = ${zeroes}`);
console.log(`Ones = ${ones}`);
console.log(`Twos = ${twos}`);


//Using loops
console.log(`%cUsing LOOP`, `color:purple; background-color:gray`)
let loopZero = 0;
let loopOne = 0;
let loopTwo = 0;

for(let i = 1; i <= 4; i++){
    let num = rand(0, 2)
    console.log(`num${i} = ${num}`)
    if(num == 0){
        loopZero++
    }
    else if(num == 1){
        loopOne++
    }
    else{
        loopTwo++
    }
}
console.log(`Zeroes with loop: ${loopZero}`);
console.log(`Ones with loop: ${loopOne}`);
console.log(`Two with loop: ${loopTwo}`)

//UŽD 5
console.log(`%cUzdavinys nr. 5`, `color :white; background-color:black`)
console.log(`%cUsing IF statments`, `color:purple; background-color:gray`)
let number1 = rand(-10, 10);
let number2 = rand(-10, 10);
let number3 = rand(-10, 10);
if(number1 < 0){
    console.log(`+${number1}+`)
}
else if(number1 > 0){
    console.log(`-${number1}-`)
}
else{
    console.log(`*${number1}*`)
};

if(number2 < 0){
    console.log(`+${number2}+`)
}
else if(number2 > 0){
    console.log(`-${number2}-`)
}
else{
    console.log(`*${number2}*`)
};

if(number3 < 0){
    console.log(`+${number3}+`)
}
else if(number3 > 0){
    console.log(`-${number3}-`)
}
else{
    console.log(`*${number3}*`)
};


console.log(`%cUsing LOOP`, `color:purple; background-color:gray`);
let number;
for(let i = 0; i < 3; i++){
        number = rand(-10, 10);
    if(number < 0){
        console.log(`+${number}+`)
    }
    else if(number > 0){
        console.log(`-${number}-`)
    }
    else{
        console.log(`*${number}*`)
    };
}

// UŽD 6
console.log(`%cUzdavinys nr. 6`, `color :white; background-color:black`)
let candles = rand(5, 3000);
if(candles < 1000){
    console.log(`Purchasing ${candles} candles costs ${candles} EUR`)
}
else if(candles >= 1000 && candles < 2000){
    console.log(`Purchasing ${candles} candles costs ${(candles * 0.97).toFixed(2)} EUR`)
}
else if(candles >= 2000){
    console.log(`Purchasing ${candles} candles costs ${(candles * 0.96).toFixed(2)} EUR`)
}

//UŽD 7
console.log(`%cUzdavinys nr. 7`, `color :white; background-color:black`)
let numberOne = rand(0, 100);
let numberTwo = rand(0, 100);
let numberThree = rand(0, 100);

console.log(`numberOne = ${numberOne}; numberTwo = ${numberTwo}; numberThree = ${numberThree}`)

let averageALL = ((numberOne + numberTwo + numberThree)/3).toFixed(3);
console.log(`Average of all three values is ${averageALL}`)



console.log(`%cUsing LOOP`, `color:purple; background-color:gray`);
let num;
let arrAll = [];
let arr = [];
let sumAll = 0;
let sum = 0;

for(let i = 0; i < 3; i++){
    num = rand(0,100);
    arrAll.push(num)
    if(num > 10 && num < 90){
        arr.push(num)
    }
}
for(let i = 0; i < arrAll.length; i++){
    sumAll += arrAll[i];
}

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(`Numbers = ${arrAll}; sum of all of the numbers = ${sumAll}`)
console.log(`Average of all of the numbers is ${(sumAll/3).toFixed(3)}`)
console.log(`Average without values less than 10 and greater than 90 is ${(sum/(arr.length)).toFixed(3)}`)
