const notab =/[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("aqui tem a"));
console.log(notab.test("ab"));

const notaz =/[^a-z]/;

console.log(notaz.test("aqui tem a"));
console.log(notaz.test("123"));
console.log(notaz.test("asdsdsdsdsadas"));

const az =/[a-z]/;

console.log(az.test("asdsdsdsdsadas"));
console.log(az.test("asdsdsdsdsadas1234s"));
console.log(az.test("12354"));