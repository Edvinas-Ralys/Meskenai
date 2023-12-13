function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Pirmas
const allH2 = document.querySelectorAll(`h2`);

const h2Button = document.querySelector(`button`);
h2Button.addEventListener(`click`, () => {
  allH2.forEach((item) => (item.innerText = rand(1, 6)));
  if (allH2[0].innerText == allH2[1].innerText) {
    allH2.forEach((item) => (item.style.color = `red`));
  }
});

//Antras
let numberArr = [];
const h3 = document.querySelector(`h3`);
const secondButton = document.querySelector(`.second-button`);
secondButton.addEventListener(`click`, () => {
  numberArr.push(rand(1, 10));
  console.log(numberArr);
  let arraySum = 0;
  numberArr.forEach((item) => (arraySum += item));
  h3.innerText = arraySum;
});

//Trecias
const africa = [
  "Zebras",
  "Liūtas",
  "",
  "Raganosis",
  "",
  "Raganosis",
  "Begemotas",
];
const africaUl = document.querySelector(`ul`);
let africaLi;

africa.forEach((item) => {
  if (item != ``) {
    africaLi = document.createElement(`li`);
    africaLi.innerText = item;
    africaUl.appendChild(africaLi);
  }
});
//Ketvirtas
const firstInput = document.querySelector(`#first-numb`);
const secondInput = document.querySelector(`#second-numb`);
const output = document.querySelector(`h5`);
const plusButton = document.querySelector(`.plus`);
const minusButton = document.querySelector(`.minus`);

plusButton.addEventListener(`click`, () => {
  let sum = Number(firstInput.value) + Number(secondInput.value);
  output.innerText = sum;
});
minusButton.addEventListener(`click`, () => {
  let minus = Number(firstInput.value) - Number(secondInput.value);
  output.innerText = minus;
});

//Penktas
const australiList = document.querySelector(`.australia`);

const australia = ["Kengūra", "Ančiasnapis", "Dingo", "Atsirado", "Strutis"];
const arrWithLi = [];
australia.forEach((item) => {
  arrWithLi.push(`<li>${item}</li>`);
});

arrWithLi.forEach((item) => {
  if (item != `<li>Dingo</li>`) {
    let australiaListItem = document.createElement(`div`);
    australiaListItem.innerHTML = item;
    australiList.appendChild(australiaListItem);
  } else {
    let australiaListItem = document.createElement(`div`);
    australiaListItem.innerHTML = item;
    australiaListItem.style.backgroundColor = `blue`;
    australiList.appendChild(australiaListItem);
  }
});
