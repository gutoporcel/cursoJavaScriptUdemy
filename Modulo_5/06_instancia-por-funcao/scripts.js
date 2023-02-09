function criarCachorro(raca, patas, cor){

    let cachorro =Object.create({});
    cachorro.raca =raca;
    cachorro.patas=patas;
    cachorro.cor=cor;
   
    cachorro.latir = function(){

        console.log("auau");
    }
    return cachorro;
}

let doberman = criarCachorro("doberman",4 ,"preta");

console.log(doberman);
doberman.latir();