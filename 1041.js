// var input ='1.0 -10.0';
var lines = input.split(' ');

var x = Number(lines.shift());
var y = Number(lines.shift());

if ((x == 0)&&(y == 0)) {
    console.log('Origem');
} else if ((x == 0)&&((y > 0)||(y < 0))) {
    console.log('Eixo Y');
} else if (((x > 0)||(x < 0))&&(y == 0)) {
    console.log('Eixo X');
} else if ((x > 0)&&(y > 0)) {
    console.log('Q1');
} else if ((x < 0)&&(y > 0)) {
    console.log('Q2');
} else if ((x < 0)&&(y < 0)) {
    console.log('Q3');
} else if ((x > 0)&&(y < 0)) {
    console.log('Q4');
}