const intervalos = [
    {min: 1, max: 8},
    {min: 9, max: 16},
    {min: 17, max: 22},
    {min: 23, max: 28},
    {min: 24, max: 29}
];

const numeros = intervalos.map((intervalo, index) => {
    return Math.floor(Math.random() * (intervalo.max - intervalo.min + 1)) + intervalo.min;
});

alert(`5 números em intervalos específicos:\n${numeros.join(', ')}`);