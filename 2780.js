// var input ='1400';
// var lines = input.split('\n');

var D = parseInt(lines.shift()), cesta;

if (D <= 800){
    cesta = 1;
} else if (D > 800 && D <= 1400) {
    cesta = 2;
} else if (D > 1400 && D <= 2000) {
    cesta = 3;
}
console.log(cesta);