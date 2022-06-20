//var input = "2.5 -0.4\n-12.2 7.0";
var lines = input.replace('\n',' ').split(' ');

var d;
var x1 = parseFloat(lines.shift());
var y1 = parseFloat(lines.shift());
var x2 = parseFloat(lines.shift());
var y2 = parseFloat(lines.shift());

d = ((x2-x1)**2 + (y2-y1)**2)**0.5

console.log(d.toFixed(4))