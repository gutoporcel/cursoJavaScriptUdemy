const valNascimeto = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(valNascimeto.test("02/05/1992"));
console.log(valNascimeto.test("02/05/192"));
console.log(valNascimeto.test("02/051992"));
console.log(valNascimeto.test("02/051992"));
console.log(valNascimeto.test("2/5/1992"));
