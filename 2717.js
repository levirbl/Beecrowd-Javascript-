const minutesLeft = parseInt(prompt("minutos restantes"));
let [productA, productB] = prompt("minutos para a fabricação do produto").split(" ").map(Number);

((productA + productB) > minutesLeft) ? console.log("Deixa para amanha!") : console.log("Farei hoje!");