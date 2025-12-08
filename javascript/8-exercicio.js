const numero = parseInt(prompt("Digite um número inteiro para ver sua tabuada:"));
if(!isNaN(numero)) {
    let tabuada = `Tabuada do ${numero}:\n\n`;
    for(let i = 0; i <= 10; i++) {
        tabuada += `${numero} × ${i} = ${numero * i}\n`;
    }
    alert(tabuada);
} else {
    alert("Por favor, digite um número inteiro válido!");
}