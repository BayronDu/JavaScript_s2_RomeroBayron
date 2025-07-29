
function buscarPersonaje() {
    const nombre = prompt("ingresar un nombre para buscar el personaje");
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.py4e.com/api/people/?:id=${nombre}    `;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log(data["results"][nombre]["name"]);
            } catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
}

buscarPersonaje();