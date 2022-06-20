

var name = prompt("Primeiro nome do vendedor")
var Sf = parseFloat(prompt("Salario fixo"))
var Mt = parseFloat(prompt("Montante total das vendas"))
var percent = 0.15 * Mt
var total = Sf + percent

console.log("TOTAL = R$ "+total.toFixed(2))

  