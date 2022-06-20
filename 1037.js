// var input ="100.001";
var lines = input.split('\n');
//var prompt = function(texto) {return lines.shift();};


var n = parseFloat(lines.shift());
//var raio = parseFloat(prompt("raio da esfera"))

if (n < 0) {
    console.log("Fora de intervalo");
} else if ((n >= 0)&&(n <= 25)) {
    console.log("Intervalo [0,25]");
} else if ((n > 25)&&(n <= 50)) {
    console.log("Intervalo (25,50]");
} else if ((n > 50)&&(n <= 75)) {
    console.log("Intervalo (50,75]");
} else if ((n > 75)&&(n <= 100)) {
    console.log("Intervalo (75,100]");
} else if (n > 100) {
    console.log("Fora de intervalo")
}