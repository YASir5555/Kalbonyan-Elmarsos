// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

let greetUser = (name) => console.log('Hi ' + name);

// ////

let greetUser2 = (greet, name) => {
  console.log(greet + '' + name);
};

let greetUser3 = () => {
  console.log('Hi Hard-coded ');
};

let greetUser4 = (name) => 'Hi ' + name;

// /////

let greetUser5 = (name, greet = 'Hi ') => {
  console.log(greet + '' + name);
};

// /////

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

greetUser('Yaser');
greetUser2('Yaser ', 'Hello');
greetUser3();
console.log(greetUser4('Yaser'));
greetUser5('Mohamed');
greetUser5('Mohamed', 'Hello ');

checkInput(
  () => {
    console.log('All not empty');
  },
  'Hello',
  '12',
  'kdjfdl',
  'dff'
);
