function tabuada() {
    let num =  document.getElementById('num1');
    let result = document.getElementById('resultado');


   
    if (num?.value?.length == 0) {
        alert('Por favor, digite um número');
    } else {
        var n = Number(num.value)
        result.innerHTML = ''
        for (i=1; i<=10; i++) {
            let item = document.createElement("option")
            item.text = `${n} x ${i} = ${n*i}`

            result.appendChild(item)
        }
    }
}

