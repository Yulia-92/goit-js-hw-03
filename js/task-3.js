function filterArray(numbers, value) {
  // Створюємо порожній масив для підходящих чисел
  let filteredNumbers = [];
  
  // Ітеруємо через масив numbers
  for (let i = 0; i < numbers.length; i++) {
      // Якщо число більше за value, додаємо його в filteredNumbers
      if (numbers[i] > value) {
          filteredNumbers.push(numbers[i]);
      }
  }
  
  // Повертаємо новий масив з числами, більшими за value
  return filteredNumbers;
}

filterArray([1, 5, 8, 2, 10], 5);
// Результат: [8, 10]

filterArray([3, 6, 9, 4], 7);
// Результат: [9]

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

