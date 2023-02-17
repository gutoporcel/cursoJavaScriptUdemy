


class Endereco{

    constructor(rua ="Pardilhão",bairro= "chacara Mafalda",cidade= "são Paulo",estado="sp"){
        this.rua = rua;
        this.bairro =bairro;
        this.cidade =cidade;
        this.estado =estado;
    
    
    }
    set setAtualizaRua(rua){

        this.rua= rua;
    }
    set setAtualizaBairro(bairro){

        this.bairro= bairro;
    }
   set setAtualizaCidade(cidade){

        this.cidade = cidade;
    }
    set setAtualizaEstado(estado){

        this.estado= estado;
    }
     atualizaTudo(rua,bairro,cidade,estado){
        this.setAtualizaRua = rua;
        this.setAtualizaBairro= bairro;
        this.setAtualizaCidade = cidade;
        this.setAtualizaEstado= estado;
    }
    
    
    }
    
    let cliente = new Endereco();
    console.log(cliente);
    cliente.setAtualizaRua = "gomes";
    console.log(cliente);
    cliente.atualizaTudo("pinto da luz","vila Diva","São Paulo","sp");
    console.log(cliente);

    