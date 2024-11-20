let firstNumber;
let secondNumber;
let result1, result2, result3, result4;

firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");

result1 = +firstNumber + +secondNumber;
result2 = firstNumber - secondNumber;
result3 = firstNumber * secondNumber;
result4 = firstNumber / secondNumber;
alert(`Сума: ${result1};
Різниця: ${result2}
Множення: ${result3}
Ділення: ${result4}`);
