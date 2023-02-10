class Carro {
    constructor(modelo,cor,potecia){
        this.modelo = modelo;
        this.cor =cor;
        this.potecia = potecia;

    }

    andar(){
        console.log("carro anda");
    }
}
 let rodas = Symbol();

 Carro.prototype[rodas]= 4;

Carro.prototype.potencia = 1.8;


let fiesta = new Carro("fiesta","preto",1.6) ;
let fox = new Carro("aa","aa") ;

fiesta.andar();
console.log(fox.potencia);

// acessando o symbol

console.log(Carro.prototype[rodas]);
console.log(fiesta[rodas]);