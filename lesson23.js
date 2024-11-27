const arr = [4, 8, 15, 16, 23, 42, 7, 14, null, 96];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum += arr[i];
  }
}
let sumColor =
  sum >= 0
    ? `rgb(${Math.abs(sum)}, ${Math.abs(sum)}, ${Math.abs(sum)})`
    : `rgb(${Math.abs(sum)}, 0, 0)`;
document.getElementById("sum").innerText = "Сума: " + sum;
document.getElementById("sum").style.color = sumColor;

let min = Infinity;
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}

document.getElementById("min-max").innerText = "Мін: " + min + " Макс: " + max;

let str = "";
for (let i = 1; i <= 5; i++) {
  str += "#".repeat(i) + "\n";
}
document.getElementById("triangle").innerText = str;

function checknumber(a, b) {
  return typeof a === "number" && typeof b === "number";
}

function add(a, b) {
  if (checknumber(a, b)) {
    return a + b;
  } else {
    return "Помилка: введіть числа";
  }
}

function subtract(a, b) {
  if (checknumber(a, b)) {
    return a - b;
  } else {
    return "Помилка: введіть числа";
  }
}

function multiply(a, b) {
  if (checknumber(a, b)) {
    return a * b;
  } else {
    return "Помилка: введіть числа";
  }
}

function divide(a, b) {
  if (checknumber(a, b) && b !== 0) {
    return a / b;
  } else {
    return "Помилка: введіть числа та переконайтеся, що друге число не є нулем";
  }
}

function findMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function calculate(arr, operation) {
  if (typeof operation !== "function") {
    return "Помилка: введіть функцію обчислення";
  }
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result = operation(result, arr[i]);
    }
  }
  return result;
}
