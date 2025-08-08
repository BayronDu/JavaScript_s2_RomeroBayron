const token = "9c8ece11ac7213ae313a73d70b8d69c1";



function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
    //const nombreUsar= prompt("Ingresar el nombre del personaje a buscar:");
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest();//La importaciÃ³n del XML
    const url = `https://superheroapi.com/api.php/${token}/search/${nombreUsar}`;//Acento Inverso ```
    xhr.open("GET", url, true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
               
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
            <img src="${daticos["results"][i]["image"]["url"]}" alt="imagen">
            <h3>${daticos["results"][i]["name"]}</h3>
            <p><strong>ID: </strong>${daticos["results"][i]["id"]}</p>
            <p><strong>Nombre Completo: </strong>${daticos["results"][i]["biography"]["full-name"]}</p>
            <p><strong>Genero: </strong>${daticos["results"][i]["appearance"]["race"]}</p>

            
            </div>`
                    }
                }

            }
            catch (err) {
                console.log(err.message); //Si algo malo pasa simplemente imprima el error
            }
        }
    };
    xhr.send();
}