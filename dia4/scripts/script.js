listaIngredientes = [
    {
        "ID": 1,
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "ID": 2,
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "ID": 3,
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];


listaCategorias = [
    {
        "ID": 1,
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "ID": 2,
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "ID": 3,
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];

listaHamburguesas = [
    {
        "ID": 1,
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "ID": 2,
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "ID": 3,
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];

listaChefs = [
    {
        "ID": 1,
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "ID": 2,
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "ID": 3,
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
            id = 3;
            let nombre = prompt("Por favor digite el nombre del ingrediente");
            let descripcion = prompt("Por favor digite una descripción del ingrediente");
            let precio = Number(prompt("Por favor digite el precio del ingrediente: "));
            let stock = Number(prompt("Por favor digite la cantidad de stock: "));
            let dirIngredientes = {
                "ID": id + 1,
                "Nombre": nombre,
                "Descripcion": descripcion,
                "Precio": precio,
                "stock": stock
            }
            listaIngredientes.push(dirIngredientes);
        } else if (ingrediente == 2) {
            alert("!!Lista de ingredientes¡¡");
            for (let i = 0; i < listaIngredientes.length; i++) {
                alert("INGREDIENTE " + (i + 1) + ": \n" + Object.entries(listaIngredientes[i]));
            }
        } else if (ingrediente == 3) {
            alert("!!Actualizar un ingrediente¡¡");
            let upDt = Number(prompt("Por favor digita el Id del ingrediente que deseas actualizar"));
            let nombre = prompt("Por favor digite el nombre del ingrediente");
            let descripcion = prompt("Por favor digite una descripción del ingrediente");
            let precio = Number(prompt("Por favor digite el precio del ingrediente: "));
            let stock = Number(prompt("Por favor digite la cantidad de stock: "));
            let dirIngredientes = {
                "ID": upDt,
                "Nombre": nombre,
                "Descripcion": descripcion,
                "Precio": precio,
                "stock": stock
            }

            listaIngredientes[upDt - 1] = dirIngredientes;
        } else if (ingrediente == 4) {
                alert("!!ELIMINAR INGREDIENTE¡¡");
                let eliminar = Number(prompt("Por favor digite el ID del elemento que desea eliminar"));
                
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



