const pessoa ={
mao:2,
}
/*
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) ===Object.prototype);

console.log(pessoa.hasOwnProperty('mao'));*/

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.mao);

console.log(pessoaNova.hasOwnProperty('mao'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);