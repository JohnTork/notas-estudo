const numero = parseInt(prompt("Digite um número de 1 a 5:"));
let fruta;
switch(numero) {
    case 1: fruta = "Maçã "; break;
    case 2: fruta = "Banana "; break;
    case 3: fruta = "Laranja "; break;
    case 4: fruta = "Uva "; break;
    case 5: fruta = "Morango "; break;
    default: fruta = "Número inválido! Digite de 1 a 5.";
}
alert(`Fruta: ${fruta}`);