let somaPesos = 0;
for(let i = 1; i <= 5; i++) {
    const peso = parseFloat(prompt(`Digite o peso da ${i}ª pessoa (kg):`).replace(',', '.'));
    if(!isNaN(peso) && peso > 0) {
        somaPesos += peso;
    } else {
        alert("Peso inválido! Digite um número positivo.");
        i--; // Repete esta iteração
    }
}
const media = somaPesos / 5;
alert(`A média dos 5 pesos é: ${media.toFixed(2)} kg`);