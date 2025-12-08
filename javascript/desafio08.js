const notas = [];
for(let i = 0; i < 5; i++) {
    const nota = parseFloat(prompt(`Digite a nota do aluno ${i+1}:`).replace(',', '.'));
    if(!isNaN(nota)) notas.push(nota);
}

const maior = Math.max(...notas);
const menor = Math.min(...notas);
const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
const posMaior = notas.indexOf(maior) + 1;
const posMenor = notas.indexOf(menor) + 1;

alert(`ANÁLISE DAS NOTAS:\n\nNotas: ${notas.join(', ')}\n\nMaior nota: ${maior} (Aluno ${posMaior})\nMenor nota: ${menor} (Aluno ${posMenor})\nMédia: ${media.toFixed(2)}`);