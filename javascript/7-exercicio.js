const km = parseFloat(prompt("Digite a distância em quilômetros:").replace(',', '.'));
if(!isNaN(km) && km >= 0) {
    const metros = km * 1000;
    const cm = km * 100000;
    alert(`${km} km = ${metros} m = ${cm} cm`);
} else {
    alert("Por favor, digite um número válido e não negativo!");
}