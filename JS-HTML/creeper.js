var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//cabeça
pincel.fillStyle = 'darkgreen';
pincel.fillRect(200, 50, 350, 300);

//olhos
pincel.fillStyle = 'black';
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);

//nariz
pincel.fillRect(340, 200, 70, 100);

//boca
pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110);