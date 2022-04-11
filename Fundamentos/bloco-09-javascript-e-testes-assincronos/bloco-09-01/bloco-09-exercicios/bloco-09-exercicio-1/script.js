// // // // REQUISITO 1
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A 1º
// console.log(planetDistanceFromSun(venus)); // B 2º
// console.log(planetDistanceFromSun(jupiter)); // C 3º

// // // // REQUISITO 2

// console.log(planetDistanceFromSun(mars)); // A 1º
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B 3º
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C 2º


// // // REQUISITO 3
// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(getPlanet, 4000); 

// REQUISITO 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (temperatureTypeFunc = () => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`)) => {
  temperatureTypeFunc(getMarsTemperature());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// REQUISITO 5
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo