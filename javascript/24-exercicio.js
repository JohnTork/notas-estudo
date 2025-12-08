const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
if(!isNaN(numero)) {
    let resultado = `Tabuada do ${numero}:\n\n`;
    for(let i = 0; i <= 10; i++) {
        resultado += `${numero} × ${i} = ${numero * i}\n`;
    }
    alert(resultado);
} else {
    alert("Por favor, digite um número válido!");
}