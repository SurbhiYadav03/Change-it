const btn = document.getElementById('bt');
const body = document.querySelector('body');

body.style.backgroundColor = 'black';
const color = [ 'sky-blue' ,'gold','brown','grey','light-green','yellow','orange','pink'];

function changeColor()
{
    const index = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[index];
  
}

btn.addEventListener('click', changeColor);
