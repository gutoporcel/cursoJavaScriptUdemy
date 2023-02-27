const reg = /Marca: (Nike|Adidas|Puma|Asics)/;// marca:

console.log(reg.test("Marca: Nike")); //true
console.log(reg.test("Marca: Adidas"));//true
console.log(reg.test("Marca: Puma"));//true
console.log(reg.test("Marca: Asics"));//true
console.log(reg.test("Marca: nikeee"));//false
console.log(reg.test("Marca: nike"));//false
console.log(reg.test("Marca: nike"));//true