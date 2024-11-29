///1
it("повинна правильно обчислювати суму чисел в масиві", function () {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  expect(sum).toBe(225); // перевірка на правильність суми
});
it("повинна знаходити мінімальне значення в масиві", function () {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] < min) {
      min = arr[i];
    }
  }
  expect(min).toBe(4); // мінімальне значення
});

///2
it("повинна знаходити максимальне значення в масиві", function () {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] > max) {
      max = arr[i];
    }
  }
  expect(max).toBe(96); // максимальне значення
});

///3
it("повинна побудувати правильний трикутник з #", function () {
  let expectedStr = "#\n##\n###\n####\n#####\n";
  let str = "";
  for (let i = 1; i <= 5; i++) {
    str += "#".repeat(i) + "\n";
  }
  expect(str).toBe(expectedStr); // перевірка на правильність форми
});

///4
it("повинна правильно додавати два числа", function () {
  expect(add(2, 3)).toBe(5); // перевірка на додавання
});

it("повинна правильно віднімати два числа", function () {
  expect(subtract(5, 3)).toBe(2); // перевірка на віднімання
});

it("повинна правильно множити два числа", function () {
  expect(multiply(2, 3)).toBe(6); // перевірка на множення
});

it("повинна правильно ділити два числа", function () {
  expect(divide(6, 3)).toBe(2); // перевірка на ділення
});

it("повинна повернути помилку при діленні на 0", function () {
  expect(divide(6, 0)).toBe(
    "Помилка: введіть числа та переконайтеся, що друге число не є нулем"
  ); // перевірка на помилку
});

///5
it("повинна правильно знаходити мінімальне значення в масиві", function () {
  expect(findMin(arr)).toBe(4); // перевірка на мінімум
});

it("повинна правильно знаходити максимальне значення в масиві", function () {
  expect(findMax(arr)).toBe(96); // перевірка на максимум
});
