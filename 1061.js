// var input='Dia 5\n08 : 12 : 23\nDia 9\n06 : 13 : 23';
var lines = input.replace('\n', ' ').replace('\n', ' ').replace('\n', ' ').split(' ');

var x = lines.shift()
var dia_i = parseInt(lines.shift());
var hora_i = parseInt(lines.shift());
var xx = lines.shift();
var min_i = parseInt(lines.shift());
var xxx = lines.shift();
var seg_i = parseInt(lines.shift());

var y = lines.shift();
var dia_f = parseInt(lines.shift());
var hora_f = parseInt(lines.shift());
var yy = lines.shift();
var min_f = parseInt(lines.shift());
var yyy = lines.shift();
var seg_f = parseInt(lines.shift());

// VAR NÃO UTILIZÁVEIS
x, xx, xxx, y, yy, yyy
// VAR UTILIZÁVEIS
dia_i, hora_i, min_i, seg_i, dia_f, hora_f, min_f, seg_f;
console.log(dia_i, hora_i, min_i, seg_i, dia_f, hora_f, min_f, seg_f)

var dias = dia_f - dia_i;

var horas = hora_f - hora_i;
if (horas < 0) {
    horas += 24;
    dias -= 1;
}

var minutos = min_f - min_i;
if (minutos < 0) {
    minutos += 60;
    horas -= 1;

    if (horas < 0) {
        horas += 24;
        dias -= 1;
    }
}

var segundos = seg_f - seg_i;
if (segundos < 0) {
    segundos += 60;
    minutos -= 1;
}

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);