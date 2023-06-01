 /* Cojer numeros impares y logearlos */

function sacarLosImparees(numero) {
  for (let i = numero; i < numero + 50; i++) {
    let numero = 0  
    if (i%2 !== 0) {
        console.log(i);
    }
  }
}

/* Pedir numero */

let pedirNumero = parseInt(prompt("Escribe el numero que quieras."));

sacarLosImparees(pedirNumero);