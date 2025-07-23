listaIngredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];


listaCategorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];

listaHamburguesas = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];

listaChefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]
alert("¡¡Bienvenido al programa!!");

let ejecucion = true;
while (ejecucion == true) {
    let menu = Number(prompt("!!Menú Principal¡¡\n Por favor elige una de las siguientes opciones: \n\n1. Ingredientes.\n2. Categorías.\n3. Hamburguesas.\n4. Chefs."));

    if (menu == 1) {
        let ingrediente = Number(prompt("Por favor elige una de las siguientes opciones: \n\n1. Agregar nuevo ingrediente.\n2. Mostrar los ingredientes.\n3. Actualizar un ingrediente.\n4. Eliminar un ingrediente.\n5. Volver al menú principal."));
        
        
        if (ingrediente == 1) {
            let nombre = prompt("Por favor digite el nombre del ingrediente");
            let descripcion = prompt("Por favor digite una descripción del ingrediente");
            let precio = Number(prompt("Por favor digite el precio del ingrediente: "));
            let stock = Number(prompt("Por favor digite la cantidad de stock: "));
            let dirIngredientes = {
                "Nombre": nombre,
                "Descripcion": descripcion,
                "Precio": precio,
                "stock": stock
            }
            listaIngredientes.push(dirIngredientes);
        } else if (ingrediente == 2) {
            alert("!!Lista de ingredientes¡¡");
            for (let i = 0; i <listaIngredientes.length; i++) {
                alert("ID "+(i+1)+": "+Object.values(listaIngredientes[i]));
              }
        } else if(ingrediente == 3){
            alert("!!Actualizar un ingrediente¡¡");
            alert("Por favor")
        }


    } else if (menu == 2) {
        let categoria = Number(prompt("Por favor elige una de las siguientes opciones: \n\n1. Agregar nueva categoría.\n2. Mostrar las categorías existentes.\n3. Actualizar una categoría.\n4. Eliminar una categoría.\n5. Volver al menú principal."));
        menu = 0;
    }
    else if (menu == 3) {
        let hamburguesas = Number(prompt("Por favor elige una de las siguientes opciones: \n\n1. Agregar nueva hamburguesa.\n2. Mostrar las hamburguesas existentes.\n3. Actualizar una hamburguesa.\n4. Eliminar una hamburguesa.\n5. Volver al menú principal."));
    }
    else if (menu == 4) {
        let chefs = Number(prompt("Por favor elige una de las siguientes opciones: \n\n1. Agregar nuevo chef.\n2. Mostrar los chefs.\n3. Actualizar un chef.\n4. Eliminar un chef.\n5. Volver al menú principal."));
    }
    else if (menu == 0) {
        ejecucion = false;
    }
}



