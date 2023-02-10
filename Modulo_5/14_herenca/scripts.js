class Mamifero {

    constructor(patas){
        this.patas = patas;
    }

}

let vaca = new Mamifero(4);
console.log (vaca.patas);
// herença

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas,patas);
        this.raca =raca;

    }

    latir(){
        console.log ("au au");
    }

}


let pug = new Cachorro(4,"pug");

console.log(pug.raca);
console.log(pug.patas);
pug.latir();
