let pesoTotal = 0;
let pessoas = 0;
while(pesoTotal < 180) {
    const peso = parseFloat(prompt(`Peso atual: ${pesoTotal.toFixed(1)} kg\nPessoas: ${pessoas}\nDigite o peso da próxima pessoa (kg):`).replace(',', '.'));
    if(!isNaN(peso) && peso > 0) {
        pesoTotal += peso;
        pessoas++;
        if(pesoTotal >= 180) {
            alert(`ELEVADOR CHEIO!\nPeso máximo atingido: ${pesoTotal.toFixed(1)} kg\nTotal de pessoas: ${pessoas}\nCapacidade: 180 kg`);
        }
    } else {
        alert("Peso inválido! Digite um número positivo.");
    }
}