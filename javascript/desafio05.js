let negativos = 0;
let positivos = 0;
let pares = 0;
let multiplos7 = 0;

for(let i = 1; i <= 10; i++) {
    const numero = parseFloat(prompt(`Digite o ${i}º número:`).replace(',', '.'));
    if(!isNaN(numero)) {
        if(numero < 0) negativos++;
        if(numero > 0) positivos++;
        if(Math.floor(numero) % 2 === 0) pares++;
        if(Math.floor(numero) % 7 === 0) multiplos7++;
    } else {
        alert("Número inválido! Digite novamente.");
        i--;
    }
}

alert(`ANÁLISE DOS 10 NÚMEROS:\n\nNegativos: ${negativos}\nPositivos: ${positivos}\nPares: ${pares}\nMúltiplos de 7: ${multiplos7}`);