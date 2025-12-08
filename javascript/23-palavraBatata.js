let entrada;
do {
    entrada = prompt("Digite 1 para ver 'Batata' ou outro número para sair:");
    if(entrada === "1") {
        alert("Batata");
    }
} while(entrada === "1");
alert("Programa encerrado!");