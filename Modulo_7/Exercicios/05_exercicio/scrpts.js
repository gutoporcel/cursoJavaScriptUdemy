const validaUsername =/^([\w-_]\s?){3,17}$/;//meu
//const validaUsername =/^(?=.{3,16}$)[a-z0-9-_]/; //professor 

console.log(validaUsername.test("jose"));
console.log(validaUsername.test("jos"));
console.log(validaUsername.test("jose-67891123454"));
console.log(validaUsername.test("jose_67891123454x"));


console.log(validaUsername.test("123345@645"));

console.log(validaUsername.test("jos@"));


console.log(validaUsername.test("jose56789112345 678888d c "));


/*
const wRegex = /\w/; // nao aceita carcteres especiais so alfa e numeros 
console.log("w");
console.log(wRegex.test("Ola Mundo "));
console.log(wRegex.test(" "));
console.log(wRegex.test("Ola 123"));
console.log(wRegex.test("123455"));
console.log(wRegex.test("//"));
console.log("///////////////");

*/