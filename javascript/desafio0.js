const anos = parseInt(prompt("Digite sua idade em anos:"));
if(!isNaN(anos) && anos >= 0) {
    const meses = anos * 12;
    const dias = anos * 365;
    alert(`${anos} ano${anos !== 1 ? 's' : ''} = ${meses} meses = ${dias} dias`);
} else {
    alert("Por favor, digite uma idade válida (número inteiro positivo)!");
}