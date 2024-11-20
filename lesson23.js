const arr = [4, 8, 15, 16, 23, 42, 7, 14, null, 96];

let sum = 0;
let min = Infinity;
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}
console.log(sum);
console.log("Мін:", min, "Макс:", max);

let str = "";
for (let i = 1; i <= 5; i++) {
  str += "#".repeat(i) + "\n";
}
console.log(str);
