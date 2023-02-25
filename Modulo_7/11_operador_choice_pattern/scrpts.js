const reg = /\w+: (Jose|Augusto|Porcel|Stacio)/;// nome:

console.log(reg.test("Nome: Jose")); //true
console.log(reg.test("Nome: Augusto"));//true
console.log(reg.test("Nome: Porcel"));//true
console.log(reg.test("Nome: Stacio"));//true
console.log(reg.test("Stacio"));//false
console.log(reg.test("joao"));//false
console.log(reg.test("jsjss: joao"));//true