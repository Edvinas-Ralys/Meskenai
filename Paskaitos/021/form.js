console.log(`Nice form`);

const form = document.querySelector(`form`);
const button = form.querySelector(`button`);
const inputs = form.querySelectorAll(`input`);
const data = {};
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
  console.log(data);
});
