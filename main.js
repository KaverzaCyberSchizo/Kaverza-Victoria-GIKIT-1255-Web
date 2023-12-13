

const domOutput = document.getElementById('output');
const domInput = document.getElementById('input');
const domButton = document.getElementById('enter');

let numberOfTodos = 0;

const onCreateTodoButtonClick = function (event) {
  console.log('domButton -> onclick: 0) - check input is not empty');
  if (checkInputWithText()) {
    numberOfTodos += 1
    renderInputTextInOutout();
  } else {
    renderAlert();
  }
}

const onInputTextInput = function (event) {
  console.log('domInput -> oninput');
  renderInputHighLightColor("");
}

const checkInputWithText = () => domInput.value.length > 0;
// render methods

const renderAlert = function () {
  renderInputHighLightColor("red");
  alert('Wrong input');
}
const renderInputTextInOutout = function () {
  console.log('domButton -> onclick: 1) - add todo');
  domOutput.innerHTML += `<div>${numberOfTodos}. ${domInput.value} <button style="background-color:red;" onclick="onTodoDeleteClick">x</button>
  </div>`;
  console.log('domButton -> onclick: 2) - clear input');
  domInput.value = '';
}
const renderInputHighLightColor = (color) => domInput.style.backgroundColor = color;
// Render ends

domButton.onclick = onCreateTodoButtonClick;
domInput.oninput = onInputTextInput;