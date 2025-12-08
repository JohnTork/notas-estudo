const letra = prompt("Digite uma letra:").toLowerCase();
if(letra.length === 1 && letra.match(/[a-z]/)) {
    const vogais = "aeiou";
    const tipo = vogais.includes(letra) ? "vogal" : "consoante";
    alert(`"${letra}" é uma ${tipo}`);
} else {
    alert("Por favor, digite apenas uma letra do alfabeto!");
}