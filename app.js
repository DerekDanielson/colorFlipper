const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.getElementById('color');
const btn = document.getElementById('btn');

// Generate random hex and apply color
btn.addEventListener('click', changeColor());

