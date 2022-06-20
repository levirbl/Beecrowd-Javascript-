// var input ='-14 21 7'
var lines = input.split(' ');

var n1 = parseInt(lines.shift());
var n2 = parseInt(lines.shift());
var n3 = parseInt(lines.shift());

if ((n1 < n2) && (n1 < n3)) {
    console.log(n1);
    if (n2 < n3) {
        console.log(n2);
        console.log(n3);
    } else {
        console.log(n3);
        console.log(n2);
    }
} else if ((n2 < n1) && (n2 < n3)) {
    console.log(n2);
    if (n1 < n3) {
        console.log(n1);
        console.log(n3);
    } else {
        console.log(n3);
        console.log(n1);
    }
} else if ((n3 < n1) && (n3 < n2)) {
    console.log(n3);
    if (n1 < n2) {
        console.log(n1);
        console.log(n2);
    } else {
        console.log(n2);
        console.log(n1);
    }
}

console.log('');
console.log(n1);
console.log(n2);
console.log(n3);