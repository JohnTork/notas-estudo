const capital = parseFloat(prompt("Digite o capital inicial (R$):").replace(',', '.'));
const taxa = parseFloat(prompt("Digite a taxa de juros (ex: 0.05 para 5%):").replace(',', '.'));
const tempo = parseFloat(prompt("Digite o tempo em dias:").replace(',', '.'));
if(!isNaN(capital) && !isNaN(taxa) && !isNaN(tempo) && capital >= 0 && tempo >= 0) {
    const juros = capital * taxa * (tempo / 365); // Juros simples considerando ano comercial
    const montante = capital + juros;
    alert(`CÁLCULO DE JUROS SIMPLES\n\nCapital: R$ ${capital.toFixed(2)}\nTaxa: ${(taxa*100).toFixed(2)}% a.a.\nTempo: ${tempo} dias\n\nJuros: R$ ${juros.toFixed(2)}\nMontante: R$ ${montante.toFixed(2)}`);
} else {
    alert("Por favor, digite valores válidos!");
}