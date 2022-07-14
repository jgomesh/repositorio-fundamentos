const randomHundredNumber = () => {
  return Math.floor(100* Math.random())
} 

const toUpperCaseString = (string) => {
  return string.toUpperCase();
}

const firstLetter = (string) => {
  return string[0];
}

const concatanateString = (string, string2) => {
  return `${string}${string2}`;
}


function fetchRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { fetchRandomDog, concatanateString, randomHundredNumber, toUpperCaseString, firstLetter };