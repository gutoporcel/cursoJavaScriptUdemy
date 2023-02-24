const cep = /\d{5}-\d{3}/;

console.log(cep.test("11111-500"));
console.log(cep.test("dsdsdsds"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(11)9999-9999"));
console.log(tel.test("(11)9999-999"));