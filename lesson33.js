Array.prototype.pow = function (n) {
  // Використовуємо map для обробки кожного елемента масиву
  return this.map((num) => Math.pow(num, n));
};

// Тестуємо
const arr = [2, 4, 8];
console.log(arr.pow(2));
console.log(arr.pow(3));

Function.prototype.defer = function (ms) {
  const func = this; // Зберігаємо посилання на функцію, до якої застосовуємо defer
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

function greet(Сергій) {
  console.log(`Привіт, ${Сергій}!`);
}
greet.defer(2000)("Сергію"); // Виведе через 2 секунди
