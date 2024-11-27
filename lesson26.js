function Accumulator(startingValue) {
  this.value = startingValue;

  this.increment = function () {
    this.value++;
  };

  this.decrement = function () {
    this.value--;
  };
}

function CancelableAccumulator(startingValue) {
  Accumulator.call(this, startingValue);
  this.startingValue = startingValue;

  this.clear = function () {
    this.value = this.startingValue;
  };
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

// Перевірка:
const acc = new Accumulator(10);
acc.increment();
console.log(acc.value); // 11
acc.decrement();
console.log(acc.value); // 10

const cancelAcc = new CancelableAccumulator(20);
cancelAcc.increment();
console.log(cancelAcc.value); // 21
cancelAcc.clear();
console.log(cancelAcc.value); // 20
