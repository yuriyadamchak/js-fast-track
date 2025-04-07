//Task #1
let arr = [2, 3, 4, 5];

let p1 = 1;

for (let i = 0; i < arr.length; i++) {
    p1 *= arr[i];
}

console.log("Product:", p1);

let p2 = 1;
let i = 0;

while (i < arr.length) {
    p2 *= arr[i];
    i++;
}

console.log("Product:", p2);


//Task #2
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

//Task #3
function randArray(k) {
    let result = [];
    for (let i = 0; i < k; i++) {
        let randomNumber = Math.floor(Math.random() * 500) + 1;
        result.push(randomNumber);
    }
    return result;
}

let k = prompt("Enter array length: ");
console.log(randArray(k));

//Task #4
function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a ** b;
    } else {
        return "Not integers.";
    }
}

let a = Number(prompt("Enter number a:"));
let b = Number(prompt("Enter number b:"));

let result = raiseToDegree(a, b);
console.log("Result: " + result);

//Task #5
let inputArray = randArray(k);
function findMin() {
    let min = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }

    return min;
}

console.log(inputArray);
console.log(findMin(...inputArray));

//Task #6
function findUnique(arr) {
    let uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}

console.log(inputArray);
console.log(findUnique(inputArray));

//Task #7
function lastElem(inputArray, x) {
    if (x === undefined) {
        return inputArray[inputArray.length - 1];
    } else {
        return inputArray.slice(-x);
    }
}

console.log(lastElem(inputArray));
console.log(lastElem(inputArray, 2));
console.log(lastElem(inputArray, 100));

//Task #8
function capitalizeWords(inputString) {
    return inputString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log(capitalizeWords('i love java script'));
