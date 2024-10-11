//1: Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão.

let numeros = [];

while(true) {
    let numero = parseFloat(prompt('Digite um número'));

    if (isNaN(numero)){
        break;
    }

    if (!numeros.includes(numero)){
        numeros.push(numero);
        console.log(`lista atualizada: ${numeros}`);
    } else {
        console.log(`O número ${numero} já está na lista`);
    }
}
console.log(numeros)