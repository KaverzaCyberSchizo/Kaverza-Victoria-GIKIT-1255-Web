

const domOutput = document.getElementById('output');
const domInput = document.getElementById('input');
const domButton = document.getElementById('enter');

let numberOfTodos = 0;

// listener methods

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

const onTodoDeleteClick = function(event) { 
  console.log('todoDelete -> onTodoDeleteClick', event);
  event.currentTarget.parentNode.remove(); 
}
// render methods

const renderAlert = function () {
  renderInputHighLightColor("red");
  alert('Wrong input');
}
const renderInputTextInOutout = function () {
  console.log('domButton -> onclick: 1) - add todo');
  const domTodoContainer = document.createElement('div'); 
  
   const domTodoButtonDelete = createActionButtonWithText ('delete')
   domTodoButtonDelete.onclick = onTodoDeleteClick;
 
  domTodoContainer.innerText = `${numberOfTodos}. ${domInput.value}`; 
 
  domTodoContainer.appendChild(domTodoButtonDelete); 
  domOutput.appendChild(domTodoContainer);
  console.log('domButton -> onclick: 2) - clear input');
  domInput.value = '';
}
const renderInputHighLightColor = (color) => domInput.style.backgroundColor = color;

// Render ends

const createActionButtonWithText = (text) => {
  const btn = document.createElement('button'); 
  btn.innerText = text; 
  btn.style.backgroundColor = 'red'; 
  btn.style.marginLeft = '12px'; 
  btn.style.border = 'solid 2px'; 
  btn.style.borderColor = 'green'; 
  return btn;
}

domButton.onclick = onCreateTodoButtonClick;
domInput.oninput = onInputTextInput;

domInput.value = "Test"; 
numberOfTodos = 1; 
renderInputTextInOutput();
