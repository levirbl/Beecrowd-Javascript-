const numberOfPlayers = parseInt(prompt("total de jogadores"));

let tSaques = 0, tBloqueios = 0, tAtaques = 0;
let sSaques = 0, sBloqueios = 0, sAtaques = 0;

for (let i = 0; i < numberOfPlayers; i++) {
   var player = prompt("nome do jogador (irrelevante)");
   var totalActivities = prompt("saques, bloqueios e ataques tentados").split(" ").map(Number);
   var sucessedActivities = prompt("sques, bloqueios e ataques com sucesso").split(" ").map(Number);

   tSaques += totalActivities[0], tBloqueios += totalActivities[1], tAtaques += totalActivities[2];
   sSaques += sucessedActivities[0], sBloqueios += sucessedActivities[1], sAtaques += sucessedActivities[2];
}

console.log(`Pontos de Saque: ${((sSaques / tSaques)*100).toFixed(2)} %.`);
console.log(`Pontos de Bloqueio: ${((sBloqueios / tBloqueios)*100).toFixed(2)} %.`);
console.log(`Pontos de Ataque: ${((sAtaques / tAtaques)*100).toFixed(2)} %.`);