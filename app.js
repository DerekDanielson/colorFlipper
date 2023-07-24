const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.getElementById('color');
const btn = document.getElementById('btn');

// Generate random hex and apply color
btn.addEventListener('click', changeColor);

// Get random number
function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}

// Change color function
function changeColor(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        hexColor += hex[randomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}