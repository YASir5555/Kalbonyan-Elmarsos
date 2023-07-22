const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert('Suiiiiiiiii');
}

// for (let i = x; i > 0.7; i++) {
// }

const numbers = [1, 2, 3, 7];

// 1
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2
for (const n of numbers) {
  console.log(n);
}

// 3
let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}

// // // for loop => backwards
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

const radomNumber = Math.random();

if (
  (radomNumber > 0.7 && randomNumber > 0.7) ||
  radomNumber <= 0.2 ||
  randomNumber <= 0.2
) {
  alert('Greater than 0.7 or smaller than 0.2 ');
}
