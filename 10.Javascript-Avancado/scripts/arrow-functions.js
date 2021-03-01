// Arrow funcions não funciona o bind e simultaneamente não interpreta corretamente o this em um contexto

const dobro = (x) => {
  console.log(2 * x);
}

// Retorno direto
const dobro2 = x => 2 * x;

dobro(2);
console.log(dobro2(2));

const sample = () => {
  console.log(this);
};

const sample2 = function () {
  console.log(this);
};

const number = {
  n: 10,
  d1: sample,
  d2: sample2,
  d3: () => {
    console.log(this);
  }
}

number.d1();
number.d2();
number.d3();

