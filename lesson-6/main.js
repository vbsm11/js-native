const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log('Поверхностная копия user:')
console.log(`Должно быть false: ${user===copyUser}`);
console.log(`Должно быть true: ${user.friends===copyUser.friends}`);

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log('Глубокая копия user:')
console.log(`Должно быть false: ${user===deepCopyUser}`);
console.log(`Должно быть false: ${user.friends===deepCopyUser.friends}`);

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log('Поверхностная копия массива students:')
console.log(copyStudents);
console.log(`Должно быть false: ${copyStudents === students}`);
console.log(`Должно быть true: ${copyStudents.length === students.length}`);
console.log(`Должно быть true: ${copyStudents[0] === students[0]}`);

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(s => ({...s}));

//Проверка:
console.log('Полная (глубокая) копия массива students (map):')
console.log(deepCopyStudents);
console.log(`Должно быть false: ${deepCopyStudents === students}`);
console.log(`Должно быть true: ${deepCopyStudents.length === students.length}`);
console.log(`Должно быть false: ${deepCopyStudents[0] === students[0]}`);


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort):
console.log('Отсортируйте копию массива deepCopyStudents по алфавиту (sort):');
let sortedByName = [...deepCopyStudents].sort((a, b) =>  a.name.localeCompare(b.name));
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
console.log('Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort):');
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
console.log('Сформируйте массив студентов, у которых 100 и более баллов (filter):');
let bestStudents = deepCopyStudents.filter(s => s.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log('Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice):');
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
console.log('Объедините массивы deepCopyStudents и topStudents так, чтоб сохранился порядок сортировки:');
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
console.log('Сформируйте массив холостых студентов (filter):');
let notMarriedStudents = newDeepCopyStudents.filter(s => !s.isMarried);
console.log(notMarriedStudents);

//8. Сформируйте массив имён студентов (map)
console.log('Сформируйте массив имён студентов (map)');
let studentsNames = newDeepCopyStudents.map(s => s.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
console.log('Сформируйте строки из имён студентов');
let namesWithSpace = studentsNames.join(' ');
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(', ');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
console.log('Добавьте всем студентам свойство "isStudent" со значением true (map)');
let trueStudents = newDeepCopyStudents.map(s => { return {...s, isStudent: true}});
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
console.log('Nick женился. Выполните соответствующие преобразование массива students (map)');
let studentsWithMarriedNick = newDeepCopyStudents.map(s => s.name === "Nick" ? {...s, isMarried: true} : s);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
console.log('Найдите студента по имени Ann (find)');
let ann = newDeepCopyStudents.find(s => s.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
console.log('Найдите студента с самым высоким баллом (reduce)');
let bestStudent = newDeepCopyStudents.reduce((acc, el) => acc.scores > el.scores ? acc : el);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
// И поднимаем руку!!!!
console.log('Найдите сумму баллов всех студентов (reduce)');
let scoresSum = newDeepCopyStudents.reduce((acc, el) => acc + el.scores, 0);;
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

console.log('Добавление friends в каждый элемент:');
const addFriends = (students) => {
   for (let i = 0; i < students.length; i++) {
       let friendsNames = students.map(s => s.name).filter(s => s !== students[i].name);
       students[i].friends = friendsNames;
   }
   return students;
}
console.log(addFriends(students));









