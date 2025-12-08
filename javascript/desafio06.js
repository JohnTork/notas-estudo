const n = parseInt(prompt("Digite quantos termos da sequência Fibonacci deseja ver:"));
if(!isNaN(n) && n > 0) {
    let fibonacci = [0, 1];
    for(let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
    alert(`Fibonacci (${n} termos):\n${fibonacci.slice(0, n).join(', ')}`);
} else {
    alert("Por favor, digite um número inteiro positivo!");
}