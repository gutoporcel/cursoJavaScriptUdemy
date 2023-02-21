function saudacao(nome) {
    if (typeof nome != "string") {
        throw new Error("o parametro nome precida ser uma string")
    }else{
        console.log(`Olá ${nome}.`)
    }
}

saudacao("jose");
saudacao(5);
console.log("teste");