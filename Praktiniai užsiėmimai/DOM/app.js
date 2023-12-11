//Pirmas A
const h1 = document.querySelector(`h1`);
h1.style.color = `darkgreen`;

//Pirmas B
const italic = document.querySelector(`i`);
italic.classList.add(`small`);

//Pirmas C
h1.classList.remove(`main`);

//Pirmas D
h2s = document.querySelectorAll(`h2`);
console.log(h2s[0])
h2s[0].classList.remove(`main`);
h2s[0].classList.add(`first`);

//Pirmas E
const span = document.querySelector(`h2 > span`);
span.style.fontSize = `10px`;
span.style.color = `gray`;

//Antras A
let h2Count = 0;
h2s.forEach((item) => item && h2Count++);
console.log(`Total h2 elements: ` + h2Count);

//Antras B
let h2sNoFirst = 0;
h2s.forEach((item) => {
  item.className != `first` && h2sNoFirst++;
});
console.log(`Total h2 elements without class 'first': ` + h2sNoFirst);

//Antras C
h2s.forEach((item) => (item.style.color = `skyblue`));

//Antras D
const prices = document.querySelector(`.prices`);
const h2inPrices = prices.querySelectorAll(`h2`);
h2inPrices.forEach((item) => item.classList.add(`price-tag`));

//Antras E
const allNewTags = document.querySelectorAll(`.new`);
allNewTags.forEach((item) => (item.style.textDecoration = `underline`));

//Antras F
let animalCategoryCount = 0;
const listItems = document.querySelectorAll(`ul`);
listItems.forEach((item) => item && animalCategoryCount++);
console.log(`Catagories of animals: ` + animalCategoryCount);

//Antras G
listItems.forEach((item) => {
  item.style.border = `1px solid black`;
  item.style.paddingTop = `15px`;
  item.style.paddingBottom = `15px`;
  item.style.paddingLeft = `50px`;
  item.style.paddingRight = `50px`;
});

//Antras H
let newAnimalsCount = 0;
const newAnimals = document.querySelectorAll(`.new`);
newAnimals.forEach((item) => {
  item && newAnimalsCount++;
});
console.log(`New animal count: ` + newAnimalsCount);

//Antras I ???
const allListsTitle = document.querySelectorAll(`ul, li`);
let allListsTitleArr = Array.prototype.slice.call(allListsTitle);
console.log(allListsTitleArr);
allListsTitleArr.forEach((item) => console.log(item.value));

//Trecias A
const bttnH1Green = document.querySelector(`#h1-color`);
bttnH1Green.addEventListener(`click`, () => {
  h1.style.color = `lightgreen`;
});
const bttnH1Font = document.querySelector(`#h1-font`);
bttnH1Font.addEventListener(`click`, () => {
  h1.style.fontSize = `10px`;
});
italic.addEventListener(`click`, () => {
  italic.style.fontWeight = `bold`;
});
prices.addEventListener(`click`, () => {
  prices.style.backgroundColor == `white`
    ? (prices.style.backgroundColor = `gray`)
    : (prices.style.backgroundColor = `white`);
});
const contacts = document.querySelector(`#contacts`);
contacts.addEventListener(`click`, () => {
  contacts.style.color = `orange`;
});
const larger = contacts.querySelector(`u`);
larger.addEventListener(`click`, () => {
  contacts.style.fontSize = `20px`;
});
const removeStyle = contacts.querySelector(`b`);
removeStyle.addEventListener(`click`, (e) => {
  e.stopPropagation();
  contacts.style = null;
  contacts.style.removeProperty(`color`);
});
const bttnReturnColor = document.querySelector(`#h1-color-back`);
bttnReturnColor.addEventListener(`click`, () => {
  h1.style.color = `darkgreen`;
});
const bttnReturnFont = document.querySelector(`#h1-font-back`);
bttnReturnFont.addEventListener(`click`, () => {
  h1.style.removeProperty(`font-size`);
});

//Ketvirtas A
const listItemsLi = document.querySelectorAll(`li`);
listItemsLi.forEach((item) => {
  item.addEventListener(`dblclick`, () => {
    item.style.color = `red`;
    item.innerText != `PATINKA` ? (item.style.fontSize = `1.3rem`) : null;
  });
});

//Ketvirtas C
const likeButton = document.querySelectorAll(`.like-button`);
likeButton.forEach((item) => {
  item.addEventListener(`click`, () => {
    item.parentNode.classList.add(`like`);
  });
});

//Penktas A
const seniorPrice = document.createElement(`h2`);
seniorPrice.innerText = `Senjorai tik: 1.99 eur`;
prices.appendChild(seniorPrice);

//Penktas B
const seniorPriceGroup = document.createElement(`h2`);
seniorPriceGroup.classList.add(`new`);
seniorPriceGroup.innerText = `Senjoru grupe iki 10: tik 5.99 eur`;
seniorPriceGroup.addEventListener(
  `click`,
  () => (seniorPriceGroup.style.color = `green`)
);
prices.appendChild(seniorPriceGroup);

//Penktas C
const dislike = document.createElement(`li`);
dislike.classList.add(`dislike-button`);
dislike.innerText = `NEPATIKA`;
listItems.forEach((item) => {
  innerItems = item.querySelectorAll(`li`);
  item.insertBefore(dislike.cloneNode(true), innerItems[1]);
});
const allDislikes = document.querySelectorAll(`.dislike-button`);
allDislikes.forEach((item) => {
  item.addEventListener(`click`, () => {
    item.parentNode.classList.remove(`like`);
  });
});

//Penktas D

//Creating new fieldset
const newFieldset = document.createElement(`fieldset`);
const header3 = document.createElement(`legend`);
header3.innerText = `HEADER 3`;

//First button
const bttnUnderline = document.createElement(`button`);
bttnUnderline.innerText = `Pabraukti H1 taga`;
bttnUnderline.setAttribute(`id`, `h1-underline`);
newFieldset.appendChild(bttnUnderline);

//Second button
const bttnNoUnderline = document.createElement(`button`);
bttnNoUnderline.innerText = `Nepabraukti H1 tago`;
bttnNoUnderline.setAttribute(`id`, `h1-nounderline`);
bttnNoUnderline.style.marginLeft = `4px`;
newFieldset.appendChild(bttnNoUnderline);

const fieldsetElements = document.querySelectorAll(`fieldset`);

const fieldsets = document.createElement(`div`);

fieldsets.classList.add(`fieldsets-all`);
prices.after(fieldsets);
fieldsetElements.forEach((item) => {
  fieldsets.appendChild(item);
});
console.log(fieldsetElements);

fieldsets.appendChild(newFieldset);
newFieldset.appendChild(header3);

bttnUnderline.addEventListener(`click`, () => {
  h1.style.textDecoration = `underline`;
});
bttnNoUnderline.addEventListener(`click`, () => {
  h1.style.textDecoration = `none`;
});
