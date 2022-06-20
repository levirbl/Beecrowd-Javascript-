let mediA = (media, total) => {
    return (media/total).toFixed(2);
}

function Media(notas, MEDIA) {
    let total = 0, media = 0;
    while (notas > 0) {
        media += notas;
        total++;
        notas = parseInt(prompt('notas'));
    }
    console.log(MEDIA(media, total));
}

Media(parseInt(prompt('notas')), mediA);