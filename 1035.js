
// var input = "5 6 7 8";
var lines = input.split(" ");

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

if ((B > C)*(D > A)*((C + D) > (A + B))*(A % 2 == 0)*(((C % 2 == 0)||(C % 2 == 1))&&((D % 2 == 0)||(D % 2 == 1))))
 {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}

