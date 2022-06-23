const names = ['Artur', 'Bob', 'Vlad', 'Alex', 'Donald', '007', 'alex', 'юрий'];

console.log(names.sort());

const numbers = [100, 99, 665, 1000, 2];

// return > 0 => перестановка
// return <= 0 => перестановки не будет

const compFn = (a, b) => { // по возрастанию
    if (a > b) {
        return 10;
    }  else {
        return -10;
    }
}

console.log(numbers.sort((a, b) => a - b)); // так же вернет положительное или отрицательное

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
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
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.scores - b.scores).reverse())

console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase()? 1 : -1))

////////////////////////////////////////////////////////////////////////////////////////

// bubble sort

const nums = [13, 45, 67, 12, 99, 87]; // по возрастанию

for (let k = 0; k < nums.length-1; k++) {
    let isSorted = true;
    for (let i = 0; i < nums.length-1-k; i++) {
        if (nums[i] > nums[i+1]) {
            isSorted = false;
            // let temp = nums[i];
            // nums[i] = nums[i+1];
            // nums[i+1] = temp;
            [nums[i+1], nums[i]] = [nums[i], nums[i+1]];
        }
    }
    if (isSorted) break;
}

console.log(nums)