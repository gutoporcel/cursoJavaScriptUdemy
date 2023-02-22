const dia =/\d\d/;

console.log(dia.test("2019") && "2019".length ==2 );
console.log(dia.test("asd"));
console.log(dia.test("22") && "22".length == 2 );
console.log(dia.test("as"));
console.log("/////////////////////////////////");
const tresLetrasMais= /\w\w\w/;

console.log(tresLetrasMais.test("asd"));
console.log(tresLetrasMais.test("asdd"));
console.log(tresLetrasMais.test("as"));