// var input ='5 3';
var lines = input.split(' ');

var codigo = Number(lines.shift());
var quantidade = Number(lines.shift());

var cq = 4.00; xs = 4.50; xb = 5.00; ts = 2.00; rf = 1.50; var total

if (codigo == 1) {
    total = quantidade*cq
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (codigo == 2) {
    total = quantidade*xs
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (codigo == 3) {
    total = quantidade*xb
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (codigo == 4) {
    total = quantidade*ts
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (codigo == 5) {
    total = quantidade*rf
    console.log(`Total: R$ ${total.toFixed(2)}`)
}