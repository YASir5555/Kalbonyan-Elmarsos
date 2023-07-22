const numbers = [1, 2, 3, 4, 5, 6];

const numbersGreater = numbers.filter((numbersGreater) => numbersGreater > 5);
console.log(numbersGreater);

//

const numbersMap = numbers.map((val) => ({ num: val }));
console.log(numbersMap);

//

const numbersReduce = numbers.reduce(
  (pervValue, curValue) => pervValue * curValue,
  1
);
console.log(numbersReduce);

// /////////////////////
function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));
// ////////////////////

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

// ////////////////////

const list = new Set();

list.add(5);
list.add(5);
list.add(6);
list.add(6);
console.log(list);
