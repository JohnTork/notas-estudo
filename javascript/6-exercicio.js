let segundos;
do {
    const entrada = prompt("Digite a duração em segundos (ex: 3661):");
    segundos = parseInt(entrada);
    if(isNaN(segundos) || segundos < 0) {
        alert("Digite um número inteiro positivo!");
    }
} while(isNaN(segundos) || segundos < 0);

const h = Math.floor(segundos / 3600);
const m = Math.floor((segundos % 3600) / 60);
const s = segundos % 60;

alert(`CONVERSÃO TEMPORAL\n\nEntrada: ${segundos} segundos\n\nResultado:\n${h} hora${h !== 1 ? 's' : ''}\n${m} minuto${m !== 1 ? 's' : ''}\n${s} segundo${s !== 1 ? 's' : ''}\n\nFormato completo: ${h}:${m}:${s}`);