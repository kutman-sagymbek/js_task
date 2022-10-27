/**** Task-1 *****/

let capital_of_KR = prompt('Do you know the capital city of KR?', 'Capital city');
if(capital_of_KR === 'Bishkek'){
    alert('You are right');
} else{
    alert('Do not you know the capital of KR?');
}

console.log(capital_of_KR);


/******Task-2*****/

let someone = prompt('Who is there?', 'Name');
if (someone === 'admin'){
    let password = prompt('Password', 1234);
    if (password === '5555'){
        alert('Welcome');
    } else if (password === null){
        alert('Cancelled');
    } else if(password){
        alert('Incorrect password');
    } else {
        alert('Enter a password');
    }
} else if(someone === null){
    alert('Cancelled');
} else {
    alert('I do not know you');
}



