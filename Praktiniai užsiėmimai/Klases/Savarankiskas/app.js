console.log(`---------------------CLASS------------------`);
class Rectangle {
  //Set-up object
  constructor(width, height, color) {
    console.log(`The rectangle is being created`);
    this.width = width;
    this.height = height;
    this.color = color;
  }
  //Methods
  getArea() {
    return `Area: ${this.width * this.height}`;
  }
  printDescrption() {
    console.log(
      `I am rectangle of ${this.width} x ${this.height} and I am ${this.color} `
    );
  }
}

const myRectangle01 = new Rectangle(5, 6, `red`);
console.log(myRectangle01);
const myRectangle02 = new Rectangle(3, 3, `yellow`);
console.log(myRectangle02);
console.log(myRectangle01.getArea());
console.log(myRectangle02.getArea());
myRectangle02.printDescrption();

console.log(`---------------------Getters and Setters-------------`);

class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
    this.numOfRquestsForAre = 0;
  }
  //Getter for area
  get area() {
    this.numOfRquestsForAre++;
    return this.width * this.height;
  }
  //Setter for are
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

const square01 = new Square(4);
console.log(square01.area);
console.log(square01.area);
square01.area = 25;
console.log(square01.width);
console.log(square01);

console.log(`---------------------Static methods-------------`);

class Square2 {
    constructor(width){
        this.width = width
        this.height = width
    }

    static equals (a, b){
        return a.width * a.height === b.width * b.height
    }
    static isValidDimensions (width, height){
        return width == height
    }
}

const square02 = new Square2(8)
const square03 = new Square2(8)
console.log(square02)
console.log(square03)
console.log(Square2.equals(square02, square03))
console.log(Square2.isValidDimensions(6, 7))

console.log(`---------------------Extends------------------`);

//Parent class. Basic person
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    describe(){
        console.log(`I am ${this.name}, and I am ${this.age} years old`)
    }
}

//Child class. Programmer person
class Programmer extends Person {
    constructor(name, age, experience){
        //Calls parent's properties
        super(name, age);
        //Custom Programmer properties
        this.experience = experience
    }
    code (){
        console.log(`${this.name} is coding`)
    }
}

const person1 = new Person(`Edvinas`, 26)
const programmer1 = new Programmer(`Edvinas`, 26, 0.5)
console.log(person1)
console.log(programmer1)
programmer1.code();
programmer1.describe()

const programmers = [
    new Programmer(`Petras`, 50, 12),
    new Programmer(`Jeff`, 20, 1)
]

const developSoftware =  (programmers) =>{
    for(let programmer of programmers){
        programmer.code()
    }
}
developSoftware(programmers)


console.log(`---------------------Poliymorphism------------------`);
//Override methods
class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`Generic animal sound`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    makeSound(){
        super.makeSound()
        console.log(`Woff woff`)
    }
}

const animal1 = new Animal(`Dog`)
animal1.makeSound()
const animal2 = new Dog(`Bobby`)
animal2.makeSound()

console.log(`---------------------Practice------------------`);

const myList = document.getElementById(`my-list`);

class ListBinding {
    static createListItem (text){
        const li = document.createElement(`li`)
        li.textContent = text
        return li
    }
    constructor(element){
        this.listElement = element;
        this.textList = [];
    }
    update (){
        //Remove all li
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
        //Fill with new lis
        for(const text of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
    }
    add(text){
        this.textList.push(text)
        this.update()
    }
    remove(index){
        this.textList.splice(index, 1)
        this.update()
    }
}

const listBinding = new ListBinding (myList)

