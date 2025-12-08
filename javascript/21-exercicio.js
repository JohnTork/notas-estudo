const perguntas = [
    "Trocou mensagens com a vítima? (sim/não)",
    "Esteve no local do crime? (sim/não)",
    "Mora perto da vítima? (sim/não)",
    "Devia dinheiro para a vítima? (sim/não)",
    "Trabalha ou já trabalhou com a vítima? (sim/não)",
    "Tinha relacionamento amoroso com a vítima? (sim/não)",
    "Ficou feliz com o que aconteceu? (sim/não)",
    "Possui arma de fogo? (sim/não)"
];

let respostasPositivas = 0;
let historico = "";

for(let i = 0; i < perguntas.length; i++) {
    let resposta;
    do {
        resposta = prompt(`Pergunta ${i+1}: ${perguntas[i]}`).toLowerCase().trim();
        if(resposta !== 'sim' && resposta !== 'não' && resposta !== 'nao') {
            alert("Responda apenas 'sim' ou 'não'!");
        }
    } while(resposta !== 'sim' && resposta !== 'não' && resposta !== 'nao');
    
    if(resposta === 'sim') {
        respostasPositivas++;
        historico += `✓ ${perguntas[i].split('?')[0]}\n`;
    } else {
        historico += `✗ ${perguntas[i].split('?')[0]}\n`;
    }
}

let classificacao;
if(respostasPositivas === 8) {
    classificacao = "ASSASSINO";
} else if(respostasPositivas >= 5 && respostasPositivas <= 7) {
    classificacao = "POSSÍVEL CRIMINOSO";
} else if(respostasPositivas === 4) {
    classificacao = "SUSPEITO";
} else {
    classificacao = "INOCENTE";
}

alert(`RESULTADO DO INTERROGATÓRIO\n\nRespostas positivas: ${respostasPositivas}/8\n\nHISTÓRICO:\n${historico}\nCLASSIFICAÇÃO: ${classificacao}`);