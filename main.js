//document
//.getElementById('output')
//.innerText = 'Welcome';

const domOutput = document.getElementById('output');
const domInput = document.getElementById('input');
const domButton = document.getElementById('enter');

// domOInput.value = '123';
// domOutput.innerText = 'Welcome';

domInput.oninput = function(event) {
  console.log('oninput', event);
  // domOutput.innerText = 'Hello, ' + event.target.value;
}

domButton.onclick = function(event) {
  console.log('onclick', event);
  domOutput.innerHTML = domOutput.innerHTML + `<div>${domInput.value}</div>`;
}