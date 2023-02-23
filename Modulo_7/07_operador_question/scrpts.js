const padrao   =    /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));
console.log(padrao.test("Abaci"));
console.log(padrao.test("abacai"));

const padrao2   =    /\d+\w?/;

console.log(padrao2.test("Abas1ci"));
console.log(padrao2.test("abacai121418"));