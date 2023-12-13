//Pirmas
console.log(`Pirmas----------------Septintas`);
class Bucket {
  static allRocks = 0;

  constructor() {
    this.rocks = 0;
  }
  add1Rock() {
    this.rocks++;
    this.constructor.allRocks++;
  }
  addRocks(amount) {
    this.rocks += amount;
    this.constructor.allRocks += amount;
  }
  totalRocks() {
    console.log(`Number rocks: ${this.rocks}`);
    console.log(`All picked rocks: ${this.constructor.allRocks}`);
  }
}
const bucket1 = new Bucket();
const bucket2 = new Bucket();
bucket2.add1Rock();

bucket1.add1Rock();
bucket1.addRocks(5);
bucket1.totalRocks();

//Antras
console.log(`Antras----------------Sesta`);
class Wallet {
  constructor() {
    this.bills = 0;
    this.coins = 0;
    this.billCount = 0;
    this.coinCount = 0;
  }
  addMoney(amount) {
    if (amount > 0) {
      if (amount <= 2) {
        this.coins += amount;
        this.coinCount++;
      } else {
        this.bills += amount;
        this.billCount++;
      }
    } else {
      console.log(`Can't add ${amount} moneyz`);
    }
  }
  checkWallet() {
    console.log(`Money in bills: ${this.bills}`);
    console.log(`Money in coins: ${this.coins}`);
    console.log(`Number ofcoins: ${this.coinCount}`);
    console.log(`Number of bills: ${this.billCount}`);
  }
}
const wallet1 = new Wallet();
wallet1.addMoney(15);
wallet1.addMoney(1);
wallet1.addMoney(2);
wallet1.addMoney(-5);
wallet1.addMoney(1);
wallet1.checkWallet();

//Trecias
console.log(`Trecias---------------Ketvirtas`);
class Bus {
  static totalPassengers = 0;

  constructor() {
    this.numberOfPassengers = 0;
  }
  passengersIn(amount) {
    this.numberOfPassengers += amount;
    this.constructor.totalPassengers += amount;
  }
  passengersOut(amount) {
    if (this.numberOfPassengers < amount) {
      console.log(
        `Currnelty on bus ${this.numberOfPassengers}; Only ${this.numberOfPassengers} can exit`
      );
      this.numberOfPassengers = 0;
      this.constructor.totalPassengers = 0;
    } else {
      this.numberOfPassengers -= amount;
      this.constructor.totalPassengers -= amount;
    }
  }
  onBus() {
    console.log(`Currently on bus: ${this.numberOfPassengers}`);
  }
  onAllBuses() {
    console.log(`Currently on ALL buses: ${this.constructor.totalPassengers}`);
  }
}

const bus1 = new Bus();
bus1.passengersIn(3);
bus1.passengersOut(15);
bus1.passengersIn(15);

const bus2 = new Bus();
bus2.passengersIn(8);
bus2.passengersOut(6);

bus2.onBus();
bus1.onBus();
bus1.onAllBuses();

//Penktas
console.log(`Penktas----------------------`);
class ShoppingCart {
  constructor() {
    this.contents = new Map();
  }
  addCheese(amount) {
    if (this.contents.get(`Cheese`) == undefined) {
      this.contents.set(`Cheese`, amount);
    } else {
      this.contents.set(`Cheese`, this.contents.get(`Cheese`) + amount);
    }
  }
  addMilk(amount) {
    if (this.contents.get(`Milk`) == undefined) {
      this.contents.set(`Milk`, amount);
    } else {
      this.contents.set(`Milk`, this.contents.get(`Milk`) + amount);
    }
  }
  addBread(amount) {
    if (this.contents.get(`Bread`) == undefined) {
      this.contents.set(`Bread`, amount);
    } else {
      this.contents.set(`Bread`, this.contents.get(`Bread`) + amount);
    }
  }
  removeItem(item, amount) {
    if (this.contents.get(item) == undefined) {
      console.log(`There is no ${item}`);
    } else if (this.contents.get(item) <= amount) {
      this.contents.set(item, 0);
    } else {
      this.contents.set(item, this.contents.get(item) - amount);
    }
  }

  showContents() {
    console.log(this.contents);
  }
}

const shopping1 = new ShoppingCart();
shopping1.addCheese(5);
shopping1.addCheese(3);
shopping1.addCheese(2);
shopping1.addMilk(9);
shopping1.addBread(15);

shopping1.showContents();
shopping1.removeItem(`Bread`, 5);
shopping1.removeItem(`Bread`, 15);
shopping1.showContents();

//Astuntas
console.log(`Astuntas------------------------`);
class Glass {
  constructor(volume) {
    this.volume = volume;
    this.amount = 0;
  }
  addWater(amount) {
    amount > this.volume || amount + this.amount > this.volume
      ? (this.amount = this.volume)
      : (this.amount += amount);
  }

  removeWater() {
    const water = this.amount;
    this.amount = 0;
    return water;
  }

  checkWater() {
    console.log(`Glass is ${this.volume}ml with ${this.amount}ml of water`);
  }
}
const glass1 = new Glass(200);
glass1.addWater(400);
console.log(`First glass poured`);
glass1.checkWater();
console.log(`Second glass poured`);
const glass2 = new Glass(150);
glass2.addWater(glass1.removeWater());
glass1.checkWater();
glass2.checkWater();
console.log(`Third glass poured`);
const glass3 = new Glass(150);
glass3.addWater(glass2.removeWater());
glass1.checkWater();
glass2.checkWater();
glass3.checkWater();

//Devintas
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`Devintas------------------------`);
class Mushroom {
  constructor() {
    this.edible = rand(0, 1);
    this.rotten = rand(0, 1);
    this.weight = rand(5, 45)
  }
}

class Basket{
  constructor(){
    this.size = 500;
    this.mushroomCount = 0;
  }
}

const basket1 = new Basket()
console.log(basket1)
let totlaShroomsPicked = 0

while(basket1.size > 0){
  const mushroom = new Mushroom()
  totlaShroomsPicked++
  if(mushroom.edible == true && mushroom.rotten == false){
    basket1.size -= mushroom.weight;
    basket1.mushroomCount++
  }
}
console.log(basket1)
console.log(`Total mushrooms picked: ${totlaShroomsPicked}`)
