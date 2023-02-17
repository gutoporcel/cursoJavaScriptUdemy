function Carro (modelo, cor, motor){
    this.modelo = modelo;
    this.cor = cor;
    this.motor = motor;
   
}
// boas maneiras 
Carro.prototype.opcional = function (){console.log("kit trio");}

let fox = new Carro("fox","preto",1.6);
console.log(fox)
fox.opcional();