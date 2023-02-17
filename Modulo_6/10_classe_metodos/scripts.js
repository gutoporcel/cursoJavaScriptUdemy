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

let fiesta = new Carro("fiesta","preto",1.6) ;

console.log(fiesta.rodas);
console.log(fiesta.andar);
fiesta.andar();