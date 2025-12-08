const numeros = [];
for(let i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}
alert(`15 números aleatórios (0-99):\n${numeros.join(', ')}`);