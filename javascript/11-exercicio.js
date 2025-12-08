const num1 = parseFloat(prompt("Digite o primeiro número:").replace(',', '.'));
const num2 = parseFloat(prompt("Digite o segundo número:").replace(',', '.'));
const operacao = prompt("Digite a operação (+, -, *, /):").trim();
if(!isNaN(num1) && !isNaN(num2) && '+-*/'.includes(operacao)) {
    let resultado;
    switch(operacao) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': 
            if(num2 === 0) {
                alert("Erro: Divisão por zero!");
                break;
            }
            resultado = num1 / num2; 
            break;
    }
    if(resultado !== undefined) {
        alert(`${num1} ${operacao} ${num2} = ${resultado}`);
    }
} else {
    alert("Dados inválidos! Digite números e uma operação válida (+, -, *, /).");
}