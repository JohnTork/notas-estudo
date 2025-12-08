let valorMilhas;
do {
    const entrada = prompt("Digite a distância em milhas (ex: 10 ou 5.5):");
    valorMilhas = parseFloat(entrada.replace(',', '.'));
    if(isNaN(valorMilhas) || valorMilhas < 0) {
        alert("Erro: Digite um número positivo válido!");
    }
} while(isNaN(valorMilhas) || valorMilhas < 0);

const quilometros = valorMilhas * 1.60934;
alert(` CONVERSÃO DE DISTÂNCIA\n\n${valorMilhas} milha${valorMilhas !== 1 ? 's' : ''}\n=\n${quilometros.toFixed(4)} quilômetros\n\nFator: 1 milha = 1.60934 km`);