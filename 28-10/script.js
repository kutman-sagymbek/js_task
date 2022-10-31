/****** Task-1 *******/

let x = prompt('Enter a number');
if (x === '7') {
    alert('Right')
    if (x !== '7') {
        alert('Wrong');
    }
} else if (x === null) {
    alert('Cancelled')
}


/****** Task-2 *******/

let a = 1;
let b = 3;
let option1 = a + b;
let option2 = a - b;
if (a <= 1 && b >= 3) {
    alert(option1);
} else {
    alert(option2);
};


/****** Task-3 *******/

let time = prompt('Enter a number');
if (time >= 0 && time <= 14){
    alert('first quarter');
} else if (time >= 15 && time <= 29){
    alert('second quarter');
} else if (time >= 30 && time <= 44){
    alert('third quarter');
} else if (time >= 45 && time <= 59){
    alert('forth quarter');
} else {
    alert('value is out of range 0 to 59');
}



