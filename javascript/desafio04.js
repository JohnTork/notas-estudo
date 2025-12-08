const ano = parseInt(prompt("Digite um ano:"));
if(!isNaN(ano)) {
    const bissexto = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
    alert(`${ano} ${bissexto ? 'É' : 'NÃO É'} um ano bissexto`);
} else {
    alert("Por favor, digite um ano válido!");
}