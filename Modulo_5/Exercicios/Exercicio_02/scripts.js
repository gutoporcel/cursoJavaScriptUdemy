class Carrinho {

    constructor (itens,qtd=0,valor=0){

        this.itens = itens;
        this.qtd = qtd;
        this.valor =valor
     

    }

    adicionaItens(itens,qtd,valor) {
       
        this.itens = itens;
        this.qtd = qtd;
        this.valor = valor;

     // this.getItens = new Carrinho(this.getItens,this.getQtd,this.getValor);
        console.log (" iten: " + itens + " quantidade: "+ qtd + " valor total: "+ valor);
      
    }

    RemoveItens(itens){

        if (this.itens == itens) {

            delete this.itens;
            delete this.qtd;
            delete this.valor;

          
        }else{

            
            console.log ("inten invalido ou sem inten");

        }

    }
    
}

let compra = new Carrinho();

console.log(compra);
    
compra.adicionaItens("ovo",30,25);
console.log(compra);
compra.adicionaItens("ovo2",30,25);
console.log(compra);
compra.adicionaItens("ovo3",30,25);
console.log(compra);
compra.RemoveItens("ovo");
console.log(compra);
compra.adicionaItens("ovo3",30,25);
console.log(compra);

















/*
    get getItens(){

        return this.itens;

    }

    set setItens (itens){

        this.itens = itens;

    }
//
    get getQtd(){

        return this.qtd;

    }

    set setQtd (qtd){

        this.qtd = qtd;

    }
//
    get getValor(){

        return this.valor;
    }

    set setValor (valor){

        this.valor = valor;

    }
  /*  ValorTotal(){
        return  this.getQtd * this.getValor;

    }
    */