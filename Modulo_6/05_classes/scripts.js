let  cachorro ={
    patas:4,
    raca:'SRD',
    latir:function(){
        console.log("auauauauau")
    }
   
}

let labrador = Object.create(cachorro);

labrador.latir();
labrador.raca ="Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let viraLata = Object.create(cachorro);
viraLata.raca = "vira lara";

console.log(viraLata.raca);
