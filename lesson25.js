function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const user = {
  name: "Сергій",
  age: 28,
  sayHello() {
    console.log(`Привіт, я ${this.name}, мені ${this.age} років`);
  },
};

const calculator = {
  num1: 0,
  num2: 0,

  checkNumber(num1, num2) {
    return (
      typeof num1 === "number" &&
      typeof num2 === "number" &&
      !isNaN(num1) &&
      !isNaN(num2)
    );
  },

  ask() {
    this.num1 = Number(prompt("Введіть перше число: "));
    this.num2 = Number(prompt("Введіть друге число: "));

    if (!this.checkNumber(this.num1, this.num2)) {
      console.log("Будь ласка, введіть коректні числа!");
      this.num1 = 0;
      this.num2 = 0;
    }
  },

  sum() {
    console.log(`Сума чисел: ${this.num1 + this.num2}`);
  },

  mul() {
    console.log(`Добуток чисел: ${this.num1 * this.num2}`);
  },
};

// Приклади для перевірки
console.log(isEmpty({})); // true
console.log(isEmpty({ key: "value" })); // false

user.sayHello(); // Привіт, я Сергій, мені 26 років
calculator.ask(); // Запросить числа через prompt
calculator.sum(); // Виведе суму
calculator.mul(); // Виведе добуток
