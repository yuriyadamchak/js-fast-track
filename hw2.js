
//Task #1
let x = 1;
let y = 2;


let res1 = String(x) + String(y);// Add the code, it is necessary to use the variables x and y

console.log(res1); // "12"

console.log( typeof res1); // "string"


let res2 = String(x>0)+ String(y)// Add code is required use variables x and y

console.log(res2); // "true2"

console.log( typeof res2); // "string"


let res3 = x != y// Add code is required use variables x and y

console.log(res3); // true

console.log( typeof res3); // " boolean "


let res4 = parseInt(x==y)// Add code is required use variables x and y

console.log(res4); // NaN

console.log( typeof res4); // "number"

//Task #2
let input = Number(prompt("Enter a number:"));

let isEvenPositive = input > 0 && input % 2 === 0;
let isMultipleOf7 = input % 7 === 0;

console.log("Even and positive: " + isEvenPositive);
console.log("Multiple of 7: " + isMultipleOf7);

//Task #3
let arr = [];
arr[0] = 1;
arr[1] = "Any line.";
arr[2] = true;
arr[3] = null;
console.log("Number of elements in the array: " + arr.length);
arr[4] = prompt("Enter a value:");
console.log(arr[4]);
arr.shift();
console.log(arr);

//Task #4
let cities = [" Rome ", " Lviv ", " Warsaw "];
let result = cities.join("*");
console.log(result); 

//Task #5
let isAdult = Number(prompt("Enter your age:"));

if(isAdult >= 18){
    console.log("You have reached the age of majority.")
}
else console.log("You are still too young.")

//Task #6
let a = prompt("Enter the length of side 1:");
let b = prompt("Enter the length of side 2:");
let c = prompt("Enter the length of side 3:");
let p = (a + b + c)/2;
let sides = [a, b, c];
let s = sides.sort((a, b) => a - b);

if (a > 0 && b > 0 && c > 0){
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log("The area of triangular = " + area.toFixed(3));
    if(Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) == 0){
        console.log("Triangular is right.")
    }
    else console.log("Triangular is not right.")
}
else console.log("Entered data is incorrect.")

//Task #7
let time = new Date().getHours();

if (time >= 23 || time < 5) {
    console.log("Good night.")
}
else if (time >= 5 && time < 11){
    console.log("Good morning.")
}
else if (time >= 11 && time < 17){
    console.log("Good day.")
}
else {
    console.log("Good evening.")
};

switch (true) {
    case (time >= 23 || time < 5):
        console.log("Good night.");
        break;

    case (time >= 5 && time < 11):
        console.log("Good morning.");
        break;

    case (time >= 11 && time < 17):
        console.log("Good day.");
        break;

    default:
        console.log("Good evening.");
};