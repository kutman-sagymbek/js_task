/******* Task-1 ********/

function minNumber(a, b) {
    if (a < b){
        return a;
    } else {
        return b;
    }
}

let result = minNumber(90, 75);

function secondNumber(result){
    console.log(result);
}
secondNumber(result);


/******* Task-2 ********/

function hello(a) {
    alert(a);
}
hello('hello');

/******* Task-3 ********/

function number(a){
    return a * a * a;
}

let result = number(30);
alert(result);


/******* Task-4 ********/

function getName(name, myGuest){
    if(name !== undefined) {
        return name;
    } else {
        return myGuest;
    }
}
let name = getName('Hi, Asan', 'Hi, guest');
alert(name);
