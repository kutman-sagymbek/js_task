/******* Task-1 *********/


const van = document.getElementById('van-gogh');
const showMessage = () => {
    alert('The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh.');
}
van.onclick = showMessage;


const malevich = document.getElementById('malevich');
const showMessage_2 = () => {
    alert('Black Square is an iconic painting by Kazimir Malevich.');
}
malevich.onclick = showMessage_2;


const pikasso = document.getElementById('pikasso');
const showMessage_3 = () => {
    alert('The Dream is a 1932 oil on canvas painting by Pablo Picasso');
}
pikasso.onclick = showMessage_3;


const frida = document.getElementById('frida-kahlo');
const showMessage_4 = () => {
    alert('Self-Portrait with Thorn Necklace and Hummingbird is a 1940 self-portrait by Mexican painter Frida Kahlo');
}
frida.onclick = showMessage_4;


/******* Task-2 *********/

const frida_2 = document.getElementById('frida_2');
const message_1 = () => {
    alert('https://www.wikiart.org/ru/frida-kalo');
}
frida_2.onclick = message_1;


const van_2 = document.getElementById('van_2');
const message_2 = () => {
    alert('https://www.wikiart.org');
}
van_2.onclick = message_2;


const malevich_2 = document.getElementById('malevich_2');
const message_3 = () => {
    alert('https://www.wikiart.org');
}
malevich_2.onclick = message_3;


const pikasso_2 = document.getElementById('pikasso_2');
const message_4 = () => {
    alert('https://www.wikiart.org');
}
pikasso_2.onclick = message_4;



/******* Task-3 *********/

let array = ['Malevich', 'Pikasso', 'Van Gogh'];

function new_func() {
    let united_strings = '';
    for (let i = 0; i < arguments.length; i++) {
        united_strings += arguments[i];
    }
    return united_strings;
}
console.log(new_func(array));













