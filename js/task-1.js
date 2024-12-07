
function slugify(title) {
    return title
        .toLowerCase()              // Перетворюємо всі літери в нижній регістр
        .trim()                     // Видаляємо зайві пробіли з початку та кінця
        .replace(/\s+/g, '-')       // Заміщуємо всі пробіли (і їх послідовності) на тире
        .replace(/[^\w-]+/g, '');   // Видаляємо всі символи, окрім літер, цифр і тире
}

slugify("Arrays for Beginners"); 
// Результат: "arrays-for-beginners"

slugify("  Learn JavaScript!   ");
// Результат: "learn-javascript"

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
