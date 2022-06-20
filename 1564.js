let reclamations = parseInt(prompt("reclamações"));
while (reclamations <= 100) {
    (reclamations == 0) ? console.log("vai ter copa!") : console.log("vai ter duas!");
    reclamations = parseInt(prompt("reclamações"));
}