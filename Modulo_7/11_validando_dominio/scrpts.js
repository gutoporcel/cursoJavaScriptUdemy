const validaDominio = /[?www.]\w+\.com|.com.br/

console.log(validaDominio.test("www.amon.com"));//true
console.log(validaDominio.test("www.amon.com.br"));//true
console.log(validaDominio.test("www.amon.COM"));//false
console.log(validaDominio.test("ww.amon.com"));//false
console.log(validaDominio.test("amon.com"));//false
console.log(validaDominio.test("amon.com.br"));//true
console.log(validaDominio.test("ww.amon.com.br"));//false