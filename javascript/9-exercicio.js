const nota1 = parseFloat(prompt("Digite a primeira nota:").replace(',', '.'));
const nota2 = parseFloat(prompt("Digite a segunda nota:").replace(',', '.'));
const nota3 = parseFloat(prompt("Digite a terceira nota:").replace(',', '.'));
if(!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    const media = (nota1 + nota2 + nota3) / 3;
    let situacao;
    if(media >= 7) situacao = "Aprovado";
    else if(media >= 5) situacao = "Recuperação";
    else situacao = "Reprovado";
    alert(`Média: ${media.toFixed(2)}\nSituação: ${situacao}`);
} else {
    alert("Por favor, digite três notas válidas!");
}