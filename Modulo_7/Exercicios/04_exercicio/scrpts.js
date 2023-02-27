//const valIP = /[0-9]{3}[.][0-9]{1}[.][0-9]{1}[.][0-9]{1}/;
const valIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(valIP.test("111.1.0.0"));
console.log(valIP.test("152.10.323.32"));
console.log(valIP.test("152.1.1.1"));
console.log(valIP.test("123.123.123.123"));
console.log(valIP.test("8.8.8.8"));
