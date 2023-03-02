let pro = Promise.resolve(5);

console.log("Hello Wolrd");
console.log("Hello Wolrd2");
console.log("Hello Wolrd3");
console.log("Hello Wolrd4");

console.log(pro);

pro.then((value)=>{return value + 5})
.then((value)=>{console.log(`O valor é ${value}`)})