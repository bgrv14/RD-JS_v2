let firstNumber;
let secondNumber;
let result1;
let result2;
let result3;
let result4;

firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");

if (!firstNumber || !secondNumber) {
  alert("Помилка");
} else {
  result1 = +firstNumber + +secondNumber;
  alert(`Сума: ${result1}`);

  if (secondNumber < firstNumber == false) {
    if (confirm("Ви впевнені, що хочете продовжити операцію?") === true) {
      result2 = +firstNumber - +secondNumber;
      alert(`Різниця: ${result2}`);
    } else {
    }
  } else {
    result2 = +firstNumber - +secondNumber;
    alert(`Різниця: ${result2}`);
  }

  result3 = +firstNumber * +secondNumber;
  alert(`Множення: ${result3}`);

  if (secondNumber == 0) {
    alert("Помилка: Друге число не може дорівнювати нулю!");
  } else {
    result4 = +firstNumber / +secondNumber;
    alert(`Ділення: ${result4}`);
  }
}
