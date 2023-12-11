//Shortcuts
const arr = []; // Masyvas
const obj = {}; //Objektas

//Full
const arr2 = new Array();
const obj2 = new Object();

class Racoon {
  //Constructor
  constructor(name, color = `gray`) {
    console.log(`New racoon is born`);
    this.food = 5;
    this.name = name;
    this.color = color;
  }

  //Method
  eat() {
    console.log(`I am eating`);
    this.food--;
    console.log(`Food left: ${this.food}`);
  }
}

const racoon = new Racoon(`Bobby`);
console.log(racoon.food);

console.log(racoon);
racoon.eat();

const racoon2 = new Racoon(`Larry`);
console.log(racoon2);
racoon2.eat();
console.log(racoon2);

///Circles

class Circle {
  static circles = [];
  static effectInterval;
  static place;
  static buttonPlace;

  static effectChangeColors() {
    this.effectInterval = setInterval(() => {
      this.circles.forEach((item) => item.changeColor());
    }, 300);
  }
  static init(place, buttonPlace, count = 5) {
    for (let i = 0; i < count; i++) {
      new this(place);
    }
    this.createButton(
      buttonPlace,
      `Start changing colors`,
      this.effectChangeColors.bind(this)
    );
    this.createButton(buttonPlace, `Stop color change`, () =>
      clearInterval(this.effectInterval)
    );
    this.createButton(buttonPlace, `To left`, this.effetctMoveLeft(this));
  }
  static createButton(buttonPlace, text, action) {
    const button = document.createElement(`button`);
    button.textContent = text;
    button.addEventListener(`click`, action);
    buttonPlace.appendChild(button);
  }

  static effectMoveLeft() {
    clearInterval(this.effectInterval);
    this.effectInterval = setInterval(() => {
      this.circles.unshift(this.circles.pop());

      //clear place
      this.place.innerHTML = ``;
      this.circles.forEach((circle) => this.place.appendChild(circle.circle));
    }, 300);
  }

  static effetctMoveLeft() {
    clearInterval(this.effectInterval);
    this.effectInterval = setInterval(() => {
      this.circles.push(this.circles.shift());
    }, 300);
  }

  constructor(place) {
    this.circle = document.createElement(`div`);
    this.circle.style.width = `100px`;
    this.circle.style.height = `100px`;
    this.circle.style.borderRadius = `50%`;
    this.circle.style.backgroundColor = this.randomColor();
    this.circle.style.margin = `10px`;
    this.circle.style.display = `inline-block`;
    place.appendChild(this.circle);
    this.constructor.circles.push(this);
  }
  randomColor() {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, `0`);
    return `#` + randomColor;
  }
  changeColor() {
    this.circle.style.backgroundColor = this.randomColor();
  }
}
const place = document.querySelector(`#circles`);
const buttonPlace = document.querySelector(`#buttons`);

// Circle.init(place, buttonPlace, 12);
// console.log(Circle.circles);

class Colors4 extends Circle {
  static colors = [`red`, `green`, `blue`, `yellow`];
  randomColor() {
    const randomIndex = Math.floor(
      Math.random() * this.constructor.colors.lenght
    );
    return this.constructor.colors[randomIndex];
  }
}
Colors4.init(place, buttonPlace, 12);
