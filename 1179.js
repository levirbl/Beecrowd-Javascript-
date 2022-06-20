let arrayP = [], arrayI = [];

for (let i = 0; i < 15; i++) {
   let test = parseInt(prompt("teste"));

   (test % 2 == 0) ? arrayP.push(test) : arrayI.push(test);

   if (arrayI.length == 5) {
      for (let j = 0; j < 5; j++) {
         console.log(`impar[${j}] = ${arrayI[j]}`);
      }
      arrayI = [];
   }

   if (arrayP.length == 5) {
      for (let j = 0; j < 5; j++) {
         console.log(`par[${j}] = ${arrayP[j]}`);
      }
      arrayP = [];
   }
}

for (let j = 0;j < arrayI.length; j++) {
   console.log(`impar[${j}] = ${arrayI[j]}`);
}
for (let j = 0; j < arrayP.length; j++) {
   console.log(`par[${j}] = ${arrayP[j]}`);
}