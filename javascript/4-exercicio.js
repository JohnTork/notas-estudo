let celsius;
do {
    const entrada = prompt("Digite a temperatura em Celsius:");
    celsius = parseFloat(entrada.replace(',', '.'));
    if(isNaN(celsius)) alert("Digite um número válido!");
} while(isNaN(celsius));

const fahrenheit = (9 * celsius + 160) / 5;
alert(`CONVERSÃO DE TEMPERATURA\n\n${celsius}° Celsius\n=\n${fahrenheit.toFixed(2)}° Fahrenheit\n\nFórmula: (9 × ${celsius} + 160) ÷ 5`);