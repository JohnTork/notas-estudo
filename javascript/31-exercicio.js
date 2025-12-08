const opcao = parseInt(prompt("Digite:\n1 - Álcool\n2 - Gasolina\n3 - Diesel"));
let combustivel;
switch(opcao) {
    case 1: combustivel = "Álcool"; break;
    case 2: combustivel = "Gasolina"; break;
    case 3: combustivel = "Diesel"; break;
    default: combustivel = "Opção inválida";
}
alert(`Combustível selecionado: ${combustivel}`);