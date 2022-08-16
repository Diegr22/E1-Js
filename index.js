class Pizzas{
    constructor(id, nombre,ingredientes,precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        
    } 

}
const pizzas = [
    new Pizzas (0,'Napolitana',['Tomate','Queso','Aceitunas','Oregano'],1200),
    new Pizzas (1,'Muzza',['Muzzarella','Aceitunas','Oregano'],1100),
    new Pizzas (2,'Calabresa',['Salame','Queso','Aceitunas Negras','Oregano'],1300),
    new Pizzas (3,'Roquefort',['Roquefort','Queso','Aceitunas Negras','Oregano'],1500),
    new Pizzas (4,'Especial',['Jamon cocido','Queso','Aceitunas','Oregano','Morron'],599),
    new Pizzas (5,'De la Casa',['Tomate','Queso','Aceitunas Negras','Oregano','Huevo Frito','Papas Fritas'],1000),

]
function impares() {
    let pizzasimpares = [ ];
    for (let i = 0; i<pizzasimpares.length; i++) {  
        if ((pizzasimpares[i].id %2) !==0){
            pizzasimpares.push(""+ pizzasimpares[i].nombre);
        }
        console.log("Las Pizzas con Id impar son las siguientes:"+ pizzasimpares)
    }
}
impares()
function barata() {
    for (i=0; i<pizzas.length; i++) {
        if (pizzas[i].precio<600){
            console.log(`La Pizza "${pizzas[i].nombre}" es la mas barata. Su Valor es de: $${pizzas[i].precio}`)
        }
    }
}
barata ()
function nombreyvalor() {
    for (i=0; i<pizzas.length; i++) {
        console.log(`La Pizza "${pizzas[i].nombre}" tiene un valor de: $${pizzas[i].precio}`)
    }

}
nombreyvalor()
 function ingredientes(){
    for (i=0; i<pizzas.length; i++) {
        console.log(`La Pizza "${pizzas[i].nombre}" tiene los siguientes ingredientes: ${pizzas[i].ingredientes}`)

    }
 }
 ingredientes()