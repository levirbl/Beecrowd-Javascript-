// var input ='300\n701';
// var lines = input.split('\n');

var b = parseInt(lines[0]);
var g = parseInt(lines[1]);
var bol_nec = g/2;

if (g%2 == 1) {
    bol_nec = parseInt(bol_nec);
}
bol_nec = bol_nec - b;

if (bol_nec <= 0) {
    console.log('Amelia tem todas bolinhas!')
}
else {
    console.log(`Faltam ${bol_nec} bolinha(s)`)
}