/* 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), 
которая преобразует строку в массив слов. */
// const str = "Преобразовать строку в массив слов.";
// function stringToarray(str) {
//     return str.split(" ");
// }
// console.log(stringToarray(str));

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
// let str = "Напищите функцию, которая возвращает подстроку, состоящую из указанного количества символов" 

// function deleteСharacters(str, length){
//     return str.substr(str, length) 
//  }
//  console.log(deleteСharacters(str, 16))

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// let str = "Напишите функцию, которая принимает строку str в качестве аргумента и вставляет тире"

// function insertDash(str) {
//     return str.toUpperCase(str).replace(/\s/g, "-");

// }
// console.log(insertDash(str))

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
// let str = "Напишите функцию, которая преобразует регистр первого символа строки из нижнего регистра в верхний."
//  function doUpperWord(str) {
//     return str.charAt(0).toUpperCase(str) + str.slice(1)
//  }
//  console.log(doUpperWord(str))

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
let str = "Напишите функцию, которая возвращает строку, в которой каждое слово начинается с заглавной буквы."
function capitalize(str) {
    let strArr = str.split(" ");
    var newStr = [];
    for(let i =0; i< strArr[i].length; i++){
        let result = strArr[i](0).toUpperCase() + strArr[i].slice(1);
        newStr.push(result)
    }
    return newStr.join("")
}
console.log(capitalize(str))