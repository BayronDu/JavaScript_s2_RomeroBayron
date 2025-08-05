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