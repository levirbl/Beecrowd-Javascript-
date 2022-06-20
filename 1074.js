let n = parseInt(prompt());
let evo;
while (n > 0) {
    let n1 = parseInt(prompt());
    if (n1 % 2 == 0) {
        evo = 'EVEN'
        if (n1 < 0) {
            evo = evo+' NEGATIVE'
            console.log(evo);
        }
        else if (n1 > 0) {
            evo = evo+' POSITIVE'
            console.log(evo);
        }
        else {
            evo = 'NULL'
            console.log(evo);
        }
    }
    else {
        evo = 'ODD'
        if (n1 < 0) {
            evo = evo+' NEGATIVE'
            console.log(evo);
        }
        else if (n1 > 0) {
            evo = evo+' POSITIVE'
            console.log(evo);
        }
        else {
            evo = 'NULL'
            console.log(evo);
        }
    }
    n--;
}