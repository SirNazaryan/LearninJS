1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function getSquare(x) {
    return x**2
}
 console.log(getSquare(6))

2. Сделайте функцию, которая возвращает сумму двух чисел.

function getSum(a,b) {
    return (a+b)
}
console.log(getSum(3,4))

3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function getMath(a, b, c) {
    return ((a-b)/c)
}
console.log(getMath(5, 2, 3))

4.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function getDayOfWeek(day){
    if(day === 1) {
        console.log("Сегодня понедельник")
    }
    else if(day === 2) {
        console.log("Сегодня вторник")
    }
    else if(day == 3) {
        console.log("Сегодня среда")
    }
    else if(day == 4) {
        console.log("Сегодня четверг")
    }
    else if(day == 5) {
        console.log("Сегодня пятница")
    }
    else if(day == 6) {
        console.log("Сегодня суббота")
    }
    else if(day == 7) {
        console.log("Сегодня воскресенье")
    }
    else{
        console.log("Наберите число от 1-7")
    }
}
getDayOfWeek(3)

5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function getMathOper(x, y){
    if(x===y){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
getMathOper(3,3)

6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
 function checkSum(a,b) {
     return (a+b) > 10 ? "true": "false" 
 }
 console.log(checkSum(6,7))

7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
    function checkNum(a) {
        return a < 0 ? "true" : "false"
    }
    console.log(checkNum(-10))

    8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
    function isNumberInRange(x) {
        return ((x > 0) && (x < 10)) ? "true": "false"
    }
    console.log(isNumberInRange(11))

    9. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
        function isEven(x) {
            return (x%2 === 0) ? "true" :"false"
        }
        console.log(isEven(4))