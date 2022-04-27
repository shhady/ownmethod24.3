// function Person(first, last, status) {
//   this.first = first;
//   this.last = last;
//   this.status = status;
// }

// const bob = new Person("Bob", "Smith", "employed");

// console.log(bob);

const arr = [5, 10, 15, 20, 30, 40, 50, 60, 100, 150];

Array.prototype.filter = function (callback, thisArg) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      newArr.push(i);
    }
  }
  return newArr;
};
const arr2 = arr.filter(
  function (e, i, arr) {
    return e === this.a;
  },
  { a: 60 }
);

console.log(arr2);

Array.prototype.find = function (callback) {
  const findArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, arr)) {
      findArr.push(i);
    }
  }
  return findArr;
};
const find = arr.find((e) => e === 20);
console.log(find);

Array.prototype.reduce = function (callback, initial) {
  let value;
  let index;
  if (initial) {
    value = initial;
    index = 0;
  } else {
    value = this[0];
    index = 1;
  }
  for (let i = 0; index < this.length; index++) {
    value = callback(value, this[index], index, this);
  }
  return value;
};

const reduced = arr.reduce((previous, current) => previous + current, 20);
console.log(reduced);
