let a = prompt("Digite o valor de A:");
let b = prompt("Digite o valor de B:");
alert(`Valores originais:\nA = ${a}\nB = ${b}`);
[a, b] = [b, a]; // Troca usando destructuring
alert(`Valores após a troca:\nA = ${a}\nB = ${b}`);