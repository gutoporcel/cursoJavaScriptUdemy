const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("porcel_augusto@hotmial.com"));//true
console.log(validaEmail.test("porcel_augusto@hotmialcom"));//false
console.log(validaEmail.test("porcel_augustohotmialcom"));//false
console.log(validaEmail.test("porcel_augusto@hotmialcom"));//false
console.log(validaEmail.test("porcel12345augusto@hotmial.com"));//true