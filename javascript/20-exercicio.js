const ipi = parseFloat(prompt("Digite o percentual do IPI (%):").replace(',', '.'));
const codigo1 = prompt("Digite o código da peça 1:");
const valor1 = parseFloat(prompt("Digite o valor unitário da peça 1 (R$):").replace(',', '.'));
const quant1 = parseInt(prompt("Digite a quantidade da peça 1:"));
const codigo2 = prompt("Digite o código da peça 2:");
const valor2 = parseFloat(prompt("Digite o valor unitário da peça 2 (R$):").replace(',', '.'));
const quant2 = parseInt(prompt("Digite a quantidade da peça 2:"));

if(!isNaN(ipi) && !isNaN(valor1) && !isNaN(valor2) && !isNaN(quant1) && !isNaN(quant2) && 
   valor1 >= 0 && valor2 >= 0 && quant1 >= 0 && quant2 >= 0) {
    
    const subtotal1 = valor1 * quant1;
    const subtotal2 = valor2 * quant2;
    const totalSemIPI = subtotal1 + subtotal2;
    const totalComIPI = totalSemIPI * (1 + ipi / 100);
    const valorIPI = totalComIPI - totalSemIPI;
    
    alert(`NOTA FISCAL COM IPI\n\nIPI: ${ipi}%\n\nPEÇA 1 (${codigo1}):\nValor: R$ ${valor1.toFixed(2)}\nQuant: ${quant1}\nSubtotal: R$ ${subtotal1.toFixed(2)}\n\nPEÇA 2 (${codigo2}):\nValor: R$ ${valor2.toFixed(2)}\nQuant: ${quant2}\nSubtotal: R$ ${subtotal2.toFixed(2)}\n\nSubtotal: R$ ${totalSemIPI.toFixed(2)}\nIPI: R$ ${valorIPI.toFixed(2)}\nTOTAL: R$ ${totalComIPI.toFixed(2)}`);
} else {
    alert("Por favor, digite valores válidos!");
}