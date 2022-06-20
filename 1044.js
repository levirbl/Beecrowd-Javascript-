// var input ='3 63';
var lines = input.split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var m = b / a; m1 = a / b;

if (((m%2 == 0)||(m%2 == 1) || (m1%2 == 0)||(m1%2 == 1))) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos')
}