var A = parseFloat(prompt("Top 10 adautos")).toFixed(1), P1 = 2
var B = parseFloat(prompt("Top 10 adautos")).toFixed(1), P2 = 3
var C = parseFloat(prompt("Top 10 adautos")).toFixed(1), P3 = 5
0<=A, B, C<=10.0
var x = (P1 + P2 + P3)
var n1 = A * P1, n2 = B * P2, n3 = C * P3
var media = (n1 + n2 + n3) / x

console.log("MEDIA = "+media.toFixed(1))   