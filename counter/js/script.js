const value = document.getElementById('value');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

const counter = () =>{
    let counter = 0;
    value.textContent = counter;
    plus.addEventListener('click', () =>{
        counter++;
        value.textContent = counter;
    })
    minus.addEventListener('click', () =>{
        counter--;
        value.textContent = counter;

    })
    reset.addEventListener('click', () =>{
        counter = 0;
        value.textContent = counter;
    })
}   
counter()