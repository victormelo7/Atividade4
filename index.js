function inserirPrecoCusto() {
    const precoCusto = prompt("Digite o preço de custo do produto:");
    return parseFloat(precoCusto);
}

function somarICMS(precoCusto) {
    const taxaICMS = 0.18;
    const icms = precoCusto * taxaICMS;
    return precoCusto + icms;
}

function mostrarResultadoICMS(precoCalculado) {
    alert(`O preço calculado com ICMS é: ${precoCalculado.toFixed(2)}`);
}

const precoCustoICMS = inserirPrecoCusto();
const precoCalculadoICMS = somarICMS(precoCustoICMS);
mostrarResultadoICMS(precoCalculadoICMS);

function inserirNumeros() {
    const numero1 = prompt("Digite o primeiro número:");
    const numero2 = prompt("Digite o segundo número:");
    return [parseInt(numero1), parseInt(numero2)];
}

function verificarMultiplos(num1, num2) {
    return num1 % num2 === 0 || num2 % num1 === 0;
}

function mostrarResultadoMultiplos(resultado) {
    if (resultado) {
        alert("Os números são múltiplos.");
    } else {
        alert("Os números não são múltiplos.");
    }
}

const [numero1, numero2] = inserirNumeros();
const resultadoMultiplos = verificarMultiplos(numero1, numero2);
mostrarResultadoMultiplos(resultadoMultiplos);