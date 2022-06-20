let test = Number(prompt("casos de teste")), t1 = 0, t2 = 1, array = [0, 1];

for (let i = 0; i<test; i++) {
   let num = Number(prompt(" "));
   for (j = 0; j < num; j++) {
      let t3 = t1 + t2;
      t1 = t2;
      t2 = t3;
      array.push(t3);
   }
   console.log(`Fib(${num}) = ${array[num]}`);
}