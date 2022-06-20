// var input ='8.0 4.0 4.0';
var lines = input.split(' ');

var n1 = parseFloat(lines.shift());
var n2 = parseFloat(lines.shift());
var n3 = parseFloat(lines.shift());

if ((n1 <= n2) && (n1 <= n3)) {
    var a = n1;
    if (n2 < n3) {
        var b = n2;
        var c = n3;
    } else {
        var b = n3;
        var c = n2;
    }
} else if ((n2 <= n1) && (n2 <= n3)) {
    var a = n2;
    if (n1 < n3) {
        var b = n1;
        var c = n3;
    } else {
        var b = n3;
        var c = n1;
    }
} else if ((n3 <= n1) && (n3 <= n2)) {
    var a = n3;
    if (n1 < n2) {
        var b = n1;
        var c = n2
    } else {
        var b = n2;
        var c = n1;
    }
}
// console.log(a)
// console.log(b)
// console.log(c)

var somam = a + b;

if (somam > c) {
    var perimetro = a + b + c;
    console.log("Perimetro = "+perimetro.toFixed(1));
} else if (somam <= c) {
    var areatp = ((n1 + n2) * n3 / 2);
    console.log("Area = "+areatp.toFixed(1));
}