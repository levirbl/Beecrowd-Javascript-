// var input ="10.0 203.0 5.1";
var lines = input.split(" ");

var a = parseFloat(lines.shift());
var b= parseFloat(lines.shift());
var c = parseFloat(lines.shift());

var a2 = (2*a);
var delta = ((b**2) - (4*a*c));

var bsk1 = ((-b + Math.sqrt(delta)) / a2);
var bsk2 = ((-b - Math.sqrt(delta)) / a2);

if (delta < 0) {
    console.log("Impossivel calcular");
} else if (a2 == 0) {
    console.log("Impossivel calcular");
} else {
    console.log(`R1 = ${bsk1.toFixed(5)}`);
    console.log(`R2 = ${bsk2.toFixed(5)}`);
}