alert('Boas vindas ao jogo do número secreto'); 
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute;
let tentativas = 1; 

// enquanto o chute nao for igual ao numero secreto, ele se repete
while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e 10');
}
if (chute == numeroSecreto) {
    console.log(`Isso ai! você descobriu o ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
}
