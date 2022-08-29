//Task 1
//Выведи все элементы массива в консоль с помощью метода **`forEach`**

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

//1й способ
function fibElements(value){
    console.log(value)
}
fibonacci.forEach(fibElements)

//2й способ
const fib = fibonacci.forEach(value => console.log(value));

//Task 2
//Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
// в котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc]

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

//1й способ
function userMemberCount(value, index){
    const npp = index + 1;
    return (`member ${npp}: ${value}`);
}
console.log(users.map(userMemberCount));

//2й способ
const userMember = users.map (function(value, index) {
    const npp = index + 1;
    return (`member ${npp}: ${value}`);
})
console.log(userMember);

//3й способ
const userCount = users.map((value, index) => {
    const npp = index + 1;
    return (`member ${npp}: ${value}`);
})
console.log(userCount);

//Task 3
//С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21];

//1й способ
function numbersFilter(value) {
    return value > 0;
}
console.log(numbers.filter(numbersFilter));

//2й способ
const filterNumbers = numbers.filter(value => value > 0)
console.log(filterNumbers);

//Task 4
//Используя метод **`reduce`** получите сумму всех чисел массива.

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

//1й способ
const fibSum = fibonacci.reduce(function(sum, current) {
    return sum + current;
})
console.log(fibSum);

//2й способ
const sumFib = fibonacci.reduce((sum, current) => sum + current)
console.log(sumFib);

//3й способ
function fibNumbersSum(sum, current) {
    return sum + current;
}
console.log(fibonacci.reduce(fibNumbersSum));

//Task 5
//Используя метод **`find`** найдите в массиве первое четное число.

const num = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

//1й способ
const numFind = num.find(function(value) {
    return value % 2 === 0;
})
console.log(numFind);

//2й способ
const findNum = num.find(value => value % 2 === 0);
console.log(findNum);

//3й способ
function numbersFind(value) {
    return value % 2 === 0;
}
console.log(num.find(numbersFind));

//ADVANCED level
//Task 1
// Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
// + На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

const rating = ['A', 'B', 'C', 'D'];

function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;

    this.getSalary = function() {
        console.log(this.salary)
    }

    this.getAvailableCredit = function() {
        switch(this.rate) {
            case 'A':
                return this.salary * 12
            case 'B':
                return this.salary * 9
            case 'C':
                return this.salary * 6
            case 'D':
            default:
                return 0
        }
    }
}

let students = [
    new Student('500', 'A', 'Dave'),
    new Student('1500', 'D', 'Susan'),
    new Student('500', 'B', 'Peter'),
    new Student('800', 'A', 'Mark'),
    new Student('1000', 'D', 'Kate')
];

const groupAvailableCredits = students.reduce((accum, currentStudent) => {
    return accum + currentStudent.getAvailableCredit()
}, 0)

console.log(groupAvailableCredits)

//Task 2
// Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

const removeVowels = (str) => str.replace(/[aeiou]/gi, ''); //регулярные выражения, флаги - g(глобальное сопоставление), i(игнорировать регистр)
console.log(removeVowels('This website is for losers LOL!'));

//Task 3
// + В приведенных ниже примерах показано, как написать функцию:

// ```javascript
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// ```

// > Параметр - это строка, которая включает только буквы от a..z и A..Z.

const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const accum = str => str
    .split('')
    .map((word, i) => capitalizeFirstLetter(Array(i+2).join(word).toLowerCase()))
    .join('-')

// map(...) - копируем символ `i+2` раза, т.к. индекс массива начинается с 0, 
// приводим все к нижнему регистру, а потом первый символ к верхнему.

// if(!/^[a-zA-Z]+$/.test(str)){ //куда это засунуть?
//     return "incorrect input";
// }

console.log(accum("abcd"));
console.log(accum("RqaEzty2"));
console.log(accum("cwAt"));

//Task 4
// + В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

// ```javascript
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// ```

// > Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.
