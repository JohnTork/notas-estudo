const quantidade = parseInt(prompt("Quantas pessoas serão cadastradas?"));
if(!isNaN(quantidade) && quantidade > 0) {
    let somaAlturas = 0;
    for(let i = 1; i <= quantidade; i++) {
        const altura = parseFloat(prompt(`Digite a altura da pessoa ${i} (metros):`).replace(',', '.'));
        if(!isNaN(altura) && altura > 0) {
            somaAlturas += altura;
        } else {
            alert("Altura inválida! Digite novamente.");
            i--; // Volta uma iteração
        }
    }
    const media = somaAlturas / quantidade;
    alert(`RESULTADO:\nTotal de pessoas: ${quantidade}\nSoma das alturas: ${somaAlturas.toFixed(2)}m\nMédia das alturas: ${media.toFixed(2)}m`);
} else {
    alert("Por favor, digite um número válido de pessoas!");
}