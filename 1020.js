var dias = parseInt(prompt("dias"));

var A = parseInt(dias/365) ; RA = dias%365;
var M = parseInt(RA/30) ; RM = RA%30;
var D = parseInt(RM);

 console.log(A+" ano(s)");
 console.log(M+" mes(es)");
 console.log(D+" dia(s)");