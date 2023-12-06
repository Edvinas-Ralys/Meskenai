const button01 = document.querySelector(`button`);
button01.addEventListener(`click`, () => {
  console.log(`You clicked the button`);
});
button01.addEventListener(`click`, () => {
  console.log(`No you havent`);
});
button01.addEventListener(`mouseover`, () => {
  console.log(`Do not touch me`);
});
button01.addEventListener(`mouseout`, () => {
  console.log(`thank you`);
});
const buttons = document
  .querySelectorAll(`.container button`)
  .forEach((button) => {
    button.addEventListener(`click`, () => {
      const text = button.innerText;
      console.log(`You clicked ${text}`);
    });
  });
const writtenText = document.querySelector(`h1`);
const displayText = document.querySelector(`.clickable`);
displayText.addEventListener(`click`, () => {
  console.log(`Text written: ${writtenText.innerText}`);
  writtenText.innerText = ``;
});
const input = document.querySelector(`input`);
const submit = document.querySelector(`button.submit`);
submit.addEventListener(`click`, () => {
  console.log(input.value);
  input.value = ``;
});
const parent = document.querySelector(`.parent`);
parent.addEventListener(`click`, () => {
  console.log(`Parent clicked`);
});
const child = document.querySelector(`.child`);
child.addEventListener(`click`, (e) => {
  e.stopPropagation();
  console.log(`child clicked`);
});
