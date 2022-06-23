const todoList = [
    {
        id: 1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: 2,
        title: "What to buy",
        filter: "all",
    },
]

const tasks = {
    [todoList[0].id]: [
        {id: 12, title: "JS", isDone: false},
        {id: 13, title: "TS", isDone: false},
        {id: 14, title: "HTML", isDone: false}
    ],
    [todoList[1].id]: [
        {id: 22, title: "Milk", isDone: false},
        {id: 23, title: "Cheese", isDone: false},
        {id: 24, title: "Ice-cream", isDone: false}
    ]
}

console.log(tasks[todoList[0].id][0].title);

// reduce

const nums = [10, 30, 20] // sum - ?
console.log(nums.reduce((acc, el) => {
    acc = acc + el; // 60
    return acc;
}, 0))

console.log(nums.reduce((acc, el) => acc + el, 0))

console.log(nums.reduce((acc, el) => {
    if(acc > el) {
        return acc;
    }
    else {
        return el
    }
}))

console.log(nums.reduce((acc, el) => acc > el ? acc : el));

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

console.log(students.reduce((acc, el) => acc + el.scores, 0))


// замена map с помощью reduce
console.log(students.map(st => ({...st, scores: st.scores + 10})));
console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 10});
    return acc;
}, []))
//


const st = {
    1: {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    }
}

////////////////////////////////////////////////////////
console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}; // "1": {...el}
    delete acc[el.id].id;
    return acc;
}, {}))
//////////////////////////////////////////////////////