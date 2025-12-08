const velocidadePermitida = parseFloat(prompt("Digite a velocidade permitida na via (km/h):").replace(',', '.'));
const velocidadeMotorista = parseFloat(prompt("Digite a velocidade do motorista (km/h):").replace(',', '.'));
if(!isNaN(velocidadePermitida) && !isNaN(velocidadeMotorista) && velocidadePermitida > 0 && velocidadeMotorista >= 0) {
    const diferenca = velocidadeMotorista - velocidadePermitida;
    if(diferenca <= 0) {
        alert(`Velocidade: ${velocidadeMotorista} km/h\nLimite: ${velocidadePermitida} km/h\nDentro do limite! Sem multa.`);
    } else {
        const percentualExcesso = (diferenca / velocidadePermitida) * 100;
        let valorMulta;
        if(percentualExcesso <= 20) {
            valorMulta = 102.00;
        } else {
            valorMulta = 500.00;
        }
        alert(`MULTA POR EXCESSO DE VELOCIDADE\n\nVelocidade permitida: ${velocidadePermitida} km/h\nVelocidade registrada: ${velocidadeMotorista} km/h\nExcesso: ${diferenca.toFixed(1)} km/h (${percentualExcesso.toFixed(1)}%)\n\nValor da multa: R$ ${valorMulta.toFixed(2)}`);
    }
} else {
    alert("Por favor, digite velocidades válidas!");
}