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
