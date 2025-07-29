
//Consumo de API mediante XMLHTTPRequest

//moduralizar la api
function buscarPersonaje() {
    const nombre = prompt("ingresar un nombre para buscar el personaje");
    const xhr = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character?name=${nombre}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                alert("The character is: \n"+"Name: "+data["results"][0]["name"]+"\nStatus: "+data["results"][0]["status"]+"\nSpecie: "+data["results"][0]["specie"]);
            } catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
}

buscarPersonaje();