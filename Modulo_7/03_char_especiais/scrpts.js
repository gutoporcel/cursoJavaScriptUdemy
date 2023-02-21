const pontoRegex=/./; //ponto aceita tudo
console.log(".");
console.log(pontoRegex.test("Ola mundo"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("Ola 123"));
console.log(pontoRegex.test("123455"));
console.log(pontoRegex.test("//"));
console.log("///////////////");

const dRegex=/\d/;//aceita numeros --->[1-9]
console.log("d");
console.log(dRegex.test("Ola mundo"));
console.log(dRegex.test(" "));
console.log(dRegex.test("Ola 123"));
console.log(dRegex.test("123455"));
console.log(dRegex.test("//"));
console.log("///////////////");

const dRegex2 = /\D/;// nao aceita numero [^0-9] ----> negando
console.log("D maisculo");
console.log(dRegex2.test("Ola mundo"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("Ola 123"));
console.log(dRegex2.test("123455"));
console.log(dRegex2.test("//"));
console.log("///////////////");

const sRegex = /\s/; // so volta verdadeiro quando tem espaço
console.log("s");
console.log(sRegex.test("Ola Mundo"));
console.log(sRegex.test(" "));
console.log(sRegex.test("Ola 123"));
console.log(sRegex.test("123455"));
console.log(sRegex.test("//"));
console.log("///////////////");

const sRegex2 = /\S/; // so volta falso quando tem espaço sem nada escrito
console.log("s maiusculo");
console.log(sRegex2.test("Ola Mundo "));
console.log(sRegex2.test(" "));
console.log(sRegex2.test("Ola 123"));
console.log(sRegex2.test("123455"));
console.log(sRegex2.test("//"));
console.log("///////////////");

const wRegex = /\w/; // nao aceita carcteres especiais so alfa e numeros 
console.log("w");
console.log(wRegex.test("Ola Mundo "));
console.log(wRegex.test(" "));
console.log(wRegex.test("Ola 123"));
console.log(wRegex.test("123455"));
console.log(wRegex.test("//"));
console.log("///////////////");

const wRegex2 = /\W/; // APENAS NUMEROS  FALSE 
console.log("W maisculo");
console.log(wRegex2.test("Ola Mundo "));
console.log(wRegex2.test(" "));
console.log(wRegex2.test("Ola 123"));
console.log(wRegex2.test("123455"));
console.log(wRegex2.test("//"));
console.log("///////////////");
