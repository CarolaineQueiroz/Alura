alert('Boas vindas ao jogo do número secreto'); 
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1; 

// enquanto o chute nao for igual ao numero secreto, ele se repete
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 ${numeroMaximo}`);
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
let palavrasTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
}