// var input ='6 8 10';
var lines = input.split(' ');

var n1 = parseFloat(lines.shift());
var n2 = parseFloat(lines.shift());
var n3 = parseFloat(lines.shift());

if ((n1 <= n2) && (n1 <= n3)) {
    var c = n1;
    if (n2 < n3) {
        var b = n2;
        var a = n3;
    } else {
        var b = n3;
        var a = n2;
    }
} else if ((n2 <= n1) && (n2 <= n3)) {
    var c = n2;
    if (n1 < n3) {
        var b = n1;
        var a = n3;
    } else {
        var b = n3;
        var a = n1;
    }
} else if ((n3 <= n1) && (n3 <= n2)) {
    var c = n3;
    if (n1 < n2) {
        var b = n1;
        var a = n2
    } else {
        var b = n2;
        var a = n1;
    }
}
// console.log(a);
// console.log(b);
// console.log(c);

if (a >= (b + c)) {
    console.log("NAO FORMA TRIANGULO")
} else {
    if ((a**2) == ((b**2) + (c**2))) {
        console.log("TRIANGULO RETANGULO")
    }
    if ((a**2) > ((b**2) + (c**2))) {
        console.log("TRIANGULO OBTUSANGULO")
    }
    if ((a**2) < ((b**2) + (c**2))) {
        console.log("TRIANGULO ACUTANGULO")
    }
    if ((a == b) && (a == c) && (b == c)) {
        console.log("TRIANGULO EQUILATERO")
    }
    if ((a == b) && (c != a) && (c != b)) {
        console.log("TRIANGULO ISOSCELES")
    } else if ((a == c) && (b != a) && (b != c)) {
        console.log("TRIANGULO ISOSCELES")
    } else if ((c == b) && (a != b) && (a != c)) {
        console.log("TRIANGULO ISOSCELES")
    }
}