function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minuto}`;
    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = '#e2cd9f';

    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png';
        document.body.style.background = '#b8846f';

    } else if (hora >= 18 && hora > 6) {
        img.src = 'noite.png';
        document.body.style.background = '#114477';

    }
    else if (hora >= 0 && hora < 6) {
        img.src = 'madrugada.png';
        document.body.style.background = '#232323';
    }
}
