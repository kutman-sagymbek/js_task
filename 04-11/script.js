/****** Task-1 *******/

// const numbers = [-5,  10,  5, 55,  -1, 22,  -4 , 36, -45];
// const negative_numbers = numbers.filter((item) => {
//    return item < 0;
// })

// console.log(negative_numbers);


/****** Task-2 *******/

let number = prompt('Enter a number', '1');
if (number === 0){
    alert('You are right');
} else if(number > 0){
    alert('+');
} else if (number <0){
    alert('-');
}





// const arr = [-5, 3];
// const result = arr.reduce((sum, item) => {
//     if (sum > item){
//         return 1;
//     } else if (sum < 0){
//        return -1;
//     } else {
//         return 0;
//     }
// })
//
// console.log(result);

function number(max , min){
    if (max > min){
        return 1;
    } else if (max < min){
        return -1;
    } else {
        return 0;
    }
}
console.log(number(3,5));

// function func(a, b){
//     return (a === b) ? 0 : (a > b) ? 1 : -1;
// }
// const tern = func(5, 3);
// console.log(tern);

