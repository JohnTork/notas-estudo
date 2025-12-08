let negativos = 0;
for(let i = 1; i <= 10; i++) {
    const numero = parseFloat(prompt(`Digite o ${i}º número:`).replace(',', '.'));
    if(!isNaN(numero) && numero < 0) {
        negativos++;
    }
}
alert(`Dos 10 números digitados, ${negativos} são negativos.`);