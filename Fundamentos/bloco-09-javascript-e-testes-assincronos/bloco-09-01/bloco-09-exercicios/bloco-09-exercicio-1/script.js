// // REQUISITO 1

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A 1º
console.log(planetDistanceFromSun(venus)); // B 2º
console.log(planetDistanceFromSun(jupiter)); // C 3º

// // REQUISITO 2

console.log(planetDistanceFromSun(mars)); // A 1º
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B 3º
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C 2º


// REQUISITO 3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

setTimeout(getPlanet, 4000); 
