// var input ='320.025.102-01';
var lines = input.replace('-', '.').split('.');
let a3 = parseInt(lines[0]);
let b3 = parseInt(lines[1]);
let c3 = parseInt(lines[2]);
let d2 = parseInt(lines[3]);

if (a3 < 100) {
    if (a3 < 10) {
        a3 = '0'+a3;
    }
    a3 = '0'+a3;
}
if (b3 < 100) {
    if (b3 < 10) {
        b3 = '0'+b3;
    }
    b3 = '0'+b3;
}
if (c3 < 100) {
    if (c3 < 10) {
        c3 = '0'+c3;
    }
    c3 = '0'+c3;
}
if (d2 < 10) {
    d2 = '0'+d2;
}
console.log(a3);
console.log(b3);
console.log(c3);
console.log(d2);