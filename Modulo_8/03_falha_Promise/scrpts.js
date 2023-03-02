let pro = Promise.resolve(new Error("nao deu certo"));

console.log("hello Wolrd");

pro.then(value=> console.log(value))
.catch(reason => console.log("Falho" + reason));


