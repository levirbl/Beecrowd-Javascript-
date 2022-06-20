
var N = parseInt(prompt("Número"))
var Ht = parseInt(prompt("Hora trabalhada"))
var SHt = parseFloat(prompt("Salário por hora trabalhada")).toFixed(2)
var salario = ( Ht * SHt).toFixed(2)

console.log("NUMBER = "+N)
console.log("SALARY = U$ "+salario)
   