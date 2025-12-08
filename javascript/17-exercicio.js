const SM = 1627.00; // Salário Mínimo 2025
const cpf = prompt("Digite o CPF (somente números):");
const dependentes = parseInt(prompt("Digite o número de dependentes:"));
const renda = parseFloat(prompt("Digite a renda mensal (R$):").replace(',', '.'));
if(!isNaN(dependentes) && !isNaN(renda) && dependentes >= 0 && renda >= 0) {
    const descontoDependentes = dependentes * (SM * 0.05);
    const rendaLiquida = Math.max(0, renda - descontoDependentes);
    let aliquota, imposto;
    if(rendaLiquida <= 2 * SM) {
        aliquota = 0; imposto = 0;
    } else if(rendaLiquida <= 3 * SM) {
        aliquota = 0.05; imposto = rendaLiquida * aliquota;
    } else if(rendaLiquida <= 5 * SM) {
        aliquota = 0.10; imposto = rendaLiquida * aliquota;
    } else if(rendaLiquida <= 7 * SM) {
        aliquota = 0.15; imposto = rendaLiquida * aliquota;
    } else {
        aliquota = 0.20; imposto = rendaLiquida * aliquota;
    }
    
    alert(`CÁLCULO IR - CPF: ${cpf}\n\nRenda bruta: R$ ${renda.toFixed(2)}\nDependentes: ${dependentes} (desconto: R$ ${descontoDependentes.toFixed(2)})\nRenda líquida: R$ ${rendaLiquida.toFixed(2)}\n\nFaixa: ${(rendaLiquida/SM).toFixed(1)} SM\nAlíquota: ${(aliquota*100)}%\nImposto devido: R$ ${imposto.toFixed(2)}`);
} else {
    alert("Dados inválidos! Verifique os valores digitados.");
}