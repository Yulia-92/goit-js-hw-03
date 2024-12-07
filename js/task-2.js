function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо масиви
  let newArray = firstArray.concat(secondArray);
  
  // Перевіряємо, чи перевищує довжина нового масиву maxLength
  if (newArray.length > maxLength) {
      return newArray.slice(0, maxLength);  // Повертаємо масив з maxLength елементами
  }
  
  return newArray;  // Повертаємо весь масив, якщо його довжина менша або рівна maxLength
}

makeArray([1, 2, 3], [4, 5, 6], 5);
// Результат: [1, 2, 3, 4, 5]

makeArray([1, 2], [3, 4, 5, 6], 10);
// Результат: [1, 2, 3, 4, 5, 6]

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


