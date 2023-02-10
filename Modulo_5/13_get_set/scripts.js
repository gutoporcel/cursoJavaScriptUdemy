class Carro {
    constructor(modelo,cor,potecia){
        this.modelo = modelo;
        this.cor =cor;
        this.potecia = potecia;

    }

    andar(){
        console.log("carro anda");
    }
    
    get getCor(){
        return this.cor;
    }

    set setCor(cor){

        this.cor = cor;

    }

}


let BMW =  new Carro("BMW", "a definir","V8");
console.log(BMW);

BMW.setCor = "preta";

console.log(BMW.getCor);