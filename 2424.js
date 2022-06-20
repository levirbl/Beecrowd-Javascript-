let coordinates = prompt("cordinates").split(' ');
let coordX = parseInt(coordinates.shift());
let coordY = parseInt(coordinates.shift());

(coordX >= 0 && coordX <= 432 && coordY >= 0 && coordY <= 468) ? console.log("dentro") : console.log("fora");