const a = parseFloat(prompt("Digite o primeiro lado do triângulo:").replace(',', '.'));
const b = parseFloat(prompt("Digite o segundo lado do triângulo:").replace(',', '.'));
const c = parseFloat(prompt("Digite o terceiro lado do triângulo:").replace(',', '.'));
if(!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
    // Verifica condição de existência do triângulo
    if(a + b > c && a + c > b && b + c > a) {
        const base = parseFloat(prompt("Digite a base do triângulo:").replace(',', '.'));
        const altura = parseFloat(prompt("Digite a altura do triângulo:").replace(',', '.'));
        if(!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
            const area = (base * altura) / 2;
            alert(`Os lados ${a}, ${b}, ${c} formam um triângulo!\nÁrea = (${base} × ${altura}) ÷ 2 = ${area}`);
        } else {
            alert("Base ou altura inválidas!");
        }
    } else {
        alert(`Os lados ${a}, ${b}, ${c} NÃO formam um triângulo!\nCondição violada: A soma de dois lados deve ser maior que o terceiro.`);
    }
} else {
    alert("Por favor, digite três números positivos válidos!");
}