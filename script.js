// Esta función retorna 5 números del 1 al 6, generados al azar, para
// representar el lanzamiento de 5 dados. Los números vienen ordenados de menor
// a mayor.
//
// Esta función ya está hecha, solamente hay que invocarla. No modificar.
function lanzarCincoDados() {
  const dados = [];

  for (let i = 0; i < 5; i++) {
    // Genera un número entero aleatorio entre 1 y 6
    const dado = Math.floor(Math.random() * 6) + 1;
    dados.push(dado);
  }

  console.log(dados.sort((a, b) => a - b));
  // Retornamos los cinco valores aleatorios, ordenados de menor a mayor.
  return dados.sort((a, b) => a - b);
}

// Construir aquí la solución al examen

// esta funcion mostrará las imagenes que coincidan con el dado tirado
function mostrarImagenes(array){
  let i = 0                                     // creamos el contador
  for (let dado of array){                      // iteramos el array con la tirada de dados
    imagen = "dados/"+ dado +".png"             // creamos el texto que hará referencia a la imagen
    dado = document.querySelector("#dado-" + i) // seleccionamos la etiqueta html correspoondiente
    dado.src = imagen                           // insertamos el texto html que creamos en imagen en dado.src
    i ++                                        // sumamos +1 al contador
  }  
}

// esta funcion detectara si hay tres dados repetidos
function hayTresRepetidos(array){ //recibe el array con la tirada de dados
  for (let i = 0; i <= 3 ; i++){  // creamos el iterador
    if(array[i] == array[i+2]){   // si el dado iterado es igual al dado que está dos posiciones adelante quiere decir que está repetido 3 veces
      return true                 // retornamos true
    }}
  return false                    // de lo contrario retornamos false
}

// esta funcion recibe el array de dados y calcula su puntaje con las pautas de la consigna
function calcularPuntaje (array){         // recibimos el array con la tirada
  suma = 0
  if (hayTresRepetidos(array) == true){   // si la funcion devuelve true
    suma = array[2] * 100                 // la suma sera el numero del medio multiplicado por 100
  } else {                                // si no hay 3 repetidos
    for (let dado of array){              // itermaos la lista con un for of
      suma = suma + dado                  // y realizamos una suma simple
    }}
  return suma                             // devolvemos el resultados
}

// esta funcion recibe el puntaje y ejecuta la logica del juego
function logicaJuego(int){
  let puntajeAnterior = document.querySelector("#anterior"); 
  let puntajeActual = document.querySelector("#actual");

  puntajeAnterior.textContent = puntajeActual.textContent // almacenamos el puntaje actual en el anterior (inicialmente 0)
  puntajeActual.textContent = int                         // despues llenamos puntaje actual con el parametro

  if (parseInt(puntajeAnterior.textContent) >= parseInt(puntajeActual.textContent)){ // si el anterior es igual o mayor que el actual
    boton.disabled = true                 // desactivamos el boton
    boton.textContent = "Perdiste :("     // cambiamos el texto
    puntajeActual.textContent = 0         // y volvemos el puntaje actual a 0.
  } else {                                // si lo anterior no pasa
    boton.textContent = "Lanzar de nuevo" // solo cambiamos el texto
  }}

let boton = document.querySelector("#mesa button") // almacenamos el boton en la variable

boton.addEventListener("click", () => { //creamos el listener que se activará con el click en el boton
  let tirada = lanzarCincoDados();      // almacenamos en tirada el resultado de la fucnion lanzarCincoDados
  mostrarImagenes(tirada)               // ejecutamos la funcion mostrarImagenes con el array de dados de parametro
  puntaje = calcularPuntaje(tirada)     // almacenamos en puntaje el resultado de la funcion calcularPuntaje
  logicaJuego(puntaje)                  // y por ultimo ejecutamos la funcion que ejecuta la logica del juego con puntaje como parametro
})
