console.log(`Nice form`);

const form = document.querySelector(`form`);
const button = form.querySelector(`button`);
const inputs = form.querySelectorAll(
  `input[type='text'], input[type = 'color'], input[type='range']`
);
const checkbox = form.querySelectorAll(`input[type='checkbox']`);
const radioButtons = form.querySelectorAll(`input[type='radio']`);
const data = {};

// const set = new Set(); //unique value array
// const arrTrue = new Array();
// const arr = []; //short hand for new Array()

// set.add(`a`);
// set.add(`a`);
// set.add(`b`);
// set.add(`c`);
// set.add(`a`);
// // set.add({ a: 1 });
// // set.add({ a: 1 });
// // set.delete(`b`);
// // set.delete(`a`); //Doesnt delete multiple values
// console.log(set.has({ a: 1 }));
// console.log(set.size);
// console.log(set.has(`a`));

// console.log(set);

// const arrSet = [...set];
// arrSet.sort((a, b) => b.localeCompare(a));
// set.clear();
// arrSet.forEach((item) => {
//   set.add(item);
// });

// const set2 = new Set([1, 2, 3, 4, 5]);
// console.log(set2);
// console.log(set);
// console.log(arrSet);

// set.forEach((item) => {
//   console.log(item);
// });
const selects = form.querySelectorAll(`select`);
const textArea = form.querySelectorAll(`textarea`);

button.addEventListener(`click`, () => {
  inputs.forEach((input) => {
    data[input.name] = input.value;
  });
  selects.forEach((select) => {
    data[select.name] = select.value;
  });
  textArea.forEach((text) => {
    data[text.name] = text.value;
  });
  checkbox.forEach((checkbox) => {
    data[checkbox.name] = checkbox.checked ? checkbox.value : ``;
  });
  const radioNames = new Set();

  radioButtons.forEach((button) => {
    radioNames.add(button.name);
    button.checked ? (data[button.name] = button.value) : ``;
  });
  data[button.name] ? data[button.name] : (data[button.name] = ``);
  radioNames.forEach((name) => {
    if (!data[name]) {
      data[name];
    }
  });

  console.log(radioNames);

  console.log(button.name);
  console.log(data);
});
