function verificarIdade (idade) {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é de menor.";
    }
}

console.log (verificarIdade(25));
console.log (verificarIdade(16));