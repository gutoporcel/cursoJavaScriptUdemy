const validaUsername =/[\w]{3,19}/

console.log(validaUsername.test("jo"));
console.log(validaUsername.test("jos"));
console.log(validaUsername.test("jos@"));
console.log(validaUsername.test("jose"));
console.log(validaUsername.test("jose56789112345"));
console.log(validaUsername.test("jose56789112345 678888d c "));