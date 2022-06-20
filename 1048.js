// var input ='2000.00'
var lines = input.split('\n');

var Salary = parseFloat(lines.shift());
var NewSalary, percent

if ((Salary >= 0) && (Salary <= 400)) {
    percent = ((Salary/100)*15);
    NewSalary = percent + Salary;
    console.log(`Novo salario: ${NewSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
    console.log(`Em percentual: 15 %`)
} else if ((Salary >= 400.01) && (Salary <= 800)) {
    percent = ((Salary/100)*12);
    NewSalary = percent + Salary;
    console.log(`Novo salario: ${NewSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
    console.log(`Em percentual: 12 %`)
} else if ((Salary >= 800.01) && (Salary <= 1200)) {
    percent = ((Salary/100)*10);
    NewSalary = percent + Salary;
    console.log(`Novo salario: ${NewSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
    console.log(`Em percentual: 10 %`)
} else if ((Salary >= 1200.01) && (Salary <= 2000)) {
    percent = ((Salary/100)*7);
    NewSalary = percent + Salary;
    console.log(`Novo salario: ${NewSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
    console.log(`Em percentual: 7 %`)
} else if ((Salary > 2000)) {
    percent = ((Salary/100)*4);
    NewSalary = percent + Salary;
    console.log(`Novo salario: ${NewSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
    console.log(`Em percentual: 4 %`)
}