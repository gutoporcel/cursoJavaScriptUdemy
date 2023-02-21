const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola ?"));
console.log(reg1.test("Não tem"));

const reg2 =/bola/;

console.log(reg2.test("tem bola ?"));
console.log(reg2.test("Não tem"));
// outras formas

let txt = "tem bola ou ovo?";

console.log(reg2.test(txt));

console.log(/ovo/.test(txt));
console.log(/ovo/.test("tem ovo"));
console.log(/ovo/.test("tem "));


