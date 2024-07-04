"use strict";

/* 1. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 
არგუმენტად გადაეცით ეს მასივი: 10, 50, 6, 7, 8, 11, 6, 3, 9 */

function numberSum(...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}

const sumResult = numberSum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sumResult);

/* 2. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით 
(მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false; */

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

const userInfo = (user) => {
  return user.isloggedin ? `${user.firstname} ${user.lastname}` : false;
};

const userInfoResult = userInfo(user);
console.log(userInfoResult);

/* 3. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
(აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max ) */

const maxNumber = (...numbers) => Math.max(...numbers);
const maxNumberResult = maxNumber(0, -5, 99, 8, -7, 16, 62, -4);
console.log(maxNumberResult);

/* 4. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; 
თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘ */

const num = (number) =>
  number % 2 === 0 ? "this number is even" : "this number is odd";

const numResult = num(6);
console.log(numResult);

/* 5. მოცემულია მასივი:
for ციკლის საშუალებით მიიღეთ reverse ვერსია, ანუ 5,4,3,2,1 */

let array = [1, 2, 3, 4, 5];
let reverseResult = [];

for (let element of array) {
  reverseResult = [element, ...reverseResult];
}

console.log(reverseResult);

/* 6. ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, 
თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით; */

const userAge = (age) =>
  age > 18 ? "the user is an adult" : "the user is a minor";

console.log(userAge(24));

/* 7. მოცემულია მასივი
ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი. */

// for..of

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of array2) {
  if (array2[i] === 5) {
    console.log("there is number 5 in the array");
    break;
  }
}

// forEach

let array22 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array22.forEach((number) => {
  if (number === 5) {
    console.log("there is number 5 in the array");
    return;
  }
});

/* 8. მოცემულია მასივი:
ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი.  */

let array3 = [1, 2, 3, 4, 5];
let aray3sum = 0;

for (let i of array3) {
  aray3sum += i;
}
console.log(aray3sum);

/* 9. მოცემულია მასივი
ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე). */

let array4 = [1, 2, 3, 4, 5];
let array4sum = 0;

for (let i of array4) {
  array4sum += i;
}

const array4result = array4sum / array4.length;
console.log(array4result);

/* 10. მოცემულია მასივი
გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue). */

let array5 = [1, 2, 3, 7, 6, 9];

for (let i of array5) {
  if (i === 7) continue;
  console.log(i);
}

/* 11. Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია: */

let array7 = [32, 14, null, "40", 50];

for (let i of array7) {
  if (typeof i === "number" && i % 5 === 0) console.log(i);
}

//  12. Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

// for..of

let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (let i of array8) {
  for (let num of i) {
    if (num > 0) {
      console.log(num);
    }
  }
}

// forEach

let array9 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

array9.forEach((i) => {
  i.forEach((num) => {
    if (num > 0) {
      console.log(num);
    }
  });
});
