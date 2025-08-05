document.getElementById('btnColor').addEventListener('click',()=>{
    //document.getElementById('cuadro').innerHTML+= `<h1>Hi</h1>`
    const cuadro = document.getElementById('cuadro');
    cuadro.classList.toggle('cambio');
});

//Elementos generales
cuadro.addEventListener('click',()=>{
    alert('Le diste click al cuadro!');
});

//mouseover y mouseout
//hover
cuadro.addEventListener('mouseover',()=>{
    cuadro.style.border='3px solid black';
});

cuadro.addEventListener('mouseout',()=>{
    cuadro.style.border='none';
});

document.addEventListener('keydown',(e)=>{
    console.log(`Presionaste: ${e.key}`)
});


// eventos en los formularios
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',(e)=>{
    e.preventDefault(); //evitar que haya recarga de la página
    const nombre = document.getElementById('nombre').value;
    alert(`Hola ${nombre}!!!`)
});

//inputs y eventos de entrada
const inoputGeneral = document.getElementById('inputTexto');
const resultado = document.getElementById('resultado');

inoputGeneral.addEventListener('input', function(){
    resultado.textContent = inoputGeneral.value;
});