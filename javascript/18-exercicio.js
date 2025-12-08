const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro (R$):").replace(',', '.'));
if(!isNaN(custoFabrica) && custoFabrica >= 0) {
    const imposto = custoFabrica * 0.45;
    const lucroDistribuidor = custoFabrica * 0.28;
    const precoFinal = custoFabrica + imposto + lucroDistribuidor;
    alert(`CÁLCULO DO PREÇO FINAL\n\nCusto de fábrica: R$ ${custoFabrica.toFixed(2)}\nImpostos (45%): R$ ${imposto.toFixed(2)}\nLucro distribuidor (28%): R$ ${lucroDistribuidor.toFixed(2)}\n\nPreço final: R$ ${precoFinal.toFixed(2)}`);
} else {
    alert("Por favor, digite um valor válido!");
}