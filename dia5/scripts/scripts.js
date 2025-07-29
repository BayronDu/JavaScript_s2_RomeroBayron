const consulta = new XMLHttpRequest();
let inicio = Number(prompt("Por favor digite el ID del personaje a consultar"));
consulta.open('GET','https://rickandmortyapi.com/api/character/'+`${inicio}`, true);
consulta.onload = function () {
    if (consulta.status >= 200 && consulta.status < 300) {
        const data = JSON.parse(consulta.responseText);
        console.log(data);
        alert(Object.entries(data));
        
    } else {
        console.error('Error:', consulta.status, consulta.statusText);
    }
};
consulta.onerror = function(){
    console.error('Error de red');
};

consulta.send();