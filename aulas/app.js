alert('Boas vindas ao jogo do número secreto'); 
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1; 

// enquanto o chute nao for igual ao numero secreto, ele se repete
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
