const reg1 = /[123456]/;

console.log(reg1.test("tem 8"));
console.log(reg1.test("tem 123 e 456"));
console.log(reg1.test("tem 7"));
console.log(reg1.test("tem 2"));
console.log(reg1.test("tem 23"));
console.log(reg1.test("tem 70"));
console.log("//////////////////////////////////");
cons =reg2 =/[1-9]/
console.log(reg2.test("tem 0"));
console.log(reg2.test("tem 1"));
console.log(reg2.test("tem 10"));
console.log(reg2.test("tem"));