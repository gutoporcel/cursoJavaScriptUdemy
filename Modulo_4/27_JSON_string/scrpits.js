let pessoa  = {
"nome":"jose",
"sobrenome":"augusto",
"idade":25,
"profissao":"montador",
"estudante":true,
"hobbies":["Video game","leitura","correr"]
}

let pessoTexto = JSON.stringify(pessoa);
//vira uma string
console.log(pessoTexto);

let pessoaJSON = JSON.parse(pessoTexto);

console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);



