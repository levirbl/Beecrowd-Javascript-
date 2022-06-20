
//var input = "1 1 15.10\n2 1 15.10";
var lines = input.replace('\n', ' ').split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseFloat(lines.shift());

var d = parseInt(lines.shift());
var e = parseInt(lines.shift());
var f = parseFloat(lines.shift());

var soma = ((b*c) + (e*f));

console.log("VALOR A PAGAR: R$ "+soma.toFixed(2))