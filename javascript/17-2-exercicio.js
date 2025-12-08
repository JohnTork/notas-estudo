const nota1 = parseFloat(prompt("Digite a primeira nota (peso 2):").replace(',', '.'));
const nota2 = parseFloat(prompt("Digite a segunda nota (peso 3):").replace(',', '.'));
const nota3 = parseFloat(prompt("Digite a terceira nota (peso 5):").replace(',', '.'));
if(!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    const mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
    alert(`Média ponderada: ${mediaPonderada.toFixed(2)}\n\nCálculo:\n(${nota1}×2 + ${nota2}×3 + ${nota3}×5) ÷ 10\n= (${nota1*2} + ${nota2*3} + ${nota3*5}) ÷ 10\n= ${mediaPonderada.toFixed(2)}`);
} else {
    alert("Por favor, digite três notas válidas!");
}