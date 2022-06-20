const chosenColumn = parseInt(prompt("número da coluna '0-11'"));
const chosenOperation = prompt("S - soma\nM - media");
let myArray = new Array(12);

for (let i = 0; i < 12; i++) {
   myArray[i] = [];
}

for (let i = 0, count = 0; count < 12; i++) {
   if (i == 12 && count != 11) {
      i = 0;
      count++;
   }
   else if (i == 12 && count == 11) {
      break;
   }
   
   myArray[i].push(Number(prompt("numero")));
   // console.log(myArray);
}

(chosenOperation == 'S') ? soma() : media();

function soma() {
   let soma = 0;
   for (let i = 0; i < 12; i++) {
      soma += myArray[chosenColumn][i];
   }
   console.log(soma.toFixed(1));
}

function media() {
   let media = 0;
   for (let i = 0; i < 12; i++) {
      media += myArray[chosenColumn][i];
   }
   console.log((media/12).toFixed(1));
}