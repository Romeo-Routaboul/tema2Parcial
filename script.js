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

function mostrarImagenes(array){
  let i = 0
  for (let dado of array){
    imagen = "dados/"+ dado +".png"
    dado = document.querySelector("#dado-" + i)
    dado.src = imagen
    i ++
  }  
}

let boton = document.querySelector("#mesa button")
boton.addEventListener("click", () => {
  let tirada = lanzarCincoDados();
  mostrarImagenes(tirada)
})





// Al hacer clic en el botón que dice “Lanzar dados”:

//   1 Invocar a la función lanzarCincoDados(). Esta función ya está desarrollada en el archivo, y retorna un array de cinco números 
//      aleatorios del 1 al 6, que simulan el lanzamiento de cinco dados. Estos números siempre se retornan en orden, de menor a mayor.
//   2 Con estos valores, mostrar las imágenes correspondientes de los cinco dados. Los archivos con las imágenes necesarias están en la carpeta dados. Tener en cuenta que el src de la imagen tendrá la forma "dados/X.png", donde X es el número que corresponde.
//   3  Calcular el puntaje obtenido, del siguiente modo:
//         Si hay 3 o más dados que son iguales, el puntaje es igual a 100 veces el valor repetido. Por ejemplo, si el número 5 aparece repetido 3 ó más veces, el puntaje será de 500 puntos.
//         De lo contrario, el puntaje es la suma de los cinco dados.
//    4 La continuidad del juego depende de la siguiente condición:
//         Si el lanzamiento actual es menor que el anterior, el jugador pierde:
//             El que hasta ahora figuraba en la página como resultado actual, pasa a figurar como resultado anterior.
//             El resultado actual será igual a 0, sin importar lo obtenido en el punto 3.
//             El botón debe quedar deshabilitado.
//             El texto del botón debe decir “No hay más lanzamientos”
//         Si el lanzamiento actual es mayor o igual que el anterior:
//             El que hasta ahora figuraba en la página como resultado actual, pasa a figurar como resultado anterior.
//             El nuevo resultado actual es el puntaje obtenido en el punto 3.
//             El texto del botón debe decir “Lanzar nuevamente”.
