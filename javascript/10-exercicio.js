const sexo = prompt("Digite o sexo (H para homem, M para mulher):").toUpperCase();
const altura = parseFloat(prompt("Digite a altura em metros (ex: 1.75):").replace(',', '.'));
if((sexo === 'H' || sexo === 'M') && !isNaN(altura) && altura > 0) {
    let pesoIdeal;
    if(sexo === 'H') {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }
    alert(`Sexo: ${sexo === 'H' ? 'Homem' : 'Mulher'}\nAltura: ${altura.toFixed(2)}m\nPeso ideal: ${pesoIdeal.toFixed(2)}kg`);
} else {
    alert("Dados inválidos! Digite H ou M para sexo e uma altura positiva.");
}