const circleZone = document.getElementById(`circles`);
const buttonZone = document.getElementById(`buttons`);

class Circle {
  //Statiniai

  //Savybes
  static circlesArray = [];
  static effectsInterval;
  static placement;
  static buttonPlacement;

  //Metodai. Keicia spalvas
  //Prie metodu `this == klases pavadinimas`, t.y. this == Circle
  static effectChangeColors() {
    this.effectsInterval = setInterval(() => {
      this.circlesArray.forEach((item) => item.changeColor());
    }, 200);
  }
  //Metodai. Generuoja apskirtimus
  static init(placement, buttonPlacement, count = 5) {
    this.placement = placement
    this.buttonPlacement = buttonPlacement
    for (let i = 0; i < count; i++) {
      new this(placement);
    }

    //bind nurodo, kad yra kriepiamasi i sitos klases statini metoda
    this.createButton(buttonPlacement, `Start`, this.effectChangeColors.bind(this));

    //Reikia ()=> nes yra perduodama anonimine funkcija i button creation
    this.createButton(buttonPlacement, `End`, ()=> clearInterval(this.effectsInterval));

    this.createButton(buttonPlacement, `To left`, this.toLeft.bind(this))

    this.createButton(buttonPlacement, `To right`, this.toRight.bind(this))
  }


  static toLeft(){
    clearInterval(this.effectsInterval)
    this.effectsInterval = setInterval(()=>{
        this.circlesArray.unshift(this.circlesArray.pop())
        this.placement.innerHTML = ``
        this.circlesArray.forEach(circle => this.placement.appendChild(circle.circleElement))
    }, 200)
  }

  static toRight(){
    clearInterval(this.effectsInterval)
    this.effectsInterval = setInterval(()=>{
        this.circlesArray.push(this.circlesArray.shift())
        this.placement.innerHTML = ``
        this.circlesArray.forEach(circle => this.placement.appendChild(circle.circleElement))

    }, 200)
  }


  static createButton(buttonPlacement, text, action) {
    const button = document.createElement(`button`);
    button.textContent = text;
    button.addEventListener(`click`, action);
    buttonPlacement.appendChild(button);
  }

  constructor(placement) {
    this.circleElement = document.createElement(`div`);
    this.circleElement.style.height = `50px`;
    this.circleElement.style.width = `50px`;
    this.circleElement.style.borderRadius = `50%`;
    this.circleElement.style.margin = `2px`;
    this.circleElement.style.display = `inline-block`;
    this.circleElement.style.backgroundColor = this.randomColor();
    placement.appendChild(this.circleElement);
    //this.constructor == Circle
    this.constructor.circlesArray.push(this);
  }

  randomColor() {
    const radnomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, `0`);
    return `#${radnomColor}`;
  }

  changeColor() {
    this.circleElement.style.backgroundColor = this.randomColor();
  }
}

Circle.init(circleZone, buttonZone, 20);
// Circle.effectChangeColors()
