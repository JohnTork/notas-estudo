const num1 = parseFloat(prompt("Digite o primeiro número:").replace(',', '.'));
const num2 = parseFloat(prompt("Digite o segundo número:").replace(',', '.'));
const num3 = parseFloat(prompt("Digite o terceiro número:").replace(',', '.'));
if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    const menor = Math.min(num1, num2, num3);
    alert(`Entre ${num1}, ${num2} e ${num3}\nO menor é: ${menor}`);
} else {
    alert("Por favor, digite três números válidos!");
}