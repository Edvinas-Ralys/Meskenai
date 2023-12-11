console.log(`Welcome to ELEMENTS being added to the DOM`);
const place1 = document.querySelector(`#place1`);
place1.innerHTML = `<i>Some text</i>`;

place1.innerHTML = `Bebrai yra <b>jega</b>`;

const place2 = document.querySelector(`#place2`);
const place3 = document.querySelector(`#place3`);

const newElement = document.createElement(`i`);
const textNode = document.createTextNode(`Some text`);

newElement.appendChild(textNode);

place2.appendChild(newElement);

let textNode2 = document.createTextNode(`jega`);
place3.appendChild(newElement);
