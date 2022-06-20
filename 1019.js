var N = parseInt(prompt("tempo em segundos"));

var H = parseInt(N / 3600) ; RH = N%3600;
var M = parseInt(RH / 60) ; RM = RH%60;
var S = parseInt(RM);

console.log(H+':'+M+':'+S);