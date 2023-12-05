console.log(document.querySelector(`h1`));
const h1 = document.querySelector(`h1`);
h1.style.color = `crimson`;
h1.style.fontSize = `4em`;
h1.style.textAlign = `center`;
// let times = 4;
// const si = setInterval((_) => {
//   h1.style.backgroundColor =
//     h1.style.backgroundColor === `crimson` ? `black` : `crimson`;
//   times--;
//   if (times == 0) {
//     clearInterval(si);
//   }
// }, 200);
// console.log(si);

// setTimeout((_) => {
//   h1.style.backgroundColor = `pink`;
// }, 3000);

// h1.innerText = `Hello, World!`;
setTimeout((_) => {
  let text = h1.innerText;
  text = text.replace(`Object`, `Racoon`);
  h1.innerText = text;
}, 2000);

let html = h1.innerHTML;
console.log(html);

// const word = `Racoon   `;
// const letters = word.split(``);
// const spans = letters.map((letter) => `<span>${letter}</span>`);
// const line = spans.join(``);
// console.log(line);
// const divLine = document.querySelector(`.line`);
// divLine.innerHTML = line;
// setInterval((_) => {
//   //   spans.unshift(spans.pop());
//   //right to left
//   spans.push(spans.shift());
//   divLine.innerHTML = spans.join(``);
// }, 400);
// console.log(letters);
const h21 = document.querySelectorAll(`h2`);
console.log(h21);
h21.forEach((h2) => console.log(h2.innerText));
