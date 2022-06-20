let chosedOption = 0, alcool = 0, gasolina = 0, diesel = 0;

while (chosedOption != 4) {
    chosedOption = parseInt(prompt("Menu:\n\n1 - Alcool\n2 - Gasolina\n3 - Diesel\n4 - Fim"));

    // Chamando as funções
    Validation();
    Menu();
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);

// Criando funções de acordo com a opção escolhida
function Validation() {
    while (chosedOption > 4 || chosedOption < 1) {
       chosedOption = parseInt(prompt("Menu:\n\n1 - Alcool\n2 - Gasolina\n3 - Diesel\n4 - Fim"));
   }
}

function Menu() {
    switch (chosedOption) {
        case 1:
            alcool += 1;
            break;
        case 2:
            gasolina += 1;
            break;
        case 3:
            diesel += 1;
            break;
        default:
            chosedOption = 4;
    }
} 