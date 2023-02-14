class Carro{

    constructor(marca,cor, gasolinaR){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaR = gasolinaR;
    }
    set setMarca(marca){

        this.marca= marca;
    }
    get getMarca(){

       return this.marca;
    }
    set setCor(cor){

        this.cor= cor;
    }
    get getCor(){

        return this.cor;
    }

   set setgasolinar(gasolinaR){

        this.gasolinaR = gasolinaR;
    }
    get getGasolinar(){
        return this.gasolinaR;
    }
    
    dirigeCarro(){
        if(this.getGasolinar > 0 ){
            console.log("Carro da marca  "+this.getMarca + "\nCor: "+ this.getCor + "\nAbastecido com: " + this.getGasolinar + "L");    
            for (let i = this.getGasolinar; i > 0; i--) {
               console.log(this.setgasolinar =i );
                
            }
            console.log("abasteça o carro ");
        }
    }

    abastecer(qtd){

        this.setgasolinar = qtd
        console.log("Carro da marca "+this.getMarca + " da cor: "+ this.getCor + "abastecido com: " + this.getGasolinar + "L");



    }


}
let fox = new Carro("wv","preto",100);
console.log (fox);
fox.dirigeCarro();
fox.abastecer(50);
fox.dirigeCarro();
    
    
    
    
    
   
    