let botaoCalcular = document.getElementById('btn');

let resultado = document.getElementById('resultado');

function calcular() {
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura')?.value);

    console.log('chegou', {peso, altura})
    if (altura !=='' && peso !=='') {
        let imc = (peso / (altura * altura)).toFixed(2);
        let mensagem = ''

        console.log(imc)

        if(imc <= 18.5) {
            mensagem = 'Abaixo do peso';
        }
        else if(imc >= 18.6 && imc <= 24.9) {
            mensagem = 'Peso ideal, parabéns';
        }
        else if(imc >= 25 && imc <= 29.9) {
            mensagem = 'Levemente acima do peso.' ;
        }
        else if (imc >= 30 && imc <= 34.9) {
            mensagem = 'Obesidade grau I';
        }
        else if (imc >= 35 && imc <= 39.9) {
            mensagem = 'Obesidade grau II (severa)';
        }  else {
            mensagem = 'Obesidade grau III (mórbida)';
        }

        console.log(`O seu IMC é ${imc} ${mensagem}`)
        resultado.textContent = `O seu IMC é ${imc} ${mensagem}`;
    }
}
