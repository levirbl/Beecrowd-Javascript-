// var input ='29/07/03';
var lines = input.split('/');

var dia = parseInt(lines.shift());
var mes = parseInt(lines.shift());
var ano = parseInt(lines.shift());

if (dia < 10) {
    dia = '0'+dia
}
if (mes < 10) {
    mes = '0'+mes
}
if (ano < 10) {
    ano = '0'+ano
}

console.log(`${mes}/${dia}/${ano}`)
console.log(`${ano}/${mes}/${dia}`)
console.log(`${dia}-${mes}-${ano}`)