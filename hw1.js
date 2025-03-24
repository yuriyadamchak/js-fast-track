
// Task #2
console.log('Adamchak');


//Task #3
let value1 = 1;
let value2 = 'a';

alert("Value 1 is '" + value1 + "'. Value 2 is '" + value2 + "'.");
value1 = value2;
alert("Value 1 is '" + value1 + "'. Value 2 is '" + value2 + "'.");

//Task #4
const myObject = {
    name: "Ken",
    heght: 190,
    alive: true,
    mateId: undefined,
    assets: null
};

//Task #5
let reachAge = confirm("Reaching the age of majority?");
alert("Reaching the age of majority value is " + reachAge + ".");

//Task #6
let firstName = "Petro";
let lastName = "Petros";
let studyGroup = 23;
let yearOfBirth = 2000;
let maritalStatus = true;
let arbitraryValue1 = null;
let arbitraryValue2;
console.log(studyGroup, yearOfBirth, maritalStatus, firstName, lastName);
console.log(typeof arbitraryValue1, typeof arbitraryValue2);

//Task #7
let userLogin = prompt("Please enter your login");
let userEmail = prompt("Please enter your email");
let userPassword = prompt("Please enter your password");
alert("Dear " + userLogin + ", your email is " + userEmail + ", your password is " + userPassword + ".");

//Task #8
let numberOfHours = prompt("Enter number of hours");
alert("There are " + numberOfHours * 60 + " seconds in " + numberOfHours + " hour(s).");
let numberOfDays = prompt("Enter number of days");
alert("There are " + numberOfDays * 1440 + " seconds in " + numberOfDays + " day(s).");
let numberOfMonths = prompt("Enter number of months");
alert("There are " + numberOfMonths * 43200 + " seconds in " + numberOfMonths + " month(s).");