/* 2. 
Напишіть скрипт в зовнішньому файлі, який виводить в консоль ваше прізвище.
Підключіть створений файл до HTML-документу. */

console.log("surname");

/*3.
  a) оголосіть дві змінні;
  b) запишіть у змінні будь-які значення;
  c) виведіть на екран значення змінних;
  d) скопіюйте значення однієї змінної в іншу;
  e) виведіть на екран значення змінних.*/

  let firstVar = 23;
  let secondVar =45;
  console.log("firstVar is " + firstVar +  " and secondVar is " + secondVar);

  secondVar = firstVar;
  console.log("firstVar is " + firstVar +  " and secondVar is " + secondVar);

  /*4. Створіть об’єкт з 5-ма наступними властивостями: 
  “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
  Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
  */
 let newUser = {
    fName: "John",
    age: 32,
    isEmployed: true,
    address: undefined, 
    salary: null

 };
 console.log(newUser);

 /*5. Використовуючи функцію confirm() задайте користувачу питання про досягнення
 ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.*/
let isAdult = confirm("Are you adult?");
console.log(isAdult);

// did not worked in this representation
// if (isAdult = true) {
//     console.log("You are Adult");
// } else if (isAdult = false) {
//     console.log("You are not an Adult");
// };


/*6. В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.*/

let myName = "Hanna";
console.log(typeof myName);
let lastName = "Smith";
console.log(typeof myName);
let myGroup = 2;
console.log(typeof myGruop);
let birthYear = 1900;
console.log(typeof birthYear);
let isMarried  = true;
console.log(typeof isMarried);

/*7. За допомогою функції prompt() напишіть скрипт , який послідовно запитує 
в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. 
Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.*/
let userLogin = prompt("Enter your user login please!");
let userEmail = prompt("Please enter your email!");
let userPassw = prompt("Please enter your password!");
alert(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassw}`);

/*8. Напишіть скрипт, який вираховує кількість секунд в годині, в добі, 
в місяці, записує результати в відповідні змінні, і виводить їх значення на екран. */

// in the hour
let numberHours = prompt("Enter number of hours to find out number of seconds");
let secondsHour = numberHours * 3600;
alert(`It is ${secondsHour} seconds in ${numberHours} hours"`);
// in the day
let numberDays = prompt("Enter number of days to find out number of seconds");
let secondsDay = numberDays * 3600 * 24;
alert(`It is ${secondsDay} in ${numberDays} days!`);

// in the month
let numberMonth = prompt("Enter number of days in the month to find out number of seconds");
let secondsMonth = numberMonth * 3600 * 24;
alert(`It  is ${secondsMonth} seconds in ${numberMonth} days!`);

/*(Ускладнене. 
Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. 
Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє.*/

let s = prompt("Enter seat number");
/* let cabin have 4 seats and 2 side seats, top ones are even and bottom ones are odd, 
every 5th and 6th are side bunks, there are 60 seats in the car*/

// show cabin number
function cabin(s)
{
    if (s > 0 && s < 7) {
        alert("cabin 1");
    }

    else if (s > 6 && s < 13) {
        alert("cabin 2");
    }
    else if (s > 12 && s < 19) {
        alert("cabin 3");
    }
    else if (s > 18 && s < 25) {
        alert("cabin 4");
    }
    else if (s > 24 && s < 31) {
        alert("cabin 5");
    }
    else if (s > 30 && s < 37) {
        alert("cabin 6");
    }
    else if (s > 36 && s < 43) {
        alert("cabin 7");
    }
    else if (s > 42 && s < 49) {
        alert("cabin 8");
    }
    else if (s > 48 && s < 55) {
            alert("cabin 9");
    }
    else if (s > 54 && s < 61) {
            alert("cabin 10");
    } else {
        alert("your seat number is not correct!");
    }

        
};
console.log(cabin(s));


// show seat specification
function seat_type(s) {
    if (s % 2 ==0 && s % 6 == 0) {
        alert("seat top, side");
    }
    else if (s % 2 ==0 && s % 6 == 2 || s % 6 == 4) {
        alert("seat top, cabin");
    }
    else if (s % 2 == 1 && s % 6 == 5) {
        alert("seat bottom, side");
    } else {
        alert("seat bottom, cabin");
    }
    
};

console.log(seat_type(s));


