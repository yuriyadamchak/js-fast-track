
//Task #1
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
        throw new Error('Non-numeric parameters are passed to the function');
    }
    return width * height;
}

try {
    const width = Number(prompt('Enter the width of the rectangle:'));
    const height = Number(prompt('Enter the height of the rectangle:'));

    // const width = parseFloat(widthInput);
    // const height = parseFloat(heightInput);

    const area = calcRectangleArea(width, height);
    console.log(`The area of the rectangle is ${area}`);
} catch (error) {
    console.error(error.message);
}

//Task #2
function checkAge() {
    try {
        const ageInput = prompt('Please enter your age:');

        if (ageInput === null || ageInput.trim() === '') {
            throw new Error('The field is empty! Please enter your age.');
        }

        const age = Number(ageInput);

        if (isNaN(age)) {
            throw new TypeError('Entered value is not a number.');
        }

        if (age < 14) {
            throw new RangeError('You must be at least 14 years old to watch this movie.');
        }

        alert('Access granted. Enjoy the movie!');
    } catch (error) {
        alert(`Error: ${error.name}\nDescription: ${error.message}`);
    }
}

// Call the function to run it
checkAge();

//Task #3
class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (month < 1 || month > 12 || isNaN(month)) {
        throw new MonthException('Incorrect month number');
    }
    
    return months[month - 1];
}

// Usage examples with error handling
try {
    const monnthInput = Number(prompt('Please enter month number:'));
    console.log(showMonthName(monnthInput));
} catch (error) {
    console.log(`${error.name} ${error.message}`);
}

//Task #4
function showUser(id) {
    if (id < 0) {
        throw new Error("User ID cannot be negative");
    }
    return { id };
}

function showUsers(ids) {
    const result = [];
    for (const id of ids) {
        try {
            const user = showUser(id);
            result.push(user);
        } catch (error) {
            console.error(`Error processing ID ${id}: ${error.message}`);
        }
    }
    return result;
}

const ids = [123, 51, 456, 789];
const users = showUsers(ids);
console.log(users); 