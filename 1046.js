// var input ='2 16';
var lines = input.split(' ');

var hora_inicial = parseInt(lines.shift());
var hora_final = parseInt(lines.shift());

var y = (24 - hora_inicial) + hora_final
if (y > 24) {
    var duracao = y - 24
    console.log(`O JOGO DUROU ${duracao} HORA(S)`);
} else {
    console.log(`O JOGO DUROU ${y} HORA(S)`);
}
