const valorPorHora = parseFloat(
    prompt("Digite o valor que você ganha por hora (R$):")
        .replace(',', '.')
        .trim()
);
const horasTrabalhadas = parseFloat(
    prompt("Digite a quantidade de horas trabalhadas no mês:")
        .replace(',', '.')
        .trim()
);
if (isNaN(valorPorHora) || isNaN(horasTrabalhadas)) {
    alert("Erro: Por favor, digite valores numéricos válidos!");
} else if (valorPorHora <= 0 || horasTrabalhadas <= 0) {
    alert("Erro: Os valores devem ser maiores que zero!");
} else {
        const salarioTotal = valorPorHora * horasTrabalhadas;
            const salarioFormatado = salarioTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
            alert(
        ` CÁLCULO DO SALÁRIO \n\n` +
        `Valor por hora: R$ ${valorPorHora.toFixed(2)}\n` +
        `Horas trabalhadas: ${horasTrabalhadas}\n` +
        `Salário do mês: ${salarioFormatado}`
    );
}