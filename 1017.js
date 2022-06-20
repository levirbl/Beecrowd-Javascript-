var t = parseInt(prompt("tempo gasto em hora"))
var v = parseInt(prompt("velocidade media(km/h)"))// carro faz 12 km/l
// 1 litro -> 12 quilômetros
// x litros -> y quilômetros; y = 12x; x = y/12
var distance = v * t 
var litros = (distance / 12)

console.log(litros.toFixed(3))  