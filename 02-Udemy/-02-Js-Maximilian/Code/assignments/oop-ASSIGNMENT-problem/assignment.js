class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
  }

  calc() {
    return this.length / this.#price;
  }

  end() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price} `
    );
  }
}

const course1 = new Course('JS', 55, 200);
const course2 = new Course('React', 20, 170);

console.log(course1);
console.log(course2);

console.log(course1.calc());
course1.end();

console.log(course2.calc());
course2.end();

// //////////////////////////
class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

const course3 = new PracticalCourse('html', 22, 150, 16);
console.log(course3);
course3.end();

//////////////////////////////////

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log('You are a good');
  }
}

const course4 = new TheoreticalCourse('css', 5, 100);
course4.publish();
course4.end();
