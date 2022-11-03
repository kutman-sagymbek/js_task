/******* Task-1 ********/

// const numbers = [1,2,3];
// const doubleNumbers = numbers.map(item => item * 2);
// console.log(doubleNumbers);

/******* Task-2 ********/

function fill_array(value = 'a', size = 3) {
    let new_array = [];
    for (let i = 0; i < size; i++) {
        new_array.push(value);
    }
    return new_array;
}
let result = fill_array();
console.log(result);


/******* Task-3 ********/

// const justNumbers = [1,2,3,4,5];
// const reverseNumbers = justNumbers.reverse();
// console.log(reverseNumbers);