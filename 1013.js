//var input = "7 14 106";
var lines = input.split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

maior = ((a) + (b) + Math.abs((a) - (b)))  / 2
resultado = ((maior) + (c) + Math.abs((maior) - (c))) / 2

console.log(`${resultado} eh o maior`)