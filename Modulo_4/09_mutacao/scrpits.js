let pessoa ={
    nome:"jose",
}

let pessoa2 = pessoa;
let pessoa3 ={
    nome: "joao"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);


console.log(pessoa.nome);
pessoa.nome ="maria";

console.log(pessoa2.nome)

