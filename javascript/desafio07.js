let fibonacci = [0, 1];
for(let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
}
alert(`Fibonacci (10 termos):\n${fibonacci.join(', ')}`);