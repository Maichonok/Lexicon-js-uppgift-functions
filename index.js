// Ex.#1
function greeting(message) {
  window.alert(message);
}

greeting("Hello there my friend!");

// Ex.#2
let userName = window.prompt("Please, your name");

function sayHello() {
  window.alert(`Hello there my friend, ${userName}!`);
}

sayHello(userName);

// Ex.#3
const sum = function (a, b) {
  console.log(a + b);
};

sum(2, 3); //5

// Ex.#4
const quotient = function (c, d) {
  answer = c % d;
  if (d === 0) {
    console.log("Oops! Can't divide by zero.");
  } else {
    console.log(answer);
  }
};

quotient(10, 2); //0
quotient(10, 0); //Oops! Can't divide by zero.

// Ex.#5
const square = function (length, width) {
  result = length * width;
  console.log(result);
};

square(4, 5); //20

//Ex.#6
let firstName = window.prompt("Please, your firstName");
let lastName = window.prompt("Please, your lastName");

function greetingSecond(firstName, lastName) {
  window.alert(`Hello ${firstName} ${lastName}!  How are you doing?`);
}
greetingSecond(firstName, lastName);

//Ex.#7
const miles = function (km) {
  const mi = km * 0.62137;
  console.log(mi);
};

miles(5); //3.1068499999999997

//Ex.#8
const temperature = function (celsius) {
  const F = 1.8 * celsius + 32;
  console.log(F);
};

temperature(230); //446

//Ex.#9
function calculateMean(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let mean = sum / array.length;
  return mean;
}

let meanValue = calculateMean([1, 2, 3, 4, 5]);
console.log(meanValue); //3

//Ex.#10
function checkAge(age) {
  if (age >= 0 && age <= 14) {
    alert("Get out of here!");
  } else if (age >= 15 && age <= 17) {
    alert("Sorry, you are not old enough");
  } else if (age >= 18 && age <= 19) {
    alert("Sorry, you must be at least 20. Why don't you try a bar instead?");
  } else if (age >= 20 && age <= 80) {
    alert("Thank you! Welcome!");
  } else if (age > 80) {
    alert("I'm sorry, where is your caretaker?");
  } else {
    alert("You don't exists, you can enter your age again");
  }
}

checkAge(0);
checkAge(8);
checkAge(-1);
checkAge("hello");
checkAge(16);
checkAge(18.5);
checkAge(21);
checkAge(81);
checkAge(100);

//Ex.#11
let myNums = [1, 3, 5, 7, 9, 11, 2, 4, 6, 8];
function calculateSum(myNums) {
  let sum = 0;
  for (let i = 0; i < myNums.length; i++) {
    sum += myNums[i];
  }
  return sum;
}
console.log(calculateSum(myNums));

//Ex.#12
let person = {
  name: "Maja",
  ageOfUser: 39,
  city: "Stokholm",
  skills: [
    "Pokemon Master",
    "Kung Fu Legend",
    "Football Ninja",
    "Coding Wizard",
    "Space Explorer",
  ],
};

function itsMe(person) {
  console.log(`These my best skills: ${person.skills}`);
}
itsMe(person);
