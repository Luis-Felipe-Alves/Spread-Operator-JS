//Spread Operator:

let idades = [12, 15, 18];
let terceirIdade = [90, 102, 64];

let conj = [...terceirIdade, ...idades, 10];
console.log(conj);
console.log(idades);
console.log(terceirIdade);
