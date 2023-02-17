function Carro (modelo, cor, motor){
    this.modelo = modelo;
    this.cor = cor;
    this.motor = motor;
    this.opcional = function(){
        console.log("kit trio + ar ");
    }
}

let fox = new Carro("fox","preto",1.6);
console.log(fox)
fox.opcional();