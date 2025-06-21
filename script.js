let button = document.querySelector('button');
button.addEventListener('click',convert);
const newvar = document.createElement('h1');
newvar.id = 'result'
document.getElementById('main').appendChild(newvar)
function convert(){
    let Celsius = Number(document.getElementById('input').value);
    let Fahrenheit = (Celsius * 9/5) + 32;
    document.getElementById('result').innerHTML = Fahrenheit
};



