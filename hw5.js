//Task #1
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

//Task #2
let person = {
    name: "Ivan",
    age: 28,
    profession: "Designer",
    country: "Ukraine",
    isEmployed: true
};

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    isElectric: false
};

function showProps(obj) {
    const props = Object.keys(obj);
    const values = Object.values(obj);

    console.log("Property names:", props);
    console.log("Property values:", values);

    return props;
}

showProps(person);
showProps(car);


//Task #3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.surname} ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

}

const stud1 = new Student("Petro", "Petrenko", 2020);

console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

//Task #4
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }

    get showExp() {
        return this.#experience;
    }

    set setExp(value) {
        this.#experience = value;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("John Johnson salary: " + worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log("John Johnson salary: " + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log("Tom Thomson salary: " + worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log("Tom Thomson salary: " + worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log("Andy Ander salary: " + worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log("Andy Ander salary: " + worker3.showSalaryWithExperience());

let workers = [worker1, worker2, worker3];
workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
console.log("Sorted salary:");
workers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));