// var input ='3002'
var lines = input.split('\n');
var salario = parseFloat(lines);
var imposto;

if (salario >= 0 && salario <= 2000.00) {
    console.log('Isento');
}
else if (salario > 2000.00 && salario <= 3000.00) {
    imposto = (salario - 2000.00) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
}
else if (salario > 3000.00 && salario <= 4500.00) {
    imposto = (salario - 3000.00) * 0.18 + (1000 * 0.08);
    console.log(`R$ ${imposto.toFixed(2)}`);
}
else if (salario > 4500.00) {
    imposto = (salario - 4500.00)*0.28 + (1500 * 0.18) + (1000 * 0.08);
    console.log(`R$ ${imposto.toFixed(2)}`);
}