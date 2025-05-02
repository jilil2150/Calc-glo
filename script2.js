// let arr = [
//     "2345",
//     "4123",
//     "7890",
//     "3456",
//     "1234",
//     "4567",
//     "2987"
//   ];
  
//   // Фильтрация и вывод в консоль
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] === "2" || arr[i][0] === "4") {
//       console.log(arr[i]);
//     }
//   };

let from = 1;
let to = 100;
let arr = [];

// Заполняем массив числами от 1 до 100
for (let i = from; i <= to; i++) {
  arr.push(i);
}

// Функция проверки на простое число
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Перебираем числа и выводим только простые
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (isPrime(num)) {
    console.log(`${num}: делители → 1, ${num}`);
  }
}