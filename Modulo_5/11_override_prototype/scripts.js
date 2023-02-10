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
Carro.prototype.rodas = 4;
Carro.prototype.potencia = 1.8;


let fiesta = new Carro("fiesta","preto",1.6) ;
let fox = new Carro("aa","aa") ;


console.log(fiesta.rodas);
//console.log(fiesta.andar);
fiesta.andar();
console.log(fox.potencia);