
/* Bienvenida */

function saludar() {
  let nombre = prompt("Bienvenido a OpticalHouse ¿Cómo es tu nombre?");
  alert(`Hola ${nombre} por favor elija de las siguientes opciones`);
}
saludar();

/* FUNCION SEGUIR COMPRANDO*/

function compraralgomas(){
    let repregunta = prompt('¿Desea añadir al carrito algún otro producto? Escriba si o no')
    let eleccion = repregunta.toUpperCase()
    if(eleccion == 'SI'){
        compra()
    }else if(eleccion == 'NO'){
        alert(`Su carrito: \n ${JSON.stringify(carrito)}`)
        pagar()
        const total = totalCarrito()
        alert('Gracias por su compra')
    }else{
        alert('Ingrese una opción valida')
        compraralgomas()
    }
}


/*  OBJETO */
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

/* CARRITO */
const carrito = [];

/* FUNCION TOTAL CARRITO*/
function totalCarrito() {
  return carrito.reduce((acc, el) => acc + el.precio, 0);
}

/*  Objetos Rayban */
const rayban1 = new Producto("Rayban Negros", 200, 20);
const rayban2 = new Producto("Rayban Rojo", 300, 3);
const rayban3 = new Producto("Rayban Azul", 600, 3);



/* FUNCION PAGAR */

function pagar(){
    let pago = prompt('¿Con qué desea pagar? (transferencia/tarjeta)').toUpperCase()
    if(pago == 'TRANSFERENCIA'){
        alert('Al pagar con transferencia usted tiene un 15% de descuento')
        const total = totalCarrito()
        const precioConTransferencia = Math.round(total - (total*0.15))
        alert(`Su total es de: $${precioConTransferencia}`)
    }else if(pago == 'TARJETA'){
        alert('Al pagar con Tarjeta tiene un 30% de recargo')
        const total = totalCarrito()
        const precioConTarjeta = Math.round(total + (total*0.30))
        alert(`Su total es de: $${precioConTarjeta}`)
    }
}

/* FUNCION COMPRA*/

function compra() {
  let pregunta = prompt(
    "¿Qué te gustaría comprar? \n 1- Rayban Negros \n 2- Rayban Rojo \n 3- Rayban Azul"
  );
  let eleccion = pregunta.toUpperCase();
  if (eleccion == 1 || eleccion == "Rayban Negros") {
    carrito.push({ nombre: rayban1.nombre, precio: rayban1.precio });
    compraralgomas();
  } else if (eleccion == 2 || eleccion == "Rayban Rojo") {
    carrito.push({ nombre: rayban2.nombre, precio: rayban2.precio });
    compraralgomas();
  } else if (eleccion == 3 || eleccion == "Rayban Negros") {
    carrito.push({ nombre: rayban3.nombre, precio: rayban3.precio });
    compraralgomas();
  } else {
    alert("Ingrese un valor válido");
    compra();
  }
}
compra();






function filtrador () {
  const lentes = [
    {producto:'Rayban 1', color: 'Negro'},
    {producto:'Rayban 2', color: 'Rojo'},
    {producto:'Rayban 3', color: 'Azul'}
  ]

  let preguntarFiltrar = prompt("Puedes ver por consola los colores filtrados: \n 1. Negro \n 2. Rojo \n 2. Azul")

  switch (preguntarFiltrar) {
    case "1":
      const filtrado = lentes.filter(x => x.color == 'Negro')
      console.log(filtrado)
    break

    case "2":
      const filtrado2 = lentes.filter(x => x.color == 'Rojo')
      console.log(filtrado2)
    break  

    case "3":
      const filtrado3 = lentes.filter(x => x.color == 'Azul')
      console.log(filtrado3)
    break  

    default:
            alert("Seleccione una opcion valida")
            filtrador()  
  }

  
}

filtrador ()