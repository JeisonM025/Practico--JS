const h1= document.querySelector('h1');
const input1= document.querySelector('#calculo1');
const form= document.querySelector('#form');
const input2= document.querySelector('#calculo2');
const btn1= document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', btnOnClick);

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
  }
