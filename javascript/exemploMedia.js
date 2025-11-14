// Entrada - Variavéis [] nota1
//Média aritimética de 3 notas, e menor 3 muito burro
//menor que 7 mais ou menos gênio, maior que 7 gênio
const nota1 = Number(prompt("Digite a 1ª nota"))
const nota2 = Number(prompt("Digite a 2ª nota"))
const nota3 = Number(prompt("Digite a 3ª nota"))

//Processamento
const soma = nota1 + nota2 + nota3
const media = soma / 3

// media menor que 3
// media menor que 7
// media maior que 7
if (media < 3) {
    alert("Média é insuficiente: " + media + " - muito burro")
} else if (media < 7) {
    alert("Média é insuficiente: " + media + " - mais ou menos gênio")
} else {
    alert("Média é insuficiente: " + media + " - gênio")
}