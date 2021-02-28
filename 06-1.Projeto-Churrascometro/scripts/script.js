const inputAdultos = document.getElementById('adultos');
const inputCriancas = document.getElementById('criancas');
const inputDuracao = document.getElementById('duracao');

const resultado = document.getElementById("resultado");

function calcular() {
  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputDuracao.value;

  const carneFator = carnePP(duracao);
  const cervejaFator = cervejaPP(duracao);
  const bebidaFator = bebidaPP(duracao);

  const quantidadeTotalCarne = (carneFator * adultos + (carneFator / 2 * criancas)) / 1000;
  const quantidadeTotalCeveja = Math.ceil((cervejaFator * adultos) / 355);
  const quantidadeTotalBebida = Math.ceil(bebidaFator * adultos + (bebidaFator / 2 * criancas)) / 2000;

  resultado.innerHTML = `
    <p>${quantidadeTotalCarne} Kg de Carne</p>
    <p>${quantidadeTotalCeveja} Latas de Cerveja</p>
    <p>${quantidadeTotalBebida} Pet's 2l de Bebida</p>
  `
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  }

  return 400;
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  }

  return 1200;
}

function bebidaPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  }

  return 1000;
}