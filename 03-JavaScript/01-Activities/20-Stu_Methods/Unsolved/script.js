const constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

// WRITE YOUR CODE BELOW
constellations.push("Canis Major");
planets.pop();
const galaxy = constellations.concat(planets);
const uppperCase = star.toUpperCase("polaris");

console.log(`galaxy array: ${galaxy}`);
console.log(`constellations array: ${constellations}`);
console.log(`planets array: ${planets}`);
console.log(`star array: ${star}`);
console.log(uppperCase);