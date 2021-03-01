const url = "https://api.exchangeratesapi.io/latest?baseUSD&symbols=BRL";


function converter() {
  const value = 2331;

  fetch(url)
    .then((response) => {
      console.log(response); // response HTTP
      return response.json();
    })
    .then((data) => {
      const rate = data.rates.BRL;
      console.log(value * rate);
    });
}

converter();