const numero = parseFloat(prompt("Digite um número:").replace(',', '.'));
if(!isNaN(numero)) {
    if(numero > 0) {
        alert(`${numero} é positivo`);
    } else if(numero < 0) {
        alert(`${numero} é negativo`);
    } else {
        alert("O número é zero (neutro)");
    }
} else {
    alert("Por favor, digite um número válido!");
}