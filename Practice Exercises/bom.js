const input = document.queryselector('#favchap');
const button = document.queryselector('button');
const list = document.queryselector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.innerHTML = input.value;
deleteButton.textContent = '❌';

