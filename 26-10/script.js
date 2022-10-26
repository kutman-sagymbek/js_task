/****** Task-1 *****/

let num1 = 10;
num1++;
num1++;
num1--;
console.log(num1);

/****** Task-2 *****/

let num2 = 47;
num2 += 7;
num2 -= 18;
num2 *= 10;
num2 /= 15;
alert(num2);

/****** Task-3 *****/

let num3 = 1;
num3 += 12;
num3 -= 14;
num3 *= 5;
num3 /= 7;
num3++;
num3--;
alert(num3);

/****** Task-4 *****/

let name_of_country = 'Kyrgyzstan';
let population = 7;
let area = 198000;
let result1 = population < 50 && area > 108000 && name_of_country === 'Kyrgyzstan';
console.log(result1);
// true + true + true = true;

let result2 = population > 50 && area > 108000 && name_of_country === 'Kyrgyzstan';
console.log(result2);
// false + true + true = false;

let result3 = population > 50 && area > 198000 && name_of_country === 'Canada';
console.log(result3);
// false + false + false = false;

let result4 = population === 7 && area === 198000 && name_of_country === 'Canada';
console.log(result4);
// true + true + false = false;

/****** Task-5 *****/

let result5 = population === 7 || area > 198000 || name_of_country === 'Canada';
console.log(result5);
// true + false + false = true;

let result6 = population > 9 || area === 198000 || name_of_country === 'Kyrgyzstan';
console.log(result6);
// false + true + true = true;

let result7 = population > 9 || area < 111000 || name_of_country === 'USA';
console.log(result7);
// false + false + false = false;

let result8 = population < 9 || area === 198000 || name_of_country === 'Kyrgyzstan';
console.log(result8);
// true + true + true = true;





















