const calculePotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 3;
const expoente = 5;

const resultado = calculePotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);