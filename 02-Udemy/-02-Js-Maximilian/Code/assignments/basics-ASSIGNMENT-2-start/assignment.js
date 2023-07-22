const task3Element = document.getElementById('task-3');

function greet() {
  alert('Hello there');
}

function greetUser(name) {
  alert('Hi ' + name);
}

function combine(x, y, z) {
  const combinedText = x + y + z;
  return combinedText;
}

greetUser('Yaser');

task3Element.addEventListener('click', greet);

const combinedString = combine('Hi ', 'there ', '!');
alert(combinedString);
