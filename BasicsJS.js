var fieldVar;// везде, но если поставить в функциии то будет работать только там
let fieldLet;// только в функции 
const fieldConst = 3234;// сразу нужно присваивать значение в отличаи от var и let и изменить потом нельзя

// fieldLet = `Тут будет значение ${fieldConst}`;
// fieldLet = "Тут будет значение";

// const peopleBio = {
//     name: "Ivan",
//     firstName: "Andreev",
//     lastName: "Ivanov",

//     test: {
//         name: "Ivan1",
//         firstName: "Andreev",
//         lastName: "Ivanov",
//         test: {
//             name: "Ivan2",
//             firstName: "Andreev",
//             lastName: "Ivanov",
//         }
//     }
// }

fieldLet = Boolean(" ");
console.log(fieldLet);
console.log(typeof fieldLet);

/*
typeof - оператор возвр тип аргумента
Типы данных
примитивные
1 undefined - имеет 1 значение уст только не было присвоино значение (вообще ничего нет)
2 null - ссылка на несуществующее либо на 0 (ничего нет)
3 boolean - логический (true/false)
4 string - 
5 number - // 2^53-2 - вверхная груница -2^53-2 нижнаяя граница 
5 1 BigInt - 85709827845098267498528973489072304972039402342342n;
не примитивный - сложная структура данных
6 object - |

преобразование типов
boolean - "" - false " " true тк символ
null и undefined - нельзя
каждый тип в строку можно
численные значения
 undefined -> NaN
 null -> 0
 true / false -> 1/0
 string "" -> 0 || ( " " || "tetet" ) -> NaN || " 23443 " -> number 
boolean
 undefined -> NaN
null -> 0
0 / 1 -> false/true
string "" -> false || (" " ||  "test" || "0" || "1") -> true



*/