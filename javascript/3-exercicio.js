let total = 0, contador = 0;
while(contador < 5) {
    const entrada = prompt(`Peso da pessoa ${contador+1} (kg):`);
    const peso = parseFloat(entrada.replace(',', '.'));
    if(!isNaN(peso) && peso > 0 && peso < 500) {
        total += peso;
        contador++;
    } else {
        alert(`Peso inválido! Deve ser entre 0.1 e 500 kg.`);
    }
}
alert(`RESULTADO:\nTotal: ${total.toFixed(2)} kg\nMédia: ${(total/5).toFixed(2)} kg`);