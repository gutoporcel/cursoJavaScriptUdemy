const cachorro={
    raca: "SRD",


    uivar: function(){
        console.log("auuuuuuuuuuuuuuuu");

    },
    rosnar: function(){

        console.log("grrrrrr");

    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){

        return "A raça é " + this.raca;

    }


}
 console.log(cachorro.raca);

 cachorro.setRaca("vira lata");
 
 console.log(cachorro.raca);

console.log(cachorro.getRaca()); 