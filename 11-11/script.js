const images = document.querySelectorAll('#images-block img');
const button = document.getElementById('#btn');
string_array = [];

for (let i =0; i < images.length; i++){
    images[i].onclick = () => {
        if (images[i].alt){
            string_array.push(images[i].alt);
        } else {
            console.log('there is no any description');
        }
    }
}

button.onclick = () => {
    console.log(string_array);
}