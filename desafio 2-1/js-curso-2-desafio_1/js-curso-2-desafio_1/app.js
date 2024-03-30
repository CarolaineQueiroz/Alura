let título = document.querySelector('h1');

function verificarConsole() {
    console.log('O botão foi clicado')
}

function alertando() {
    console.log('Eu amo JS')
}

function promp(){
    let cidade = prompt('Qual cidade do Brasil você esteve?');
alert(`Estive em ${cidade} e lembrei de você`);
}

function somando() {
   let numeroUm = parseInt(prompt('Digite o primeiro número'));
   let numeroDois = parseInt(prompt('Digite o segundo numero'));
   let resultado = numeroUm + numeroDois;
   console.log(`A soma entre ${numeroUm} + ${numeroDois} é igual á ${resultado}`);
}