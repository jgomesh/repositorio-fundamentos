// apiScript.js     
const url = `https://api.coincap.io/v2/assets`;
const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`  ;
const fetchJoke = async () => {
  const coinList = document.querySelector('#coin-list') 
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  try {
    const response = await fetch(url, myObject);
    const response2 = await fetch(baseUrl);

    const data = await response.json();
    const data2 = await response2.json();

    data.data.forEach((element) => {
      let informationCoin = document.createElement('li')
      informationCoin.innerText = `Rank:${element.rank} ${element.symbol.toUpperCase()} -- ${element.id.toUpperCase()} e está valendo aproximadamente R$ ${Math.round((parseFloat(element.priceUsd) * data2.usd.brl) * 100) / 100}`;
      coinList.appendChild(informationCoin)
      
    })
  } catch(error) {
  console.log(error)
  }
};

window.onload = () => fetchJoke();

