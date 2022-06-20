// var input = "3.0 4.0 5.2"
var lines = input.split(' ');

var at, ac, atp, aq, ar;
var A = parseFloat((lines.shift()));
var B = parseFloat((lines.shift()));
var C = parseFloat((lines.shift())); 

at = ((A*C) / 2); 
ac = (3.14159*(Math.pow(C,2))); 
atp = (((A + B)*C) / 2);
aq = (B*B); 
ar = (A*B);

 console.log("TRIANGULO: "+at.toFixed(3));
 console.log("CIRCULO: "+ac.toFixed(3));
 console.log("TRAPEZIO: "+atp.toFixed(3));
 console.log("QUADRADO: "+aq.toFixed(3));
 console.log("RETANGULO: "+ar.toFixed(3));
