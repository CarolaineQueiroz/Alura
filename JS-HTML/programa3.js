var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

function exibeAlerta() {
    alert('cliquei');
}

tela.onclick = exibeAlerta;
