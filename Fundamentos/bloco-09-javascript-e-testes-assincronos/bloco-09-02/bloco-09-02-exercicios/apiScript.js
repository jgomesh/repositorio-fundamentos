// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  try {
    const containerJoke = document.querySelector('h2');
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    containerJoke.innerText =  data.joke
  } catch(error) {
  console.log(error)
  }
};

window.onload = () => fetchJoke();

