//
//
// const arrayObj = [
//     {
//         name: 'Vasya',
//         age: 20,
//         isMarried: false,
//         gender:"male"
//     },
//     {
//         name: 'Petr',
//         age: 29,
//         isMarried: true,
//         gender:"male"
//     },
//     {
//         name: 'Volodya',
//         age: 25,
//         isMarried: true,
//         gender:"male"
//     },
//     {
//         name: 'Lera',
//         age: 20,
//         isMarried: false,
//         gender:"fimale"
//     },
//     {
//         name: 'Nikita',
//         age: 30,
//         isMarried: false,
//         gender:"male"
//     }
// ]
// const handleFilter = (array) => {
//     return array.filter(user => user.age >24 && user.gender === "male" && user.isMarried)
// }
// console.log(handleFilter(arrayObj))




// const handleFilter = (array) => {
//     const reversed = [];
//
//     for (let i = array.length - 1; i >= 0; i -= 1) {
//         reversed.push(array[i]);
//     }
//
//     return reversed;
// }
// console.log(handleFilter( [1, 2, 3]))


//
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// var arr = [0, 1, false, 2, undefined, '', 3, null];
// var filtered = arr.filter(Boolean);
// console.log(filtered);


//
// function handleFilter(str,num) {
//     return str.concat(num)
// }
//
// console.log(handleFilter(['a', 'b', 'c'], [1, 2, 3]))

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.


// let array=[1, 2, 3]
// function handleFilter(a,b,c) {
//     return ([...array,...a,...b,...c])
// }
//     console.log(handleFilter([4],[5],[6] ))

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let array=[1, 2, 3]
// function handleFilter(a,b,c) {
//     return ([...a,...b,...c,...array])
// }
//     console.log(handleFilter([4],[5],[6] ))

// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]


//     const makeUniq = (arr) => {
//     return arr.filter((el, id) => arr.indexOf(el) === id);
// }
//
//     console.log(makeUniq([1, 2, 3, 1, 2]))

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let mas=[1, 2, 3, 4, 5]
// mas.splice(1,2)
// console.log(mas);

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
//
//     ['Капуста', 'Репа', 'Редиска', 'Морковка']
//
//    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//    let str1 = vegetables.join();
//    let str2 = '';
//    for(let i = 0; i < vegetables.length; i++) {
//     str2 += vegetables[i];
// }
// console.log(str1)

// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]
// const str = prompt( 'КаЖдЫй ОхОтНиК');


// const str ='КаЖдЫй ОхОтНиК';
// function changeRegister (str) {
//     let result = ''
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === str[i].toUpperCase()) {
//             result += str[i].toLowerCase();
//         } else {
//             result += str[i].toUpperCase();
//         }
//     }
//     return result.split();
// }
//
// console.log(changeRegister(str));
//  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
//  const arrayObj =    {js:'test',jq: 'hello', css: 'world',    }
// console.log(Object.keys(arrayObj))

// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
// const handleFilter = (array) => {
//     return array.filter(user => user.price >40000 && user.price <60000 && user.year === 2019)
// }
// console.log(cars)