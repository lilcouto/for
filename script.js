const valorTotal = prompt("Digite o valor total do produto");
const numeroDeParcelas = prompt("Digite a quantidade de parcelas");
const total = parseInt(valorTotal);
const parcelas = parseInt(numeroDeParcelas);

if (!isNaN(parcelas) && parcelas > 0) {
  const calculo = total / parcelas;
  for (let i = 1; i <= parcelas; i++) {
    console.log("O valor da parcela " + i + " é: R$ " + calculo);
  }
} else {
  console.log("Insira um valor válido");
}