let numero = parseInt(prompt());
let p1, F = [''], M = [''];

while (numero > 0 && numero <= 1000)
{
    p1 = prompt().split(' ');
    p1 = p1[1];
    
    if (p1 == 'F') {
        F = F.concat('F');
    }
   
    else {
        M = M.concat('M');
    }
    numero -= 1;
}

let index = F.indexOf('')
if (index > -1) {
    F.splice(index, 1);
}

let index1 = M.indexOf('')
if (index1 > -1) {
    M.splice(index1, 1)
}

F = parseInt(F.length)
M = parseInt(M.length)
console.log(`${M} carrinhos`);
console.log(`${F} bonecas`);
