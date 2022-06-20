var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};

let numero = parseInt(prompt());

while (numero > 0) {
  var n = prompt().split(' ');
  var n1 = n[0]; var n2 = n[1]; let d = n1/n2
  
  if (n2 == 0) {
    console.log('divisao impossivel')
  }
  else {
    console.log(d.toFixed(1))
  }
  
  numero -= 1
}