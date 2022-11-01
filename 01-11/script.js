let numbers = [1, 2, 5, 6, 88, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);



/******* Task-2 *******/

let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
}

console.log(sum);

/******* Task-3 *******/

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let newNumbers = []
for( let i = 0; i < numbers.length; i++){
    if ((numbers[i]%2) === 0) {
        console.log(numbers[i]);
    }
    newNumbers.push(i);
}


















